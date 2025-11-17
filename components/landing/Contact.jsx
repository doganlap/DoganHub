import React, { useState } from "react";

const BFF_BASE_URL =
  process.env.VITE_BFF_URL && process.env.VITE_BFF_URL !== ""
    ? process.env.VITE_BFF_URL
    : "";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successData, setSuccessData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessData(null);

    try {
      const endpoint = `${BFF_BASE_URL}/public/contact/submit`.replace(
        "//public",
        "/public"
      );

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          subject,
          message,
          source: "saudi-business-gate-landing-contact",
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `Contact submission failed (${res.status}) – ${text || "Unknown error"}`
        );
      }

      const data = await res.json();
      setSuccessData(data);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "حدث خطأ غير متوقع.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 md:py-24"
    >
      {/* خلفية */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950" />
        <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span>تواصل معنا · Get in Touch</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-50 md:text-4xl">
            اتصل بنا
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            نحن هنا للمساعدة. تواصل معنا لأي استفسارات أو للحصول على مزيد من
            المعلومات حول منصة الحوكمة
          </p>
          <p className="mx-auto mt-w-2xl text-sm text-slate-400">
            We're here to help. Contact us with any questions or to learn more
            about our GRC Platform
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-6 shadow-xl backdrop-blur-xl md:p-8">
            <h3 className="mb-2 text-xl font-bold text-slate-50">
              أرسل لنا رسالة
            </h3>
            <h4 className="mb-6 text-lg font-semibold text-slate-300">
              Send Us a Message
            </h4>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span>Full Name · الاسم الكامل</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span>Email · البريد الإلكتروني</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                    <span>Phone · الهاتف</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                    <span>Company · الشركة</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span>Subject · الموضوع</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                  placeholder="Inquiry about GRC Platform"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span>Message · الرسالة</span>
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-indigo-400/70"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {errorMessage && (
                <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  <div className="flex items-center gap-2">
                    <span>⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {successData && (
                <div className="rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-100">
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span>
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                  {successData.ticketId && (
                    <p className="mt-1 text-xs text-green-200">
                      Ticket ID: {successData.ticketId}
                    </p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                    <span>جارٍ الإرسال...</span>
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

