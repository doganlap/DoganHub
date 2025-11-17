import React, { useMemo, useState } from "react";

// WorkspaceItem shape:
// {
//   id: string,
//   name: string,
//   product: string,
//   type: "demo" | "poc" | "lab" | "sandbox",
//   sector: "banking" | "insurance" | "healthcare" | "energy" | "government" | "holding" | "multi" | "internal",
//   status: "ready" | "in-progress" | "idea" | "archived",
//   region: "ksa" | "gcc" | "global",
//   href: string,
//   highlight?: boolean
// }

const ITEMS = [
  {
    id: "dogan-grc-banking-demo",
    name: "Dogan Vision GRC – Demo للقطاع البنكي",
    product: "Dogan Hub / Saudi Business Gate",
    type: "demo",
    sector: "banking",
    status: "ready",
    region: "ksa",
    href: "/workspaces/dogan-grc-banking-demo",
    highlight: true,
  },
  {
    id: "saudi-business-gate-core-demo",
    name: "Saudi Business Gate – Demo المنصّة الأساسية",
    product: "Saudi Business Gate",
    type: "demo",
    sector: "multi",
    status: "ready",
    region: "ksa",
    href: "/workspaces/saudi-business-gate-core-demo",
  },
  {
    id: "healthcare-iot-security-poc",
    name: "POC – أمن أجهزة الـ IoT في القطاع الصحي",
    product: "Dogan Healthcare",
    type: "poc",
    sector: "healthcare",
    status: "in-progress",
    region: "ksa",
    href: "/workspaces/healthcare-iot-security-poc",
    highlight: true,
  },
  {
    id: "energy-risk-dashboard-demo",
    name: "Demo – لوحة مخاطر الطاقة والقطاع الصناعي",
    product: "Dogan Energy & Industrial",
    type: "demo",
    sector: "energy",
    status: "ready",
    region: "gcc",
    href: "/workspaces/energy-risk-dashboard-demo",
  },
  {
    id: "gov-supervisory-grc-lab",
    name: "Lab – مختبر GRC للجهات الحكومية والرقابية",
    product: "Dogan Gov Lab",
    type: "lab",
    sector: "government",
    status: "idea",
    region: "ksa",
    href: "/workspaces/gov-supervisory-grc-lab",
  },
  {
    id: "holding-multi-tenant-sandbox",
    name: "Sandbox – مجموعة قابضة Multi-tenant",
    product: "Dogan Holding Sandbox",
    type: "sandbox",
    sector: "holding",
    status: "in-progress",
    region: "global",
    href: "/workspaces/holding-multi-tenant-sandbox",
  },
  {
    id: "internal-robot-rfp-lab",
    name: "Lab داخلي – Robotic RFP Analyzer",
    product: "Dogan AI Lab",
    type: "lab",
    sector: "internal",
    status: "ready",
    region: "ksa",
    href: "/workspaces/internal-robot-rfp-lab",
  },
  {
    id: "insurance-fincrime-poc",
    name: "POC – مكافحة الجرائم المالية في التأمين",
    product: "Dogan Insurance",
    type: "poc",
    sector: "insurance",
    status: "in-progress",
    region: "ksa",
    href: "/workspaces/insurance-fincrime-poc",
  },
];

function badgeForType(type) {
  switch (type) {
    case "demo":
      return { label: "Demo", className: "bg-emerald-400/10 text-emerald-200" };
    case "poc":
      return { label: "POC", className: "bg-cyan-400/10 text-cyan-200" };
    case "lab":
      return { label: "Lab", className: "bg-fuchsia-400/10 text-fuchsia-200" };
    case "sandbox":
      return {
        label: "Sandbox",
        className: "bg-amber-400/10 text-amber-200",
      };
    default:
      return { label: type, className: "bg-slate-600/20 text-slate-100" };
  }
}

function badgeForStatus(status) {
  switch (status) {
    case "ready":
      return { label: "جاهز للعرض", className: "text-emerald-300" };
    case "in-progress":
      return { label: "قيد التنفيذ", className: "text-amber-300" };
    case "idea":
      return { label: "فكرة / تصميم", className: "text-slate-300" };
    case "archived":
      return { label: "مؤرشف", className: "text-slate-500" };
    default:
      return { label: status, className: "text-slate-400" };
  }
}

export default function DoganHubPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("active");
  const [regionFilter, setRegionFilter] = useState("ksa");

  const filteredItems = useMemo(() => {
    return ITEMS.filter((item) => {
      if (statusFilter === "active" && item.status === "archived") return false;

      if (typeFilter !== "all" && item.type !== typeFilter) return false;
      if (sectorFilter !== "all" && item.sector !== sectorFilter) return false;
      if (regionFilter !== "all" && item.region !== regionFilter) return false;

      if (!search.trim()) return true;

      const text = (
        item.name +
        " " +
        item.product +
        " " +
        item.id
      ).toLowerCase();
      return text.includes(search.toLowerCase());
    });
  }, [search, typeFilter, sectorFilter, statusFilter, regionFilter]);

  const totalReady = ITEMS.filter((i) => i.status === "ready").length;
  const totalPoc = ITEMS.filter((i) => i.type === "poc").length;
  const totalKsa = ITEMS.filter((i) => i.region === "ksa").length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden">
        {/* خلفية + هالة للألوان */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>

        <div className="relative">
          {/* الهيدر */}
          <header className="border-b border-white/5 bg-slate-950/80 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/10">
                  <span className="text-xl">🧩</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-emerald-300">
                    Dogan Hub
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    مركز إدارة عروض Demo و POC · من السعودية إلى العالم
                  </p>
                </div>
              </div>

              <nav className="hidden items-center gap-5 text-xs text-slate-200 md:flex">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem]">
                  Powered by <span className="font-semibold">DoganConsult</span> ·
                  Engine: <span className="font-semibold">Dogan AI</span>
                </span>
              </nav>
            </div>
          </header>

          {/* الهيرو + لوحة الإحصائيات */}
          <section className="container mx-auto px-4 py-10 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_minmax(0,0.95fr)]">
              {/* نص الهيرو */}
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-slate-100 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>لوحة مركزية لكل الـ Demo و POC في منظومة Dogan</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                    مساحة عمل موحّدة{" "}
                    <span className="text-emerald-300">
                      لإدارة جميع الـ Demo و POC
                    </span>{" "}
                    عبر حلول Dogan &amp; Dogan Hub
                  </h1>
                  <p className="max-w-xl text-sm text-slate-200 md:text-[0.95rem]">
                    Dogan Hub يعرض لك{" "}
                    <span className="font-semibold">
                      كل بيئات العرض التجريبية (Demo)، مشاريع الإثبات (POC)،
                      المختبرات (Lab)، وبيئات الـ Sandbox
                    </span>{" "}
                    في مكان واحد – مصنّفة حسب القطاع، المنتج، وحالة الجاهزية – مع
                    تركيز خاص على الأسواق السعودية والخليجية.
                  </p>
                </div>

                <ul className="grid gap-3 text-xs text-slate-200 md:grid-cols-2 md:text-[0.8rem]">
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-lg">🇸🇦</span>
                    <div>
                      <p className="font-semibold text-emerald-200">
                        موجّه أولاً للسوق السعودي
                      </p>
                      <p>
                        مسارات جاهزة للبنوك، التأمين، الصحة، الطاقة، الجهات الحكومية،
                        والمجموعات القابضة داخل المملكة.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 text-lg">🌍</span>
                    <div>
                      <p className="font-semibold text-emerald-200">
                        من السعودية إلى العالم
                      </p>
                      <p>
                        نفس الـ workspace يغطّي عملاء في الخليج وأوروبا مع تمييز واضح
                        بين KSA، GCC، و Global.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* لوحة جلاس – إحصائيات + ملخص */}
              <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-emerald-200">
                      DOGAN HUB OVERVIEW
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      نظرة سريعة على العروض والحالات
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-200">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span>Workspaces Online</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 text-xs md:grid-cols-3">
                  <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-3">
                    <p className="text-[0.7rem] text-emerald-100">
                      Demo جاهز للعرض
                    </p>
                    <p className="mt-1 text-2xl font-bold text-emerald-50">
                      {totalReady}
                    </p>
                    <p className="mt-1 text-[0.7rem] text-emerald-100/80">
                      بيئات يمكن استخدامها فوراً مع العملاء واللجان.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-3">
                    <p className="text-[0.7rem] text-cyan-100">مشاريع POC</p>
                    <p className="mt-1 text-2xl font-bold text-cyan-50">
                      {totalPoc}
                    </p>
                    <p className="mt-1 text-[0.7rem] text-cyan-100/80">
                      لإثبات القيمة على بيئات حقيقية للعميل.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-fuchsia-400/40 bg-fuchsia-400/10 p-3">
                    <p className="text-[0.7rem] text-fuchsia-100">
                      تركيز داخل المملكة
                    </p>
                    <p className="mt-1 text-2xl font-bold text-fuchsia-50">
                      {totalKsa}
                    </p>
                    <p className="mt-1 text-[0.7rem] text-fuchsia-100/80">
                      Workspaces موجهة للسوق السعودي أولاً.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-[0.75rem] text-slate-200">
                  <p className="mb-1 font-semibold text-emerald-200">
                    ما هو Dogan Hub؟
                  </p>
                  <p>
                    هو طبقة التجربة الموحدة (Experience Layer) لكل ما يتعلق بعروض
                    Dogan &amp; Dogan Hub: Demo، POC، مختبرات، وسيناريوهات
                    Presales – بحيث يكون عندك{" "}
                    <span className="font-semibold">"hub واحد"</span> لكل العروض
                    عبر القطاعات والمنتجات.
                  </p>
                </div>
              </div>
            </div>

            {/* فلاتر Workspace */}
            <section className="mt-10 rounded-3xl border border-white/10 bg-slate-950/70 p-4 md:p-5">
              <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-200">
                    مساحة عمل العروض (Demo / POC Workspace)
                  </p>
                  <p className="text-[0.8rem] text-slate-300">
                    استخدم الفلاتر أدناه لعرض البيئات حسب القطاع، النوع، المنطقة،
                    أو حالة الجاهزية.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
                {/* البحث */}
                <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-slate-900/70 px-3 py-2">
                  <span className="text-sm">🔍</span>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent text-xs text-slate-50 outline-none placeholder:text-slate-500"
                    placeholder="بحث بالاسم أو المنتج أو المعرّف..."
                  />
                </div>

                {/* نوع البيئة */}
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-slate-900/70 px-2 py-2 text-[0.75rem] text-slate-50 outline-none"
                >
                  <option value="all">كل الأنواع</option>
                  <option value="demo">Demo فقط</option>
                  <option value="poc">POC فقط</option>
                  <option value="lab">مختبرات (Lab)</option>
                  <option value="sandbox">Sandbox</option>
                </select>

                {/* القطاع */}
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-slate-900/70 px-2 py-2 text-[0.75rem] text-slate-50 outline-none"
                >
                  <option value="all">كل القطاعات</option>
                  <option value="banking">بنوك</option>
                  <option value="insurance">تأمين</option>
                  <option value="healthcare">صحة</option>
                  <option value="energy">طاقة / صناعي</option>
                  <option value="government">حكومي / رقابي</option>
                  <option value="holding">مجموعات قابضة</option>
                  <option value="multi">متعدد القطاعات</option>
                  <option value="internal">داخلي / Lab</option>
                </select>

                {/* الحالة */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-slate-900/70 px-2 py-2 text-[0.75rem] text-slate-50 outline-none"
                >
                  <option value="active">الحالات النشطة فقط</option>
                  <option value="all">كل الحالات (بما فيها المؤرشفة)</option>
                </select>

                {/* المنطقة */}
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="rounded-2xl border border-white/15 bg-slate-900/70 px-2 py-2 text-[0.75rem] text-slate-50 outline-none"
                >
                  <option value="ksa">السعودية (KSA)</option>
                  <option value="gcc">الخليج (GCC)</option>
                  <option value="global">عالمي (Global)</option>
                  <option value="all">كل المناطق</option>
                </select>
              </div>

              {/* شبكة الكروت */}
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredItems.length === 0 && (
                  <div className="col-span-full rounded-2xl border border-dashed border-slate-600 bg-slate-900/70 px-4 py-6 text-center text-xs text-slate-300">
                    لا توجد بيئات مطابقة للفلاتر الحالية. جرّب توسيع نطاق البحث أو
                    تغيير الفلاتر.
                  </div>
                )}

                {filteredItems.map((item) => {
                  const typeBadge = badgeForType(item.type);
                  const statusBadge = badgeForStatus(item.status);

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={`flex flex-col rounded-2xl border px-4 py-4 text-xs transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-slate-900/80 ${
                        item.highlight
                          ? "border-emerald-400/50 bg-slate-900/80"
                          : "border-white/10 bg-slate-900/70"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold ${typeBadge.className}`}
                        >
                          {typeBadge.label}
                        </span>
                        <span
                          className={`text-[0.65rem] font-medium ${statusBadge.className}`}
                        >
                          {statusBadge.label}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-50">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[0.75rem] text-slate-300">
                        المنتج / المسار:{" "}
                        <span className="font-medium">{item.product}</span>
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-400">
                        <span className="rounded-full bg-slate-800/70 px-2 py-0.5">
                          القطاع:{" "}
                          {item.sector === "banking"
                            ? "بنوك"
                            : item.sector === "insurance"
                            ? "تأمين"
                            : item.sector === "healthcare"
                            ? "صحة"
                            : item.sector === "energy"
                            ? "طاقة / صناعي"
                            : item.sector === "government"
                            ? "حكومي / رقابي"
                            : item.sector === "holding"
                            ? "مجموعات قابضة"
                            : item.sector === "multi"
                            ? "متعدد القطاعات"
                            : "داخلي / Lab"}
                        </span>
                        <span className="rounded-full bg-slate-800/70 px-2 py-0.5">
                          المنطقة:{" "}
                          {item.region === "ksa"
                            ? "السعودية"
                            : item.region === "gcc"
                            ? "الخليج"
                            : "عالمي"}
                        </span>
                        <span className="rounded-full bg-slate-800/70 px-2 py-0.5 font-mono">
                          ID: {item.id}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <p className="text-[0.7rem] text-slate-400">
                          اضغط للدخول إلى الـ workspace الخاص بهذه البيئة.
                        </p>
                        <span className="text-[0.8rem] text-emerald-300">
                          ← فتح
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          </section>

          {/* فوتر بسيط */}
          <footer className="border-t border-white/5 bg-slate-950/95 py-6 text-[0.7rem] text-slate-400">
            <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-200">
                  Dogan Hub – Demo &amp; POC Workspace
                </p>
                <p>
                  مركز موحّد لعروض DoganConsult &amp; Dogan AI – مصمم أولاً
                  للسوق السعودي.
                </p>
              </div>
              <div>
                <p>
                  بريد التواصل:{" "}
                  <span className="font-mono">info@doganhub.com</span>
                </p>
                <p>© {new Date().getFullYear()} DoganConsult. جميع الحقوق محفوظة.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}