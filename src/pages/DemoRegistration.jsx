import React, { useState } from "react";

const BFF_BASE_URL =
  process.env.VITE_BFF_URL && process.env.VITE_BFF_URL !== ""
    ? process.env.VITE_BFF_URL
    : "";

export default function DemoRegistration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sector, setSector] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successData, setSuccessData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessData(null);

    try {
      const endpoint = `${BFF_BASE_URL}/public/demo/request`.replace(
        "//public",
        "/public"
      );

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          sector,
          useCase,
          source: "saudi-business-gate-landing-demo",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `Demo request failed (${res.status}) – ${text || "Unknown error"}`
        );
      }

      const data = await res.json();
      setSuccessData(data);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "حدث خطأ غير متوقع.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden">
        {/* خلفية لطيفة */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-slate-950 to-slate-950" />
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative">
          {/* HEADER البسيط */}
          <header className="border-b border-white/5">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10">
                  <span className="text-lg">🦅</span>
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold tracking-wide text-emerald-300">
                    Saudi Business Gate · Demo
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    Enterprise GRC Platform
                  </p>
                </div>
              </div>

              <a
                href="/"
                className="text-xs text-slate-200 hover:text-emerald-300 transition"
              >
                العودة للصفحة الرئيسية
              </a>
            </div>
          </header>

          {/* المحتوى */}
          <section className="container mx-auto px-4 py-10 md:py-16">
            <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[1.1fr_minmax(0,0.9fr)]">
              {/* النص التعريفي */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-slate-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>طلب Demo مباشر · Saudi Business Gate Platform</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-50 md:text-3xl">
                  اطلب عرض{" "}
                  <span className="text-emerald-300">Demo حيّ</span> على المنصة
                </h1>

                <p className="text-sm text-slate-200 md:text-[0.9rem]">
                  املاً البيانات التالية لتحصل على{" "}
                  <span className="font-semibold">عرض حيّ للمنصّة</span> يوضّح:
                  لوحات التحكم، والأدوات الذكية، ومنظور الحوكمة والمخاطر والامتثال
                  في مؤسستك. الفريق سيقوم بتهيئة Demo مناسب لقطاعك.
                </p>

                <ul className="mt-2 list-disc space-y-1 pr-5 text-xs text-slate-300 md:text-[0.8rem]">
                  <li>لا يحتاج تعديل على أنظمتك الحالية.</li>
                  <li>مثالي للعروض على الإدارة أو اللجان.</li>
                  <li>يمكن توسيعه لاحقاً إلى POC على بيئتك الفعلية.</li>
                </ul>
              </div>

              {/* الفورم – جلاس مورفيزم */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-5 shadow-xl backdrop-blur-xl">
                <h2 className="mb-3 text-lg font-semibold text-slate-50">
                  نموذج طلب Demo
                </h2>
                <p className="mb-5 text-xs text-slate-300">
                  البيانات تُستخدم لتجهيز تجربة Demo مناسبة لقطاعك وفريقك.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/70"
                      placeholder="مثال: م. أحمد الدوغان"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      البريد الإلكتروني الوظيفي
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/70"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      اسم الجهة / الشركة
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/70"
                      placeholder="مثال: Saudi Business Gate Holding"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      القطاع
                    </label>
                    <select
                      required
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-emerald-400/70"
                    >
                      <option value="">اختر القطاع</option>
                      <option value="banking_insurance">بنوك / تأمين</option>
                      <option value="healthcare">صحة / مستشفيات</option>
                      <option value="energy_industrial">طاقة / صناعي</option>
                      <option value="government">حكومي / جهة رقابية</option>
                      <option value="holding_group">مجموعة / Holding</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      أهم ما تريد رؤيته في الـ Demo
                    </label>
                    <textarea
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      rows={3}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-400/70"
                      placeholder="مثال: لوحات مخاطر البنوك، RFP Analyzer، PDPL Dashboard..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-[0.75rem] text-red-100">
                      {errorMessage}
                    </div>
                  )}

                  {successData && (
                    <div className="space-y-1 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-[0.75rem] text-emerald-50">
                      <p className="font-semibold">تم استلام طلب الـ Demo ✅</p>
                      {successData.requestId && (
                        <p>رقم الطلب: {successData.requestId}</p>
                      )}
                      {successData.status && (
                        <p>الحالة من النظام: {successData.status}</p>
                      )}
                      <p className="text-emerald-100/80">
                        سيتم التواصل معك عبر البريد لتأكيد موعد العرض وإرسال
                        تفاصيل الدخول. يمكن لاحقاً تحويل الطلب إلى POC على بيئتكم الفعلية.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "جاري إرسال الطلب..." : "إرسال طلب Demo"}
                  </button>

                  <p className="mt-2 text-[0.7rem] text-slate-400">
                    بالضغط على إرسال، فإنك توافق على استخدام بياناتك للتواصل
                    بخصوص Demo وPOC لمنصة Saudi Business Gate.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
