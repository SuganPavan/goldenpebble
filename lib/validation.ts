import { z } from "zod";

export const EnquiryFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  fullName: z.string(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid mobile/WhatsApp number"),
  checkIn: z.string().min(1, "Please select check-in date"),
  checkOut: z.string().min(1, "Please select check-out date"),
  adults: z.string().min(1, "Please select number of adults"),
  children0to5: z.string(),
  children6to11: z.string(),
  children12plus: z.string(),
  children: z.string(),
  roomCategory: z.string().min(1, "Please select room category"),
  numberOfRooms: z.string().min(1, "Please select number of rooms required"),
  mealPlan: z.string().min(1, "Please select meal plan"),
  selectedPackage: z.string(),
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
