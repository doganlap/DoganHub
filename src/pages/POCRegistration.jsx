import React, { useState } from "react";

const BFF_BASE_URL =
  process.env.VITE_BFF_URL && process.env.VITE_BFF_URL !== ""
    ? process.env.VITE_BFF_URL
    : "";

export default function POCRegistration() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sector, setSector] = useState("");
  const [currentSystems, setCurrentSystems] = useState("");
  const [projectScope, setProjectScope] = useState("");
  const [timeline, setTimeline] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successData, setSuccessData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessData(null);

    try {
      const endpoint = `${BFF_BASE_URL}/public/poc/request`.replace(
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
          phone,
          companyName,
          sector,
          currentSystems,
          projectScope,
          timeline,
          notes,
          source: "saudi-business-gate-landing-poc",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `POC request failed (${res.status}) – ${text || "Unknown error"}`
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
        {/* خلفية */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-slate-950 to-slate-950" />
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        </div>

        <div className="relative">
          {/* HEADER */}
          <header className="border-b border-white/5">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10">
                  <span className="text-lg">🧠</span>
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold tracking-wide text-cyan-300">
                    Saudi Business Gate · POC
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    Enterprise GRC Solutions
                  </p>
                </div>
              </div>

              <a
                href="/"
                className="text-xs text-slate-200 hover:text-cyan-300 transition"
              >
                العودة للصفحة الرئيسية
              </a>
            </div>
          </header>

          {/* المحتوى */}
          <section className="container mx-auto px-4 py-10 md:py-16">
            <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)]">
              {/* النص التعريفي */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-slate-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>طلب POC مؤسسي · ربط على بيئتك الفعلية</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-50 md:text-3xl">
                  جدولة{" "}
                  <span className="text-cyan-300">POC حقيقي</span> على أنظمة
                  مؤسستك
                </h1>

                <p className="text-sm text-slate-200 md:text-[0.9rem]">
                  هذا النموذج موجّه للجهات التي ترغب في{" "}
                  <span className="font-semibold">
                    تجربة منصة Saudi Business Gate على بيئتها الفعلية
                  </span>{" "}
                  (ERP، Core، EMR، أو غيرها)، مع Use Cases محددة متفق عليها.
                </p>

                <div className="grid gap-3 text-xs text-slate-200 md:grid-cols-2 md:text-[0.8rem]">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                    <p className="mb-1 font-semibold text-cyan-200">
                      ماذا يشمل الـ POC؟
                    </p>
                    <ul className="list-disc space-y-1 pr-4">
                      <li>ربط نظام أو نظامين رئيسيين (ERP/Core/EMR).</li>
                      <li>تهيئة نماذج المخاطر والامتثال المناسبة لقطاعك.</li>
                      <li>لوحات تحكم تنفيذية حقيقية على بياناتكم.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                    <p className="mb-1 font-semibold text-cyan-200">
                      لمن هذا المسار؟
                    </p>
                    <ul className="list-disc space-y-1 pr-4">
                      <li>الجهات الجادة قبل قرار شراء.</li>
                      <li>المجموعات / Holding التي تحتاج Pilot متعدد الفروع.</li>
                      <li>جهات حكومية / رقابية تبحث عن منصة إشرافية.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* فورم POC – جلاس مورفيزم */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-5 shadow-xl backdrop-blur-xl">
                <h2 className="mb-3 text-lg font-semibold text-slate-50">
                  نموذج طلب POC
                </h2>
                <p className="mb-5 text-xs text-slate-300">
                  كلما كانت المعلومات أوضح، كان تصميم الـ POC أكثر دقة وفائدة
                  لفريقك.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-200">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
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
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-200">
                        رقم الجوال / الاتصال
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                        placeholder="+9665xxxxxxxx"
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
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                        placeholder="مثال: Saudi Business Gate Holding"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      القطاع
                    </label>
                    <select
                      required
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-cyan-400/70"
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
                      الأنظمة الحالية المستهدفة في الـ POC
                    </label>
                    <textarea
                      value={currentSystems}
                      onChange={(e) => setCurrentSystems(e.target.value)}
                      rows={2}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                      placeholder="مثال: SAP ERP، Core Banking، EMR، نظام مطالبات التأمين..."
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      نطاق الـ POC (Use Cases)
                    </label>
                    <textarea
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      rows={3}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                      placeholder="مثال: لوحة مخاطر للمجلس، PDPL Dashboard، RFP Analyzer لمناقصات قادمة..."
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      الإطار الزمني المفضّل للـ POC
                    </label>
                    <input
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                      placeholder="مثال: 4–6 أسابيع، خلال الربع الرابع 2025..."
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      ملاحظات إضافية / متطلبات خاصة
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400/70"
                      placeholder="أي تفاصيل إضافية حول الحوكمة، المخاطر، أو المتطلبات التنظيمية..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-[0.75rem] text-red-100">
                      {errorMessage}
                    </div>
                  )}

                  {successData && (
                    <div className="space-y-1 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-[0.75rem] text-cyan-50">
                      <p className="font-semibold">تم استلام طلب الـ POC ✅</p>
                      {successData.requestId && (
                        <p>رقم الطلب: {successData.requestId}</p>
                      )}
                      {successData.status && (
                        <p>الحالة من النظام: {successData.status}</p>
                      )}
                      <p className="text-cyan-100/80">
                        سيتم التواصل معك لتنسيق جلسة تفصيلية وتحديد نطاق الـ POC
                        وربط الأنظمة المستهدفة. يمكن مشاركة NDA / اتفاقيات رسمية
                        حسب سياسة الجهة.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "جاري إرسال طلب POC..." : "إرسال طلب POC"}
                  </button>

                  <p className="mt-2 text-[0.7rem] text-slate-400">
                    سيتم استخدام هذه البيانات لتجهيز مقترح POC وربطه بفريق
                    DoganConsult، مع الالتزام بالأنظمة السعودية ذات الصلة
                    (مثل PDPL) في التعامل مع بياناتكم.
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
