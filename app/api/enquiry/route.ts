import { NextRequest, NextResponse } from "next/server";
import { EnquiryFormSchema } from "@/lib/validation";
import { sendEnquiryEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body with Zod
    const validationResult = EnquiryFormSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");

      return NextResponse.json(
        {
          success: false,
          error: `Form validation failed: ${errorMessages}`
        },
        { status: 400 }
      );
    }

    // Send email via Resend
    const emailResult = await sendEnquiryEmail(validationResult.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || "Email delivery failed on server."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: emailResult.messageId
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred while processing your enquiry.";
    console.error("[API Enquiry Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
