import { useParams, Link } from 'react-router-dom'
import {
  Truck,
  CheckCircle2,
  Zap,
  Fuel,
  ShieldCheck,
  Clock,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  PhoneCall,
  Share2,
} from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { ContactForm } from '@/components/ui/ContactForm'
import { EquipmentCard } from '@/components/ui/EquipmentCard'
import { equipment } from '@/data/equipment'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getProductSchema } from '@/lib/seo'

export function EquipmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = equipment.find((e) => e.slug === slug)

  if (!item) {
    return (
      <div className="section bg-white text-center">
        <div className="container-page max-w-md mx-auto space-y-4">
          <Truck className="w-12 h-12 text-gray-400 mx-auto" />
          <h2 className="text-2xl font-bold font-display text-gray-900">المعدة غير متوفرة</h2>
          <p className="text-sm text-gray-600">عذراً، لم نتمكن من العثور على المعدة المطلوبة.</p>
          <Link to="/equipment" className="btn btn-primary text-xs font-bold">
            العودة لأسطول المعدات
          </Link>
        </div>
      </div>
    )
  }

  const related = equipment
    .filter((e) => e.slug !== item.slug && (e.category === item.category || true))
    .slice(0, 3)

  const waMessage = `السلام عليكم، أرغب بحجز واستئجار: ${item.name} من شركة ديارنا الحديثة.`

  return (
    <>
      <SEO
        title={item.seo.title || `${item.name} | تأجير معدات بالرياض`}
        description={item.seo.description || item.description}
        canonical={`/equipment/${item.slug}`}
        schema={getProductSchema(item.name, item.description, item.image)}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container-page flex items-center gap-2">
          <Link to="/" className="hover:text-gray-900">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/equipment" className="hover:text-gray-900">المعدات الثقيلة</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">{item.name}</span>
        </div>
      </div>

      {/* Main Detail Section */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left/Main Column: Images & Specs */}
            <div className="lg:col-span-7 space-y-8">
              {/* Feature Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="badge badge-accent shadow font-bold text-xs">
                    متاح للتسليم الفوري
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge badge-muted text-xs">فئة المعدات الإنشائية</span>
                  {item.power && (
                    <span className="badge badge-muted text-xs flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#C9A96A]" />
                      <span>{item.power}</span>
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-gray-900 leading-tight">
                  {item.name}
                </h1>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Highlights / Features */}
              <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200 space-y-4">
                <h3 className="text-base font-bold font-display text-gray-900">
                  المواصفات والميزات الفنية:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rental Terms & Guarantees */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold font-display text-gray-900">
                  شروط ومزايا التأجير لدى ديارنا الحديثة:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <ShieldCheck className="w-5 h-5 text-[#A9884A] mb-2" />
                    <strong className="block font-bold text-gray-900 mb-1">فحص دوري معتمد</strong>
                    <span className="text-gray-500">فحص فني شامل قبل تسليم المعدة لضمان كفاءتها.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <Clock className="w-5 h-5 text-[#A9884A] mb-2" />
                    <strong className="block font-bold text-gray-900 mb-1">مرونة في المدد</strong>
                    <span className="text-gray-500">تأجير يومي، أسبوعي، شهري، وعقود سنوية للمشاريع.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white">
                    <Truck className="w-5 h-5 text-[#A9884A] mb-2" />
                    <strong className="block font-bold text-gray-900 mb-1">نقل للموقع مباشرة</strong>
                    <span className="text-gray-500">توصيل المعدة عبر سطحات ولوبدات متخصصة لموقعك.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Booking & Quote Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Fast Booking Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-xl sticky top-24 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                    حجز سريع ومباشر
                  </span>
                  <h3 className="text-xl font-bold font-display text-gray-900 mt-1">
                    طلب تسعير {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.pricing.note || 'احصل على أفضل سعر تأجير فوري لموقع مشروعك.'}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={buildWhatsAppLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent w-full text-sm font-bold py-3.5 flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>طلب حجز عبر واتساب</span>
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="btn btn-outline w-full text-sm font-semibold py-3 flex items-center justify-center gap-2"
                    dir="ltr"
                  >
                    <PhoneCall className="w-4 h-4 text-[#C9A96A]" />
                    <span>اتصال هاتفي: {contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-900 mb-3">
                    أو أرسل بيانات المشروع وسنعاود الاتصال بك:
                  </h4>
                  <ContactForm defaultSector="equipment" defaultEquipment={item.slug} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      {related.length > 0 && (
        <section className="section bg-[#F7F7F5] border-t border-gray-200">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                معدات إنشائية أخرى متوفرة
              </h3>
              <Link to="/equipment" className="text-xs font-bold text-[#A9884A] hover:underline flex items-center gap-1">
                <span>عرض الكل</span>
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <EquipmentCard key={rel.id} item={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
