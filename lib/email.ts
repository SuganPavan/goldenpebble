import { Resend } from "resend";
import { EnquiryFormData } from "./validation";
import { HOTEL_INFO } from "./data/hotel";

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isDemoMode?: boolean;
}

export async function sendEnquiryEmail(data: EnquiryFormData): Promise<EmailSendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const hotelEmail = process.env.HOTEL_ENQUIRY_EMAIL || HOTEL_INFO.contact.email;

  const guestName = data.fullName || `${data.firstName} ${data.lastName}`.trim();

  // Auto-calculate nights
  let nightsText = "N/A";
  if (data.checkIn && data.checkOut) {
    const inDate = new Date(data.checkIn);
    const outDate = new Date(data.checkOut);
    const diffDays = Math.ceil((outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays > 0) nightsText = `${diffDays} Night${diffDays > 1 ? "s" : ""}`;
  }

  // Check if API Key is missing or is a placeholder/demo key
  const isPlaceholderKey =
    !apiKey ||
    apiKey.trim() === "" ||
    apiKey.includes("placeholder") ||
    apiKey.includes("your_resend_api_key") ||
    apiKey.includes("demo");

  if (isPlaceholderKey) {
    console.warn("=================================================");
    console.warn("⚠️ [RESERVATION ENQUIRY RECEIVED — DEMO / FALLBACK MODE]");
    console.warn("RESEND_API_KEY is not configured with a live key.");
    console.warn(`Guest Name: ${guestName}`);
    console.warn(`Phone: ${data.phone}`);
    console.warn(`Email: ${data.email}`);
    console.warn(`Dates: ${data.checkIn} to ${data.checkOut} (${nightsText})`);
    console.warn(`Room: ${data.roomCategory} (${data.numberOfRooms || 1} Room(s))`);
    console.warn(`Meal Plan: ${data.mealPlan}`);
    console.warn(`Guests: ${data.adults} Adults | Children: 0-5Y:${data.children0to5 || 0}, 6-11Y:${data.children6to11 || 0}, 12+Y:${data.children12plus || 0}`);
    console.warn("=================================================");

    // Generate a reference ID so user submission completes smoothly
    const mockRefId = `HGP-BK-${Math.floor(100000 + Math.random() * 900000)}`;

    return {
      success: true,
      messageId: mockRefId,
      isDemoMode: true
    };
  }

  try {
    const resend = new Resend(apiKey);
    const emailSubject = `🏨 New Hotel Booking: ${data.roomCategory} (${nightsText}) - ${guestName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #063F3C; padding: 24px; text-align: center;">
          <h1 style="color: #F8F6EF; margin: 0; font-size: 24px;">Hotel Golden Pebble, Havelock</h1>
          <p style="color: #C9A66B; margin: 6px 0 0 0; font-size: 14px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">Official Room Reservation Request</p>
        </div>
        
        <div style="padding: 24px; background-color: #ffffff;">
          
          <!-- Guest Details Section -->
          <h2 style="color: #063F3C; font-size: 16px; border-bottom: 2px solid #E8DCC5; padding-bottom: 6px; margin-top: 0;">🏨 1. Guest & Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 160px;">Guest Name:</td><td style="font-weight: bold; color: #0f172a;">${guestName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Mobile / WhatsApp:</td><td style="font-weight: bold; color: #0f172a;">${data.phone}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Email Address:</td><td style="font-weight: bold; color: #0f172a;">${data.email}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Check-In Date:</td><td style="font-weight: bold; color: #063F3C;">📅 ${data.checkIn || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Check-Out Date:</td><td style="font-weight: bold; color: #063F3C;">📅 ${data.checkOut || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Duration of Stay:</td><td style="font-weight: bold; color: #C9A66B;">🌙 ${nightsText}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Adults:</td><td style="font-weight: bold; color: #0f172a;">👤 ${data.adults} Adults</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Children Breakdown:</td><td style="font-weight: bold; color: #0f172a;">
              👶 0–5 Yrs: ${data.children0to5 || "0"} | 
              👦 6–11 Yrs: ${data.children6to11 || "0"} | 
              🧑 12+ Yrs: ${data.children12plus || "0"}
            </td></tr>
          </table>

          <!-- Room Details Section -->
          <h2 style="color: #063F3C; font-size: 16px; border-bottom: 2px solid #E8DCC5; padding-bottom: 6px;">🛏️ 2. Room & Meal Plan Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 160px;">Room Category:</td><td style="font-weight: bold; color: #E98268;">${data.roomCategory}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Number of Rooms:</td><td style="font-weight: bold; color: #0f172a;">🔑 ${data.numberOfRooms || "1"} Room(s)</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Meal Plan:</td><td style="font-weight: bold; color: #063F3C;">🍽️ ${data.mealPlan || "Breakfast Included (CP)"}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Tour Package:</td><td style="font-weight: bold; color: #0f172a;">${data.selectedPackage || "None"}</td></tr>
          </table>

          ${data.message ? `
          <h2 style="color: #063F3C; font-size: 16px; border-bottom: 2px solid #E8DCC5; padding-bottom: 6px;">📝 Special Requests & Notes</h2>
          <p style="background-color: #F8F6EF; padding: 12px; border-radius: 8px; font-style: italic; color: #334155; margin-top: 8px; font-size: 13px;">
            ${data.message.replace(/\n/g, "<br/>")}
          </p>
          ` : ""}
        </div>

        <div style="background-color: #F8F6EF; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
          This booking reservation was submitted via Hotel Golden Pebble official site (${HOTEL_INFO.contact.website}).
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: "Golden Pebble Reservations <onboarding@resend.dev>",
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
