import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Truck,
  Layers,
  Sparkles,
  Building2,
  ShieldCheck,
  Clock,
  Award,
  ArrowLeft,
  ChevronLeft,
  MessageSquare,
  PhoneCall,
  Search,
} from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EquipmentCard } from '@/components/ui/EquipmentCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ContactForm } from '@/components/ui/ContactForm'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { equipment } from '@/data/equipment'
import { projects } from '@/data/projects'
import { articles } from '@/data/articles'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/seo'

export function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const featuredEquipment = equipment.slice(0, 6)
  const featuredProjects = projects.slice(0, 3)
  const featuredArticles = articles.slice(0, 3)

  return (
    <>
      <SEO
        title="الرئيسية | حلول متكاملة للمعدات والمشاريع والواجهات"
        description={company.description}
        schema={[getOrganizationSchema(), getLocalBusinessSchema()]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0F1115] text-white overflow-hidden py-16 lg:py-24">
        {/* Background Overlay & Graphic */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=2000&q=80"
            alt="ديارنا الحديثة للاستثمار"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/90 to-transparent"></div>
        </div>

        {/* Ambient Subtle Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C9A96A]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left/Main Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A96A]/30 text-xs text-[#C9A96A] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C9A96A] animate-pulse"></span>
                <span>المملكة العربية السعودية — الرياض</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-white">
                حلول متكاملة <br />
                <span className="text-[#C9A96A]">للمعدات والمشاريع</span> والواجهات
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                شركة ديارنا الحديثة للاستثمار توفر أسطولاً شاملاً من المعدات الثقيلة الجاهزة للتأجير الفوري، وأرقى خدمات توريد وتركيب الحجر الطبيعي والرخام الفاخر، وتنفيذ مشاريع المقاولات المعتمدة.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={buildWhatsAppLink('مرحباً ديارنا الحديثة، أرغب بطلب تسعير لمشروعي')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-sm font-bold py-3.5 px-6 shadow-lg shadow-[#C9A96A]/20 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>اطلب عرض سعر فوري</span>
                </a>

                <Link
                  to="/equipment"
                  className="btn btn-outline text-sm font-bold py-3.5 px-6 border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
                >
                  <span>تصفح أسطول المعدات</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="pt-8 border-t border-gray-800 grid grid-cols-3 gap-6">
                {company.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#C9A96A] block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 block font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Quick Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                  <div>
                    <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                      خدمة سريعة للمقاولين
                    </span>
                    <h3 className="text-xl font-bold font-display text-gray-900 mt-0.5">
                      طلب تسعير وحجز معدة
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>

                <ContactForm defaultSector="equipment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sectors (4 Major Sectors) */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page">
          <SectionHeader
            eyebrow="منظومة متكاملة"
            title="القطاعات والخدمات الرئيسية"
            subtitle="نقدم حلولاً مترابطة تخدم المطورين العقاريين، شركات المقاولات، وملاك الفلل والمشاريع من التأسيس حتى التشطيب الفاخر."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sector 1 */}
            <div className="card bg-white p-6 flex flex-col justify-between border-t-4 border-t-[#0F1115] hover:border-t-[#C9A96A] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] text-[#C9A96A] flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  تأجير المعدات الثقيلة
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  أسطول من 17 فئة معدات تشمل رافعات السيزر لفت، مان لفت، أوناش، بوكلينات، وشياول جاهزة للعمل فوراً.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="badge badge-muted text-[11px] block text-center">عقود يومية وأسبوعية وشهرية</span>
                  <span className="badge badge-muted text-[11px] block text-center">مشغلين وصيانة بالموقع</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/equipment"
                  className="btn btn-outline w-full text-xs font-bold flex items-center justify-between"
                >
                  <span>استكشف المعدات</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="card bg-white p-6 flex flex-col justify-between border-t-4 border-t-[#0F1115] hover:border-t-[#C9A96A] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] text-[#C9A96A] flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  الحجر والواجهات
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  توريد وتركيب حجر طبيعي وحجر الرياض بأحدث أنظمة التثبيت الميكانيكي المعزول لواجهات الفلل والمباني.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="badge badge-muted text-[11px] block text-center">توريد مباشر للمشاريع</span>
                  <span className="badge badge-muted text-[11px] block text-center">تركيب ميكانيكي معتمد</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/stone"
                  className="btn btn-outline w-full text-xs font-bold flex items-center justify-between"
                >
                  <span>استكشف قطاع الحجر</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="card bg-white p-6 flex flex-col justify-between border-t-4 border-t-[#0F1115] hover:border-t-[#C9A96A] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] text-[#C9A96A] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  الرخام وتفصيله
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  قص وتفصيل رخام طبيعي ومستورد بأجهزة Waterjet للأرضيات، الدرج الفاخر، الكاونترات، وتكسيات الجدران.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="badge badge-muted text-[11px] block text-center">قص ليزري بالمليمتر</span>
                  <span className="badge badge-muted text-[11px] block text-center">أرضيات ومطابخ ودرج</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/marble"
                  className="btn btn-outline w-full text-xs font-bold flex items-center justify-between"
                >
                  <span>استكشف أعمال الرخام</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sector 4 */}
            <div className="card bg-white p-6 flex flex-col justify-between border-t-4 border-t-[#0F1115] hover:border-t-[#C9A96A] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] text-[#C9A96A] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  المقاولات العامة
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  تنفيذ متكامل للمشاريع السكنية والتجارية مع إدارة هندسية دقيقة، ومطابقة صارمة لكود البناء السعودي.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="badge badge-muted text-[11px] block text-center">إشراف هندسي مستمر</span>
                  <span className="badge badge-muted text-[11px] block text-center">تسليم في الموعد المحدد</span>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/contracting"
                  className="btn btn-outline w-full text-xs font-bold flex items-center justify-between"
                >
                  <span>استكشف خدمات المقاولات</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment Showcase */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                جاهزة للتوصيل الفوري
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#0F1115] mt-1">
                المعدات الأكثر طلباً في الرياض
              </h2>
            </div>
            <Link
              to="/equipment"
              className="btn btn-outline text-xs font-bold flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>مشاهدة جميع المعدات (17 معدة)</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEquipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F0] border border-[#C9A96A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-right">
              <h4 className="font-bold text-gray-900 font-display">
                هل تحتاج إلى معدة خاصة أو أسطول متكامل لمشروعك؟
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                فريقنا اللوجستي جاهز لتوفير المعدات الثقيلة المطلوبة مع المشغلين والوقود خلال ساعات.
              </p>
            </div>
            <a
              href={buildWhatsAppLink('السلام عليكم، أحتاج استفسار عن توفير أسطول معدات لمشروع')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-xs font-bold py-3 px-6 whitespace-nowrap"
            >
              تواصل مع المنسق اللوجستي
            </a>
          </div>
        </div>
      </section>

      {/* Stone & Facade Focus Banner */}
      <section className="section bg-[#0F1115] text-white relative overflow-hidden">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#C9A96A] tracking-wider uppercase">
                قطاع الحجر الطبيعي والواجهات
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-tight">
                واجهات حجر الرياض الفاخر بتثبيت ميكانيكي هندسي
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                نعتمد أعلى معايير استخراج وفرز حجر الرياض الطبيعي بمقاساته وألوانه الأصيلة، مع تطبيق نظام التثبيت الميكانيكي بالمسامير الستانلس ستيل (Grade 304/316) مع العزل الحراري التام الذي يضمن أمان وجمال الواجهة لعقود من الزمن.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-[#C9A96A] block text-sm mb-1">توريد مباشر</span>
                  <span className="text-gray-400">كميات ومقاسات مخصصة لكبرى المشاريع والفلل</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-[#C9A96A] block text-sm mb-1">تركيب ميكانيكي</span>
                  <span className="text-gray-400">عزل هوائي مقاوم للحرارة والعوامل الجوية</span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link to="/stone" className="btn btn-accent text-xs font-bold py-3 px-5">
                  تفاصيل خدمات الحجر والواجهات
                </Link>
                <Link to="/contact" className="btn btn-outline text-xs font-bold py-3 px-5 border-white/20 text-white hover:bg-white/10">
                  طلب تسعير توريد وتركيب
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="واجهات حجر الرياض"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#C9A96A] text-[#0F1115] p-4 rounded-xl shadow-xl hidden sm:block">
                <span className="text-xs font-bold block">ضمان جودة المواد والتركيب</span>
                <span className="text-[11px] text-gray-900">بموجب كود البناء السعودي</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                سجل الإنجاز
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#0F1115] mt-1">
                مشاريع نعتز بتنفيذها
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn btn-outline text-xs font-bold flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>مشاهدة جميع المشاريع</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values & Why Deyarna */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="لماذا ديارنا الحديثة؟"
            title="معاييرنا التي تصنع الفرق في مشاريعك"
            subtitle="نلتزم بتقديم القيمة الحقيقية لشركائنا من خلال الجودة، الشفافية، وسرعة الاستجابة."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-gray-900">الالتزام الصارم</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                مواعيد تسليم دقيقة، ومعدات مفحوصة جاهزة للانطلاق فور توقيع العقد دون تأخير.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-gray-900">جودة الخامات</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                أجود أنواع حجر الرياض والرخام الطبيعي المفرز بدقة خالية من الشوائب والكسور.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-gray-900">دعم ميداني متواصل</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                فريق صيانة متنقل للتعامل مع أي عطل طارئ للمعدات بالموقع خلال ساعات قياسية.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F7F5] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-gray-900">تسعير تنافسي ومرن</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                عروض أسعار شفافة مفصلة تضمن أعلى عائد جودة لاستثمارك دون تكاليف خفية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles / Knowledge Hub */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                المعرفة الهندسية
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-[#0F1115] mt-1">
                أحدث المقالات والإرشادات الفنية
              </h2>
            </div>
            <Link
              to="/articles"
              className="btn btn-outline text-xs font-bold flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>جميع المقالات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((art) => (
              <div key={art.id} className="card bg-white overflow-hidden flex flex-col group">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-accent font-bold text-xs">{art.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[11px] text-gray-400 mb-2 font-mono">{art.date}</span>
                  <Link to={`/articles/${art.slug}`}>
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-[#A9884A] transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed flex-grow">
                    {art.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{art.author}</span>
                    <Link
                      to={`/articles/${art.slug}`}
                      className="text-xs font-bold text-[#A9884A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>قراءة المزيد</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast CTA Band */}
      <section className="py-14 bg-[#0F1115] text-white border-t border-gray-800">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              جاهز لبدء مشروعك أو استئجار معدة؟
            </h3>
            <p className="text-sm text-gray-300">
              تواصل مع مهندسينا وممثلي خدمة العملاء للحصول على تسعير فوري ومخصص لاحتياجك.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-sm font-bold py-3 px-6 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>محادثة واتساب الآن</span>
            </a>
            <Link to="/contact" className="btn btn-outline text-sm font-bold py-3 px-6 border-white/30 text-white hover:bg-white/10">
              نموذج الطلب الرسمي
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
