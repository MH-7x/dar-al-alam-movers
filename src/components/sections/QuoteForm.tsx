"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Phone, CheckCircle, AlertCircle } from "lucide-react";
import { SendMail } from "@/lib/FormSubmission";
import { siteConfig } from "@/lib/siteConfig";
import type { FormDataType } from "@/lib/types";

type ActionState = { success: boolean; message: string } | null;

async function formAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data: FormDataType = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    moveDate: formData.get("moveDate") as string,
    fromAddress: formData.get("fromAddress") as string,
    toAddress: formData.get("toAddress") as string,
    notes: (formData.get("notes") as string) || undefined,
  };
  console.log("frontend data : ", data);
  return await SendMail(JSON.parse(JSON.stringify(data)));
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3.5 px-6 bg-[var(--primary)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
    >
      {pending ? "جاري الإرسال..." : "اطلب عرض السعر الآن"}
    </button>
  );
}

interface QuoteFormProps {
  variant?: "hero" | "section" | "compact";
  className?: string;
}

export function QuoteForm({
  variant = "section",
  className = "",
}: QuoteFormProps) {
  const [state, action] = useActionState(formAction, null);

  if (state?.success) {
    return (
      <div
        className={`bg-white rounded-xl p-8 shadow-md text-center ${className}`}
      >
        <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-[var(--secondary)] mb-2">
          تم استلام طلبك
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          سنتصل بك خلال 10 دقائق لتأكيد التفاصيل
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-lg text-sm font-medium"
        >
          <Phone size={16} />
          <span dir="ltr">{siteConfig.phoneDisplay}</span>
        </a>
      </div>
    );
  }

  const isCompact = variant === "compact";
  const inputCls =
    "w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-lg bg-white text-[var(--secondary)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent";
  const labelCls = "block text-sm font-medium text-[var(--secondary)] mb-1.5";

  return (
    <div
      id="quote-form"
      className={`bg-white rounded-xl shadow-md p-6 ${isCompact ? "" : "md:p-8"} ${className}`}
    >
      <h3 className="text-lg font-medium text-[var(--secondary)] mb-5">
        احصل على عرض سعر مجاني
      </h3>
      {state && !state.success && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <AlertCircle size={16} />
          <span>{state.message}</span>
        </div>
      )}
      <form
        action={action}
        className={`flex flex-col gap-4 ${isCompact ? "" : ""}`}
      >
        <div
          className={isCompact ? "" : "grid grid-cols-1 md:grid-cols-2 gap-4"}
        >
          <div>
            <label htmlFor="name" className={labelCls}>
              الاسم <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              className={inputCls}
              placeholder="الاسم الكامل"
            />
          </div>
          <div className={isCompact ? "mt-4" : undefined}>
            <label htmlFor="phone" className={labelCls}>
              رقم الجوال <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              dir="ltr"
              required
              pattern="[0-9+\s\-]{7,15}"
              className={inputCls}
              placeholder="05xxxxxxxx"
            />
          </div>
        </div>

        {!isCompact && (
          <>
            <div>
              <label htmlFor="moveDate" className={labelCls}>
                تاريخ النقل <span className="text-red-500">*</span>
              </label>
              <input
                id="moveDate"
                name="moveDate"
                type="date"
                required
                className={inputCls}
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label htmlFor="fromAddress" className={labelCls}>
                  العنوان الحالي <span className="text-red-500">*</span>
                </label>
                <input
                  id="fromAddress"
                  name="fromAddress"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="المنطقة والمبنى الحالي"
                />
              </div>
              <div>
                <label htmlFor="toAddress" className={labelCls}>
                  العنوان الجديد <span className="text-red-500">*</span>
                </label>
                <input
                  id="toAddress"
                  name="toAddress"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="المنطقة والمبنى الجديد"
                />
              </div>
            </div>
            <div>
              <label htmlFor="notes" className={labelCls}>
                تفاصيل إضافية{" "}
                <span className="text-[var(--muted-foreground)] text-xs">
                  (اختياري)
                </span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className={inputCls}
                placeholder="حجم الشقة، عدد الغرف، متطلبات خاصة..."
              />
            </div>
          </>
        )}
        {isCompact && (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
            <div>
              <label htmlFor="fromAddress" className={labelCls}>
                العنوان الحالي <span className="text-red-500">*</span>
              </label>
              <input
                id="fromAddress"
                name="fromAddress"
                type="text"
                required
                className={inputCls}
                placeholder="المنطقة والمبنى الحالي"
              />
            </div>
            <div>
              <label htmlFor="toAddress" className={labelCls}>
                العنوان الجديد <span className="text-red-500">*</span>
              </label>
              <input
                id="toAddress"
                name="toAddress"
                type="text"
                required
                className={inputCls}
                placeholder="المنطقة والمبنى الجديد"
              />
            </div>
          </div>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
