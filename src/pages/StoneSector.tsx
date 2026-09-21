import { Link } from 'react-router-dom'
import { Layers, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ui/ContactForm'
import { Gallery } from '@/components/ui/Gallery'
import { stoneServices } from '@/data/services'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const stoneImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
]

export function StoneSector() {
  return (
    <>
      <SEO
        title="الحجر والواجهات | توريد وتركيب حجر طبيعي وحجر الرياض"
        description="توريد وتركيب الحجر الطبيعي وحجر الرياض الفاخر، تنفيذ واجهات الفلل والمباني بأنظمة التثبيت الميكانيكي المعزول في الرياض والمملكة."
        canonical="/stone"
      />

      {/* Hero Header */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Layers className="w-3.5 h-3.5" />
            <span>أصالة وفخامة العمارة السعودية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            قطاع الحجر الطبيعي والواجهات المعمارية
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            نقدم حلولاً متكاملة لواجهات المباني والفلل الراقية، بدءاً من استخراج وتوريد أجود أحجار الرياض والأحجار الطبيعية، حتى التركيب الميكانيكي الدقيق والتشطيب الفني مع ضمان الجودة.
          </p>
        </div>
      </section>

      {/* Main Highlights */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="دقة وتفرد"
                title="لماذا تختار واجهات الحجر من ديارنا الحديثة؟"
                className="mb-6"
              />

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                يمثل الحجر الطبيعي عنوان الفخامة والاستدامة للمباني في المملكة. نحن نحرص على انتقاء أفضل البلوكات الحجرية وفرزها وفق أعلى معايير التجانس اللوني والصلابة ومقاومة التمليح والتأكل.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'تثبيت ميكانيكي آمن بزوايا ومسامير ستانلس ستيل معتمدة.',
                  'عزل حراري ورطوبي متكامل وراء الحجر يخفض استهلاك التكييف.',
                  'قص مخصص للمقاسات الخاصة والكورنيشات والأعمدة والزخارف.',
                  'إشراف هندسي ميداني لضبط الشواكيل والميول والمفاصل بالمليمتر.',
                  'توريد كميات ضخمة مستمرة لكبرى المجمعات السكنية والتجارية.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppLink('السلام عليكم، أرغب بطلب عرض سعر لتوريد وتركيب واجهات حجر')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-bold py-3 px-5 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>اطلب تسعير الواجهة عبر واتساب</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="واجهة حجر فيلا"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="section bg-[#F7F7F5] border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="خدمات الحجر المتخصصة"
            title="تفريعات قطاع الحجر والواجهات"
            subtitle="اختر الخدمة التخصصية للاطلاع على التفاصيل الفنية ونماذج الأعمال."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stoneServices.map((service, idx) => (
              <div
                key={service.slug}
                className="card bg-white p-6 flex flex-col justify-between border-t-2 border-t-transparent hover:border-t-[#C9A96A] transition-all"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg font-display text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.short}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    to={`/stone/${service.slug}`}
                    className="btn btn-outline w-full text-xs font-bold flex items-center justify-between"
                  >
                    <span>التفاصيل الفنية</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Showcase Gallery */}
      <section className="section bg-white border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="معرض الأعمال"
            title="نماذج حية من واجهات الحجر المنفذة"
            subtitle="اضغط على أي صورة لتكبيرها واستعراض التفاصيل المعمارية الدقيقة."
            centered
          />
          <Gallery images={stoneImages} title="واجهات الحجر" />
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section className="section bg-[#FAF7F0] border-t border-[#C9A96A]/30">
        <div className="container-page max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="طلب تسعير"
            title="احصل على عرض سعر مخصص لواجهتك"
            subtitle="أدخل بيانات مشروعك وسيقوم مهندس الواجهات بالتواصل معك وتقديم دراسة التكلفة."
            centered
          />
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <ContactForm defaultSector="stone" />
          </div>
        </div>
      </section>
    </>
  )
}
