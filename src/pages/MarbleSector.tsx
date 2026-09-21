import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ui/ContactForm'
import { Gallery } from '@/components/ui/Gallery'
import { marbleServices } from '@/data/services'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const marbleImages = [
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
]

export function MarbleSector() {
  return (
    <>
      <SEO
        title="الرخام وتفصيله | توريد، قص ووترجيت، أرضيات ودرج"
        description="خدمات توريد وتفصيل وتركيب الرخام الفاخر للأرضيات، الدرج، كاونترات المطابخ، وتكسيات الجدران بأحدث تقنيات الليزر والووترجيت في الرياض."
        canonical="/marble"
      />

      {/* Hero Header */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>فخامة لا متناهية ودقة متناهية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            قطاع الرخام وتفصيله الفاخر
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            نوفر تشكيلة من أندر وأجود أنواع الرخام الطبيعي والمستورد مع أحدث معامل القص بالماء المندفع (Waterjet) والتفصيل الميكانيكي للأرضيات، المداخل الفندقية، الدرج، والمطابخ.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="حرفية وتقنية"
                title="أحدث تقنيات التفصيل والتنفيذ الرخامي"
                className="mb-6"
              />

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                في شركة ديارنا الحديثة، نجمع بين عراقة الحجر الطبيعي وأحدث ما توصلت إليه التكنولوجيا الصناعية في قص وتشكيل وتلميع الرخام. نحرص على معالجة المسام، ومطابقة العروق (Bookmatch)، والجلي الكريستالي الذي يمنح الأسطح لمعاناً زجاجياً فائق النقاء.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'قص بالووترجيت (Waterjet) والليزر لتنفيذ أعقد الزخارف والرسومات الهندسية.',
                  'تفصيل درج رخامي مصمت أو معلق مع شطف وتلميع الحواف وتفريز مانع الانزلاق.',
                  'توريد ألواح ستاتوريو، كلكتا، كريما مارفل، إمبرادور، وبلاك ماركينا بضمان نقاء العروق.',
                  'أسطح كاونترات ومطابخ ومغاسل رخامية مقاومة للحرارة والبقع.',
                  'تركيب احترافي بميزان ليزري لمنع أي فروقات ميلان أو تشققات مستقبلية.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppLink('السلام عليكم، أرغب بطلب تسعير لأعمال رخام وأرضيات')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-bold py-3 px-5 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>تواصل لطلب عرض سعر رخام</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
                  alt="أرضيات رخام فاخرة"
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
            eyebrow="خدمات الرخام المتخصصة"
            title="تفريعات قطاع الرخام"
            subtitle="اختر الخدمة للاطلاع على الخيارات وأنواع الرخام المتاحة."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marbleServices.map((service, idx) => (
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
                    to={`/marble/${service.slug}`}
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

      {/* Gallery */}
      <section className="section bg-white border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="معرض الأعمال"
            title="نماذج حية من أعمال الرخام الفاخر"
            subtitle="شاهد دقة التفصيل، مطابقة العروق، واللمعان الكريستالي لأعمالنا."
            centered
          />
          <Gallery images={marbleImages} title="أعمال الرخام" />
        </div>
      </section>

      {/* Lead capture form */}
      <section className="section bg-[#FAF7F0] border-t border-[#C9A96A]/30">
        <div className="container-page max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="طلب تسعير"
            title="احصل على عرض سعر لأعمال الرخام"
            subtitle="أدخل تفاصيل ومساحة الرخام وسيقوم مسؤول المبيعات بتزويدك بالخيارات والأسعار."
            centered
          />
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <ContactForm defaultSector="marble" />
          </div>
        </div>
      </section>
    </>
  )
}
