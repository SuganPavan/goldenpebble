import { Resend } from "resend";
import { EnquiryFormData } from "./validation";
import { HOTEL_INFO } from "./data/hotel";

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendEnquiryEmail(data: EnquiryFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const hotelEmail = process.env.HOTEL_ENQUIRY_EMAIL || HOTEL_INFO.contact.email;

  if (!apiKey || apiKey.trim() === "") {
    console.error("[Email Error] RESEND_API_KEY environment variable is missing.");
    return {
      success: false,
      error: `Server configuration error: RESEND_API_KEY is missing. Please contact Hotel Golden Pebble directly via phone/WhatsApp at ${HOTEL_INFO.contact.phone} or email at ${HOTEL_INFO.contact.email}.`
    };
  }

  try {
    const resend = new Resend(apiKey);

    const emailSubject = `New Hotel Enquiry: ${data.enquiryType} - ${data.fullName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #063F3C; padding: 24px; text-align: center;">
          <h1 style="color: #F8F6EF; margin: 0; font-size: 24px;">Hotel Golden Pebble, Havelock</h1>
          <p style="color: #C9A66B; margin: 4px 0 0 0; font-size: 14px;">New Booking / Reservation Enquiry</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <h2 style="color: #063F3C; font-size: 18px; border-bottom: 2px solid #E8DCC5; padding-bottom: 8px; margin-top: 0;">Guest Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Full Name:</td><td style="font-weight: bold; color: #0f172a;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email Address:</td><td style="font-weight: bold; color: #0f172a;">${data.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone Number:</td><td style="font-weight: bold; color: #0f172a;">${data.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Enquiry Type:</td><td style="font-weight: bold; color: #E98268;">${data.enquiryType}</td></tr>
          </table>

          <h2 style="color: #063F3C; font-size: 18px; border-bottom: 2px solid #E8DCC5; padding-bottom: 8px;">Reservation Requirements</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Check-In Date:</td><td style="font-weight: bold; color: #0f172a;">${data.checkIn || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Check-Out Date:</td><td style="font-weight: bold; color: #0f172a;">${data.checkOut || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Guests:</td><td style="font-weight: bold; color: #0f172a;">${data.adults} Adults, ${data.children} Children</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Room Category:</td><td style="font-weight: bold; color: #0f172a;">${data.roomCategory}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Selected Package:</td><td style="font-weight: bold; color: #0f172a;">${data.selectedPackage || "None"}</td></tr>
          </table>

          ${data.message ? `
          <h2 style="color: #063F3C; font-size: 18px; border-bottom: 2px solid #E8DCC5; padding-bottom: 8px;">Special Requests / Message</h2>
          <p style="background-color: #F8F6EF; padding: 12px; border-radius: 6px; font-style: italic; color: #334155; margin-top: 8px;">
            ${data.message.replace(/\n/g, "<br/>")}
          </p>
          ` : ""}
        </div>
        <div style="background-color: #F8F6EF; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
          This enquiry was submitted via the official Golden Pebble website (${HOTEL_INFO.contact.website}).
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: "Golden Pebble Website <onboarding@resend.dev>",
      to: [hotelEmail],
      subject: emailSubject,
      html: htmlContent,
      replyTo: data.email
    });

    if (response.error) {
      console.error("[Resend Error]", response.error);
      return {
        success: false,
        error: `Email delivery failed: ${response.error.message || "Provider declined request."}`
      };
    }

    return {
      success: true,
      messageId: response.data?.id
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to send email.";
    console.error("[Email Exception]", err);
    return {
      success: false,
      error: `Email server exception: ${errorMessage}`
    };
  }
}
