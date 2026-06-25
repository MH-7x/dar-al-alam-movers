"use server";

import { render } from "@react-email/components";
import type { FormDataType } from "./types";
import QuoteRequestEmail from "@/emails/QuoteRequestEmail";
import { Resend } from "resend";

export async function SendMail(
  data: FormDataType,
): Promise<{ success: boolean; message: string }> {
  try {
    const hasEmptyField = [
      data.name,
      data.phone,
      data.fromAddress,
      data.toAddress,
    ].some((val) => val.trim() === "");

    if (hasEmptyField) {
      return { success: false, message: "All fields are required." };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return { success: false, message: "Server configuration error." };
    }

    const html = await render(QuoteRequestEmail({ data }));

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailResponse = await resend.emails.send({
      from: "New Quote From Website <onboarding@resend.dev>",
      to: "daralalammovers@gmail.com",
      subject: `طلب عرض سعر — ${data.name} — ${data.phone}`,
      html,
    });

    if (emailResponse.error) {
      console.error("Email error:", emailResponse.error);
      return { success: false, message: "Failed to send email." };
    }

    console.log("Email sent:", emailResponse.data?.id);

    return { success: true, message: "تم إرسال طلبك بنجاح" };
  } catch (err) {
    console.error("SendMail error:", err);
    return {
      success: false,
      message: "حدث خطأ، يرجى المحاولة لاحقًا أو الاتصال بنا مباشرة",
    };
  }
}
