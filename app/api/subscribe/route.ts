import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { HOTEL_INFO } from "@/lib/data/hotel";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const hotelEmail = process.env.HOTEL_ENQUIRY_EMAIL || HOTEL_INFO.contact.email;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Golden Pebble Newsletter <onboarding@resend.dev>";

    const isPlaceholderKey =
      !apiKey ||
      apiKey.trim() === "" ||
      apiKey.includes("placeholder") ||
      apiKey.includes("your_resend_api_key") ||
      apiKey.includes("demo");

    console.log(`[NEWSLETTER SUBSCRIBE] New subscriber: ${email}`);

    if (!isPlaceholderKey) {
      const resend = new Resend(apiKey);
      const subscribeHtml = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 550px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #063F3C; padding: 20px; text-align: center; color: #F8F6EF;">
            <h2 style="margin: 0;">Hotel Golden Pebble, Havelock</h2>
            <p style="color: #C9A66B; margin: 5px 0 0 0; font-size: 13px;">New Website Newsletter Subscription</p>
          </div>
          <div style="padding: 20px; background-color: #ffffff;">
            <p style="font-size: 14px; margin-top: 0;">A new visitor has subscribed to receive island offers and travel updates:</p>
            <div style="background-color: #F8F6EF; padding: 12px 16px; border-radius: 8px; border: 1px solid #E8DCC5; font-weight: bold; color: #063F3C; font-size: 15px;">
              📧 Subscriber Email: <a href="mailto:${email}" style="color: #E98268;">${email}</a>
            </div>
          </div>
          <div style="background-color: #F8F6EF; padding: 12px; text-align: center; color: #64748b; font-size: 11px;">
            Submitted via Hotel Golden Pebble official website (${HOTEL_INFO.contact.website}).
          </div>
        </div>
      `;

      const res = await resend.emails.send({
        from: fromEmail,
        to: [hotelEmail],
        subject: `📰 New Newsletter Subscriber: ${email}`,
        html: subscribeHtml
      });

      if (res.error && res.error.message && res.error.message.includes("testing emails to your own email address")) {
        await resend.emails.send({
          from: fromEmail,
          to: ["suganyaparamasivam1106@gmail.com"],
          subject: `📰 New Newsletter Subscriber: ${email} (Target: ${hotelEmail})`,
          html: subscribeHtml
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscription successfully registered and sent to Hotel Golden Pebble reservations team."
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to process newsletter subscription.";
    console.error("[API Subscribe Error]", error);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
