import { z } from "zod";

export const EnquiryFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number with country code"),
  checkIn: z.string().min(1, "Please select check-in date"),
  checkOut: z.string().min(1, "Please select check-out date"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string().min(1, "Please select number of children"),
  roomCategory: z.string().min(1, "Please select room category preference"),
  selectedPackage: z.string().min(1, "Please select package preference"),
  enquiryType: z.enum([
    "Room booking",
    "Package enquiry",
    "General enquiry",
    "Restaurant enquiry",
    "Group booking"
  ]),
  message: z.string(),
  consent: z.boolean().refine((val) => val === true, "You must agree to the privacy policy to submit")
}).refine((data) => {
  if (data.checkIn && data.checkOut) {
    const inDate = new Date(data.checkIn);
    const outDate = new Date(data.checkOut);
    return outDate > inDate;
  }
  return true;
}, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"]
});

export type EnquiryFormData = z.infer<typeof EnquiryFormSchema>;
