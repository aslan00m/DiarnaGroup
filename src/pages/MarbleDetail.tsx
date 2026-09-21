import { useParams, Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, ChevronRight, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { ContactForm } from '@/components/ui/ContactForm'
import { marbleServices } from '@/data/services'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function MarbleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = marbleServices.find((m) => m.slug === slug)

  if (!item) {
    return (
      <div className="section text-center">
        <div className="container-page max-w-md mx-auto space-y-4">
          <Sparkles className="w-12 h-12 text-gray-400 mx-auto" />
          <h2 className="text-2xl font-bold font-display text-gray-900">الخدمة غير موجودة</h2>
          <p className="text-sm text-gray-600">عذراً، لم يتم العثور على الصفحة المطلوبة في قطاع الرخام.</p>
          <Link to="/marble" className="btn btn-primary text-xs font-bold">
            العودة لقطاع الرخام
          </Link>
        </div>
      </div>
    )
  }

  const otherServices = marbleServices.filter((m) => m.slug !== item.slug).slice(0, 4)

  return (
    <>
      <SEO
        title={`${item.name} | الرخام وتفصيله | ديارنا الحديثة`}
        description={`${item.name} — ${item.short} توريد وتفصيل وتركيب بأحدث تقنيات الليزر والقص في الرياض.`}
        canonical={`/marble/${item.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container-page flex items-center gap-2">
          <Link to="/" className="hover:text-gray-900">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/marble" className="hover:text-gray-900">الرخام</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">{item.name}</span>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] text-[#A9884A] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>خدمة متخصصة في قطاع الرخام</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                {item.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {item.short} توفر شركة ديارنا الحديثة أحدث تقنيات الفرز والقص الآلي والجلي المتطور لتنفيذ {item.name} بأعلى معايير الدقة الهندسية والفخامة البصرية.
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                <h3 className="font-bold text-base font-display text-gray-900">
                  مميزات تنفيذ {item.name} مع ديارنا:
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>قص ليزري ووترجيت دقيق خالٍ من أي تشققات أو شظايا حواف.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>مطابقة وتناسق تام لعروق الرخام الطبيعي وفق المخطط المعتمد.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>عوازل ومواد معالجة لحماية الرخام من السوائل والأملاح والخدوش.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>فريق فني متخصص بالتركيب الدقيق باستخدام موازين الليزر.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(`السلام عليكم، أود الاستفسار عن خدمة: ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-bold py-3 px-6 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>تواصل فوري عبر واتساب</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-4 sticky top-24">
                <h3 className="text-xl font-bold font-display text-gray-900">
                  طلب تسعير {item.name}
                </h3>
                <p className="text-xs text-gray-500">
                  أرسل المخطط أو المساحة التقريبية وسنزودك بعرض سعر شامل.
                </p>
                <ContactForm defaultSector="marble" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Marble Services */}
      <section className="section bg-[#F7F7F5] border-t border-gray-200">
        <div className="container-page">
          <h3 className="text-xl font-bold font-display text-gray-900 mb-6">
            خدمات أخرى في قطاع الرخام وتفصيله
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((srv) => (
              <Link
                key={srv.slug}
                to={`/marble/${srv.slug}`}
                className="card p-4 bg-white hover:border-[#C9A96A] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-bold text-sm text-gray-900 block mb-1">{srv.name}</span>
                  <span className="text-xs text-gray-500 line-clamp-2">{srv.short}</span>
                </div>
                <span className="text-[11px] font-bold text-[#A9884A] mt-3 block">
                  عرض الخدمة &larr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
