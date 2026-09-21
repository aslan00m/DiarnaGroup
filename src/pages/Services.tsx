import { Link } from 'react-router-dom'
import { Truck, Layers, Sparkles, Building2, CheckCircle2, ArrowLeft, MessageSquare } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { services, stoneServices, marbleServices } from '@/data/services'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Services() {
  const iconMap: Record<string, typeof Truck> = {
    equipment: Truck,
    stone: Layers,
    marble: Sparkles,
    contracting: Building2,
  }

  return (
    <>
      <SEO
        title="خدماتنا وقطاعاتنا | حلول متكاملة"
        description="استكشف قطاعات شركة ديارنا الحديثة للاستثمار: تأجير المعدات الثقيلة، الحجر والواجهات، الرخام، والمقاولات العامة."
        canonical="/services"
      />

      {/* Header */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#C9A96A] tracking-wider uppercase">
            قطاعات الأعمال
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            خدمات متكاملة تغطي دورة حياة المشروع
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            من الحفر وتجهيز التربة ورفع المواد عبر أسطول معداتنا، حتى توريد وتركيب أفخم واجهات الحجر الطبيعي والرخام وتنفيذ المقاولات المتكاملة.
          </p>
        </div>
      </section>

      {/* 4 Main Sectors Deep Dive */}
      <section className="section bg-white">
        <div className="container-page space-y-20">
          {services.map((sec, idx) => {
            const Icon = iconMap[sec.sector] || Truck
            const isReversed = idx % 2 === 1
            const pageLink = `/${sec.sector}`

            return (
              <div
                key={sec.id}
                id={sec.sector}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                    <img
                      src={sec.image}
                      alt={sec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="badge badge-accent font-bold shadow-md">
                        قطاع رئيسي
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider block">
                        القطاع 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
                        {sec.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {sec.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      أبرز ما نقدمه في هذا القطاع:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sec.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sector Action Links */}
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Link to={pageLink} className="btn btn-primary text-xs font-bold py-3 px-5 flex items-center gap-2">
                      <span>عرض كامل التفاصيل</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <a
                      href={buildWhatsAppLink(sec.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-xs font-semibold py-3 px-5 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>طلب عرض سعر فوري</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Sub-Services Quick Grid */}
      <section className="section bg-[#F7F7F5] border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="خدمات تخصصية دقيقة"
            title="تفريعات الخدمات المعمارية والصناعية"
            subtitle="نقدم حلولاً متخصصة في كل مرحلة تلبي أدق متطلبات المخططات الهندسية."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Stone sub-services */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-gray-900">تخصصات الحجر والواجهات</h3>
                  <span className="text-xs text-gray-500">توريد وفرز وتركيب ميكانيكي وتشطيب</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stoneServices.map((st) => (
                  <Link
                    key={st.slug}
                    to={`/stone/${st.slug}`}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-[#FAF7F0] transition-colors border border-gray-100 group block"
                  >
                    <span className="font-bold text-xs text-gray-900 group-hover:text-[#A9884A] block mb-0.5">
                      {st.name} &larr;
                    </span>
                    <span className="text-[11px] text-gray-500 leading-snug line-clamp-1">
                      {st.short}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Marble sub-services */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-gray-900">تخصصات الرخام والتفصيل</h3>
                  <span className="text-xs text-gray-500">توريد وقص ليزري ووترجيت وأرضيات ودرج</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marbleServices.map((mb) => (
                  <Link
                    key={mb.slug}
                    to={`/marble/${mb.slug}`}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-[#FAF7F0] transition-colors border border-gray-100 group block"
                  >
                    <span className="font-bold text-xs text-gray-900 group-hover:text-[#A9884A] block mb-0.5">
                      {mb.name} &larr;
                    </span>
                    <span className="text-[11px] text-gray-500 leading-snug line-clamp-1">
                      {mb.short}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
