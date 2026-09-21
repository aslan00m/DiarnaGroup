import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ui/ContactForm'
import { contact } from '@/data/contact'
import { company } from '@/data/company'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Contact() {
  return (
    <>
      <SEO
        title="اتصل بنا | ديارنا الحديثة للاستثمار"
        description="تواصل مع شركة ديارنا الحديثة للاستثمار في الرياض. هاتف: 0536089153، واتساب، أو زيارة مقرنا في حي الفيصلية، الرياض."
        canonical="/contact"
      />

      {/* Hero Header */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Phone className="w-3.5 h-3.5" />
            <span>خدمة العملاء والتسعير المباشر</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            تواصل معنا اليوم
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            فريق ديارنا الحديثة جاهز للرد على استفساراتكم وتقديم عروض الأسعار والدراسات الفنية لمشاريعكم في أسرع وقت.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info + Form */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold font-display text-gray-900 pb-3 border-b border-gray-100">
                  قنوات التواصل المباشرة
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block">الاتصال الهاتفي</span>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-base font-bold text-gray-900 hover:text-[#A9884A] transition-colors"
                        dir="ltr"
                      >
                        {contact.phoneDisplay}
                      </a>
                      <span className="text-[11px] text-gray-400 block">خط خدمة العملاء المباشر</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mt-1">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block">محادثة واتساب سريعة</span>
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-700 hover:underline"
                        dir="ltr"
                      >
                        {contact.whatsappDisplay}
                      </a>
                      <span className="text-[11px] text-gray-400 block">إرسال صور ومخططات واستفسارات</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block">البريد الإلكتروني</span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-base font-bold text-gray-900 hover:text-[#A9884A] transition-colors"
                      >
                        {contact.email}
                      </a>
                      <span className="text-[11px] text-gray-400 block">المراسلات الرسمية والمناقصات</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block">العنوان والمقر</span>
                      <p className="text-sm font-bold text-gray-900 leading-snug">
                        {contact.address}
                      </p>
                      <span className="text-[11px] text-gray-400 block">المملكة العربية السعودية</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-bold block">أوقات العمل الرسمية</span>
                      <p className="text-sm font-bold text-gray-900 leading-snug">
                        {contact.hours}
                      </p>
                      <span className="text-[11px] text-gray-400 block">خدمة طوارئ المعدات 24/7 للمواقع المتعاقدة</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={buildWhatsAppLink('مرحباً ديارنا الحديثة، أرغب بالتواصل الفوري مع المبيعات')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent w-full text-xs font-bold py-3 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>فتح محادثة واتساب الآن</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#C9A96A]/30 flex items-center gap-3 text-xs text-gray-700">
                <ShieldCheck className="w-6 h-6 text-[#A9884A] shrink-0" />
                <span>
                  جميع العقود والاتفاقيات معتمدة ومطابقة للاشتراطات الفنية والقانونية في المملكة.
                </span>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-md space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#A9884A] uppercase tracking-wider">
                    نموذج طلب عرض السعر
                  </span>
                  <h3 className="text-2xl font-bold font-display text-gray-900 mt-1">
                    أرسل لنا تفاصيل طلبك
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    حدد القطاع المطلوب وسيقوم مسؤول المبيعات بتجهيز عرض سعر مفصل والتواصل معك هاتفياً أو عبر واتساب.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container-page space-y-6">
          <SectionHeader
            eyebrow="موقعنا على الخريطة"
            title="زورونا في مقرنا بالرياض"
            subtitle={contact.address}
            centered
          />
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100 relative">
            <iframe
              title="موقع شركة ديارنا الحديثة للاستثمار"
              src="https://maps.google.com/maps?q=Al+Faisaliyah+Riyadh+Saudi+Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
