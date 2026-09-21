import { Link } from 'react-router-dom'
import { ShieldCheck, Target, Compass, Award, CheckCircle2, Building, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { company } from '@/data/company'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function About() {
  return (
    <>
      <SEO
        title="من نحن | شركة ديارنا الحديثة للاستثمار"
        description="تعرف على شركة ديارنا الحديثة للاستثمار — رؤيتنا ورسالتنا وقطاعاتنا في المعدات الثقيلة، الحجر والواجهات، الرخام، والمقاولات في المملكة."
        canonical="/about"
      />

      {/* Hero */}
      <section className="bg-[#0F1115] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=2000&q=80"
            alt="ديارنا الحديثة"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#C9A96A] tracking-wider uppercase">
              من نحن
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
              نبذة عن شركة ديارنا الحديثة للاستثمار
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              شريكك الاستراتيجي الموثوق في تزويد قطاع الإنشاءات والتطوير العقاري في المملكة العربية السعودية بأفضل حلول المعدات، وتوريد الحجر الطبيعي، وأعمال الرخام والمقاولات.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Presentation */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                eyebrow="ريادة وخبرة"
                title="نبني شراكات متينة تنهض بمشاريع البنية التحتية"
                className="mb-6"
              />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                تأسست شركة <strong className="text-gray-900 font-bold">{company.name}</strong> لتكون ركيزة أساسية تدعم الحركة العمرانية والتنموية المتسارعة التي تشهدها المملكة، لا سيما في العاصمة الرياض وكافة المناطق الحيوية.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                انطلقنا من فهم عميق لاحتياجات المقاولين ومطوري المشاريع: سرعة الاستجابة، سلامة المعدات، جودة المواد الخام، ودقة التنفيذ. اليوم، نفتخر بامتلاك منظومة متكاملة تجمع بين توريد أحدث المعدات الثقيلة، وتشغيل أحدث خطوط قص وتفصيل الرخام، وتنفيذ أرقى واجهات الحجر الطبيعي الميكانيكي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="font-display font-bold text-2xl text-[#A9884A] block mb-1">
                    700+
                  </span>
                  <span className="text-xs text-gray-600">
                    معدة جاهزة للتشغيل ومواقع تم خدمتها بنجاح
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="font-display font-bold text-2xl text-[#A9884A] block mb-1">
                    100%
                  </span>
                  <span className="text-xs text-gray-600">
                    مطابقة لكود البناء السعودي واشتراطات السلامة المهنية
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="فريق ديارنا الحديثة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 left-6 text-white">
                  <span className="text-xs text-[#C9A96A] font-bold block mb-1">
                    فريق ميداني متخصص
                  </span>
                  <h3 className="font-display font-bold text-lg leading-tight">
                    مهندسون وفنيون ومشغلون على أعلى درجات الكفاءة والاحتراف
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-[#FAF7F0] border-y border-[#C9A96A]/20">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-900">
                رؤيتنا
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {company.vision} نهدف إلى وضع معايير جديدة للثقة وسرعة الإنجاز، لنكون الشريك المفضل للمشاريع العملاقة والمشاريع السكنية النوعية في كافة أنحاء المملكة العربية السعودية.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-900">
                رسالتنا
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {company.mission} تقديم قيمة حقيقية مستدامة تجمع بين وفرة الأسطول اللوجستي، والبراعة الفنية في صناعة وتثبيت الأحجار والرخام، والإشراف الهندسي الحريص على كل تفصيلة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="ثوابتنا"
            title="قيمنا الجوهرية"
            subtitle="مبادئ نلتزم بها في كل اتصال، وكل عقد، وكل موقع عمل نتواجد فيه."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#0F1115] text-[#C9A96A] flex items-center justify-center text-xs font-bold font-mono">
                  0{i + 1}
                </div>
                <h4 className="text-lg font-bold font-display text-gray-900">{v.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Vision 2030 Alignment Banner */}
      <section className="py-16 bg-[#0F1115] text-white">
        <div className="container-page text-center max-w-3xl space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#C9A96A] text-xs font-bold">
            رؤية السعودية 2030
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-snug">
            نساهم بفخر في بناء مستقبل البنية التحتية والنهضة المعمارية في المملكة
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            من خلال توفير المعدات الحديثة صديقة البيئة والأمان التام والالتزام بأعلى معايير الجودة المحلية والدولية.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn btn-accent text-xs font-bold py-3 px-6">
              استكشف خدماتنا
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-xs font-bold py-3 px-6 border-white/30 text-white hover:bg-white/10"
            >
              تواصل مع الإدارة
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
