"use server";

import type { FormDataType } from "./types";
import { APP_EMAIL, APP_NAME } from "./App";

export async function SendMail(
  data: FormDataType,
): Promise<{ success: boolean; message: string }> {
  try {
    const body = `
طلب عرض سعر جديد من موقع ${APP_NAME}

الاسم: ${data.name}
رقم الجوال: ${data.phone}
تاريخ النقل: ${data.moveDate}
العنوان الحالي: ${data.fromAddress}
العنوان الجديد: ${data.toAddress}
تفاصيل إضافية: ${data.notes ?? "لا يوجد"}
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: APP_EMAIL,
        subject: `طلب عرض سعر — ${data.name} — ${data.phone}`,
        text: body,
      }),
    });

    if (!res.ok) {
      throw new Error("Email API error");
    }

    return { success: true, message: "تم إرسال طلبك بنجاح" };
  } catch {
    return {
      success: false,
      message: "حدث خطأ، يرجى المحاولة لاحقًا أو الاتصال بنا مباشرة",
    };
  }
}
