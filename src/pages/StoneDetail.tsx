import { useParams, Link } from 'react-router-dom'
import { Layers, CheckCircle2, ChevronRight, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { ContactForm } from '@/components/ui/ContactForm'
import { stoneServices } from '@/data/services'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function StoneDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = stoneServices.find((s) => s.slug === slug)

  if (!item) {
    return (
      <div className="section text-center">
        <div className="container-page max-w-md mx-auto space-y-4">
          <Layers className="w-12 h-12 text-gray-400 mx-auto" />
          <h2 className="text-2xl font-bold font-display text-gray-900">الخدمة غير موجودة</h2>
          <p className="text-sm text-gray-600">عذراً، لم يتم العثور على الصفحة المطلوبة في قطاع الحجر.</p>
          <Link to="/stone" className="btn btn-primary text-xs font-bold">
            العودة لقطاع الحجر والواجهات
          </Link>
        </div>
      </div>
    )
  }

  const otherServices = stoneServices.filter((s) => s.slug !== item.slug).slice(0, 4)

  return (
    <>
      <SEO
        title={`${item.name} | الحجر والواجهات | ديارنا الحديثة`}
        description={`${item.name} — ${item.short} توريد وتركيب وتشطيب بأعلى المعايير في الرياض والمملكة.`}
        canonical={`/stone/${item.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container-page flex items-center gap-2">
          <Link to="/" className="hover:text-gray-900">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/stone" className="hover:text-gray-900">الحجر والواجهات</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">{item.name}</span>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] text-[#A9884A] text-xs font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>خدمة متخصصة في قطاع الحجر</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                {item.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {item.short} توفر شركة ديارنا الحديثة للاستثمار كادراً هندسياً وفنياً متمرساً لتنفيذ وتوريد {item.name} بمواصفات مطابقة لكود البناء السعودي مع ضمان جودة المواد والتثبيت.
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                <h3 className="font-bold text-base font-display text-gray-900">
                  مميزات خدماتنا في {item.name}:
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>انتقاء دقيق لأجود أنواع الحجر الطبيعي وحجر الرياض الموثوق.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>أنظمة تثبيت ميكانيكي معتمدة مقاومة للظروف المناخية في المملكة.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>سرعة التوريد وتوفير الكميات للمشاريع الصغرى والكبرى بدون انقطاع.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>عوازل حرارية ورطوبية لرفع كفاءة استهلاك الطاقة في المبنى.</span>
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
                  <span>استفسار مباشر عبر واتساب</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-4 sticky top-24">
                <h3 className="text-xl font-bold font-display text-gray-900">
                  طلب تسعير {item.name}
                </h3>
                <p className="text-xs text-gray-500">
                  أرسل أبعاد الواجهة أو موقع المشروع وسنتواصل معك فوراً.
                </p>
                <ContactForm defaultSector="stone" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Stone Services */}
      <section className="section bg-[#F7F7F5] border-t border-gray-200">
        <div className="container-page">
          <h3 className="text-xl font-bold font-display text-gray-900 mb-6">
            خدمات أخرى في قطاع الحجر والواجهات
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((srv) => (
              <Link
                key={srv.slug}
                to={`/stone/${srv.slug}`}
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
