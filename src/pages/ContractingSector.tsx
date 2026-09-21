import { Link } from 'react-router-dom'
import { Building2, CheckCircle2, ShieldCheck, HardHat, CalendarCheck, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ui/ContactForm'
import { Gallery } from '@/components/ui/Gallery'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const contractingImages = [
  'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
]

export function ContractingSector() {
  return (
    <>
      <SEO
        title="المقاولات العامة | تنفيذ المشاريع الإنشائية والتشطيبات"
        description="خدمات المقاولات العامة وإدارة وتنفيذ المشاريع السكنية والتجارية مع الالتزام بكود البناء السعودي وأعلى معايير السلامة في الرياض."
        canonical="/contracting"
      />

      {/* Hero */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Building2 className="w-3.5 h-3.5" />
            <span>تنفيذ متكامل وإشراف هندسي معتمد</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            قطاع المقاولات العامة والإنشاءات
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            تنفيذ المشاريع الإنشائية والتشطيبية للفلل والمباني التجارية مع التزام صارم بالموازنات المعتمدة، الجداول الزمنية، ومطابقة كود البناء السعودي.
          </p>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="خبرة تنفيذية"
                title="إدارة شاملة لمشروعك من المخطط حتى تسليم المفتاح"
                className="mb-6"
              />

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                تعتمد فلسفتنا في المقاولات على التكامل: نستفيد من أسطول معداتنا اللوجستية الضخمة، وخبرتنا العميقة في توريد الحجر والرخام لتقليل الهدر الزمني والتكلفة المالية لصالح العميل.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'تنفيذ أعمال العظم والخرسانات المسلحة وفق الحسابات الإنشائية الدقيقة.',
                  'تنفيذ أعمال التشطيبات المعمارية الراقية والواجهات الحديثة والنيوكلاسيك.',
                  'إدارة وضبط الجداول الزمنية لتفادي أي تأخيرات في مراحل التسليم.',
                  'فريق هندسي متخصص معتمد لدى الهيئة السعودية للمهندسين.',
                  'مطابقة تامة لمتطلبات كود البناء السعودي وشهادات إتمام البناء الرسمية.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A96A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppLink('السلام عليكم، أرغب بمناقشة مشروع مقاولات وإنشاءات')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-bold py-3 px-5 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>تواصل مع المهندس الاستشاري</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80"
                  alt="موقع إنشاءات مقاولات"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Pillars */}
      <section className="section bg-[#F7F7F5] border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="نطاق العمل"
            title="المجالات الإنشائية التي نغطيها"
            subtitle="حلول هندسية وتنفيذية موجهة لقطاعات الإسكان والأعمال والاستثمار."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-white p-6 space-y-3 border-t-4 border-t-[#0F1115]">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg font-display text-gray-900">
                مجمعات الفلل السكنية
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                بناء الفلل والقصور السكنية مع التركيز على أدق التفاصيل المعمارية، وواجهات الحجر والرخام، والعزل التام.
              </p>
            </div>

            <div className="card bg-white p-6 space-y-3 border-t-4 border-t-[#0F1115]">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg font-display text-gray-900">
                المباني والمراكز التجارية
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                تنفيذ معارض، مباني مكاتب، ومراكز تجارية بهياكل معدنية وخرسانية متطورة تلبي اشتراطات الدفاع المدني والبلدية.
              </p>
            </div>

            <div className="card bg-white p-6 space-y-3 border-t-4 border-t-[#0F1115]">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg font-display text-gray-900">
                أعمال التشطيب والتأهيل
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                تجديد المباني القائمة، تحديث الواجهات الخارجية بالحجر الميكانيكي، وإعادة تهيئة الديكورات والأرضيات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white border-t border-gray-200">
        <div className="container-page">
          <SectionHeader
            eyebrow="معرض الأعمال"
            title="لقطات من مواقع العمل ومشاريع المقاولات"
            subtitle="نلتزم بالأمان والجودة ونظافة وتنسيق الموقع طوال فترة التنفيذ."
            centered
          />
          <Gallery images={contractingImages} title="مشاريع المقاولات" />
        </div>
      </section>

      {/* Quote Section */}
      <section className="section bg-[#FAF7F0] border-t border-[#C9A96A]/30">
        <div className="container-page max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="دراسة مشروع"
            title="ناقش مشروعك مع خبرائنا الهندسيين"
            subtitle="أدخل تفاصيل ومخطط مشروعك لتحديد التكلفة والجدول الزمني المقترح."
            centered
          />
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <ContactForm defaultSector="contracting" />
          </div>
        </div>
      </section>
    </>
  )
}
