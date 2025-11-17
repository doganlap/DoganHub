import React, { useState } from "react";

const BFF_BASE_URL =
  process.env.VITE_BFF_URL && process.env.VITE_BFF_URL !== ""
    ? process.env.VITE_BFF_URL
    : "";

export default function SandboxScheduler() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [sandboxType, setSandboxType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [useCases, setUseCases] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successData, setSuccessData] = useState(null);

  const sandboxOptions = [
    { id: "grc-full", label: "منصة GRC كاملة · Full GRC Platform" },
    { id: "risk-mgmt", label: "إدارة المخاطر · Risk Management" },
    { id: "compliance", label: "الامتثال التلقائي · Compliance Automation" },
    { id: "policy-mgmt", label: "إدارة السياسات · Policy Management" },
    { id: "audit", label: "إدارة المراجعات · Audit Management" },
    { id: "custom", label: "إعداد مخصص · Custom Setup" },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  // Generate next 14 business days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDay = 1;

    while (daysAdded < 14) {
      const date = new Date(today);
      date.setDate(today.getDate() + currentDay);
      const dayOfWeek = date.getDay();

      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date.toISOString().split("T")[0]);
        daysAdded++;
      }
      currentDay++;
    }
    return dates;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessData(null);

    try {
      const endpoint = `${BFF_BASE_URL}/public/sandbox/book`.replace(
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
          sandboxType,
          preferredDate,
          preferredTime,
          useCases,
          source: "saudi-business-gate-landing-sandbox",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `Sandbox booking failed (${res.status}) – ${text || "Unknown error"}`
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
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-slate-950 to-slate-950" />
          <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative">
          {/* HEADER */}
          <header className="border-b border-white/5">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-purple-400/40 bg-purple-400/10">
                  <span className="text-lg">🚀</span>
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold tracking-wide text-purple-300">
                    Saudi Business Gate · Sandbox
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    Live Testing Environment
                  </p>
                </div>
              </div>

              <a
                href="/"
                className="text-xs text-slate-200 hover:text-purple-300 transition"
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
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>جدولة Sandbox تفاعلي · اختبر المنصة فوراً</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-50 md:text-3xl">
                  احجز جلسة{" "}
                  <span className="text-purple-300">Sandbox حيّة</span> واختبر
                  المنصة
                </h1>

                <p className="text-sm text-slate-200 md:text-[0.9rem]">
                  احصل على وصول مباشر إلى{" "}
                  <span className="font-semibold">
                    بيئة تجريبية كاملة لمدة 2-3 ساعات
                  </span>{" "}
                  مع بيانات تجريبية واقعية، بدون الحاجة لربط أنظمتك. مثالي
                  للتقييم السريع وعروض الفرق الداخلية.
                </p>

                <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="mb-2 text-xs font-semibold text-purple-200">
                    ماذا يتضمن الـ Sandbox؟
                  </p>
                  <ul className="list-disc space-y-1 pr-5 text-xs text-slate-300">
                    <li>
                      <strong>بيئة حيّة</strong> على السحابة (Azure/AWS) جاهزة
                      خلال ساعات.
                    </li>
                    <li>
                      <strong>بيانات تجريبية</strong> مُهيأة لقطاعك (بنوك، صحة،
                      صناعي، حكومي).
                    </li>
                    <li>
                      <strong>لوحات تحكم</strong> تنفيذية + تقارير GRC + أدوات
                      ذكية.
                    </li>
                    <li>
                      <strong>جلسة توجيهية</strong> اختيارية مع فريق دوغان لشرح
                      الميزات.
                    </li>
                    <li>
                      <strong>لا يحتاج</strong> ربط أنظمتك أو تعديل على بنيتك
                      التحتية.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 text-[0.7rem] text-slate-400 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">⏱️</span>
                    <span>
                      <strong>المدة:</strong> 2-3 ساعات وصول
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">🔒</span>
                    <span>
                      <strong>الأمان:</strong> بيئة معزولة لجهتك فقط
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">📊</span>
                    <span>
                      <strong>البيانات:</strong> تجريبية واقعية (ليست حقيقية)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">🎯</span>
                    <span>
                      <strong>الهدف:</strong> تقييم سريع للمنصة
                    </span>
                  </div>
                </div>
              </div>

              {/* فورم الحجز – جلاس مورفيزم */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-5 shadow-xl backdrop-blur-xl">
                <h2 className="mb-3 text-lg font-semibold text-slate-50">
                  نموذج حجز Sandbox
                </h2>
                <p className="mb-5 text-xs text-slate-300">
                  املأ البيانات وسيتم إرسال رابط الوصول إلى بريدك خلال 24 ساعة.
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
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-purple-400/70"
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
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-purple-400/70"
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
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-purple-400/70"
                      placeholder="مثال: Saudi Business Gate Holding"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      نوع Sandbox المطلوب
                    </label>
                    <select
                      required
                      value={sandboxType}
                      onChange={(e) => setSandboxType(e.target.value)}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-purple-400/70"
                    >
                      <option value="">اختر نوع Sandbox</option>
                      {sandboxOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-200">
                        التاريخ المفضّل
                      </label>
                      <select
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-purple-400/70"
                      >
                        <option value="">اختر التاريخ</option>
                        {getAvailableDates().map((date) => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString("ar-SA", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-200">
                        الوقت المفضّل
                      </label>
                      <select
                        required
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none focus:border-purple-400/70"
                      >
                        <option value="">اختر الوقت</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-200">
                      ما الذي تريد اختباره؟ (اختياري)
                    </label>
                    <textarea
                      value={useCases}
                      onChange={(e) => setUseCases(e.target.value)}
                      rows={2}
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-purple-400/70"
                      placeholder="مثال: اختبار لوحة المخاطر، RFP Analyzer، PDPL Dashboard..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-[0.75rem] text-red-100">
                      {errorMessage}
                    </div>
                  )}

                  {successData && (
                    <div className="space-y-1 rounded-2xl border border-purple-400/40 bg-purple-400/10 px-3 py-2 text-[0.75rem] text-purple-50">
                      <p className="font-semibold">تم حجز Sandbox بنجاح! 🚀</p>
                      {successData.bookingId && (
                        <p>رقم الحجز: {successData.bookingId}</p>
                      )}
                      {successData.accessLink && (
                        <p>
                          رابط الوصول:{" "}
                          <a
                            href={successData.accessLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-purple-200"
                          >
                            اضغط هنا
                          </a>
                        </p>
                      )}
                      <p className="text-purple-100/80">
                        سيتم إرسال رابط الوصول والتعليمات إلى بريدك الإلكتروني
                        خلال 24 ساعة. يمكنك البدء فوراً في اختبار المنصة!
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-full bg-purple-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-purple-500/30 transition hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting
                      ? "جاري حجز Sandbox..."
                      : "احجز Sandbox الآن"}
                  </button>

                  <p className="mt-2 text-[0.7rem] text-slate-400">
                    بالحجز، توافق على استخدام بياناتك لإنشاء بيئة Sandbox وإرسال
                    رابط الوصول. البيئة آمنة ومعزولة ولا تحتوي على بيانات حقيقية.
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
