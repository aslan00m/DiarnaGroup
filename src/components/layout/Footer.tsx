import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react'
import { company } from '@/data/company'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="bg-[#0F1115] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Company Brief */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9A96A] text-[#0F1115] flex items-center justify-center font-bold text-xl">
                <span className="font-serif">د</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {company.name}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              {company.description}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
                ترخيص مقاولات معتمد
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
                كود البناء السعودي
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
                توريد لكافة مناطق المملكة
              </span>
            </div>
          </div>

          {/* Main Sectors */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#C9A96A] uppercase font-display">
              القطاعات الرئيسية
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/equipment" className="hover:text-[#C9A96A] transition-colors flex items-center gap-1 group">
                  <span>تأجير المعدات الثقيلة</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/stone" className="hover:text-[#C9A96A] transition-colors flex items-center gap-1 group">
                  <span>الحجر والواجهات</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/marble" className="hover:text-[#C9A96A] transition-colors flex items-center gap-1 group">
                  <span>أعمال الرخام الفاخر</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contracting" className="hover:text-[#C9A96A] transition-colors flex items-center gap-1 group">
                  <span>المقاولات والتشطيبات</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#C9A96A] transition-colors flex items-center gap-1 group">
                  <span>معرض المشاريع المنفذة</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Equipment Shortcuts */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#C9A96A] uppercase font-display">
              معدات مطلوبة فوراً
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/equipment/scissor-lift" className="hover:text-[#C9A96A] transition-colors">
                  سيزر لفت مقصي
                </Link>
              </li>
              <li>
                <Link to="/equipment/man-lift" className="hover:text-[#C9A96A] transition-colors">
                  مان لفت ذراعي
                </Link>
              </li>
              <li>
                <Link to="/equipment/crane" className="hover:text-[#C9A96A] transition-colors">
                  كرين أوناش متحركة
                </Link>
              </li>
              <li>
                <Link to="/equipment/excavator" className="hover:text-[#C9A96A] transition-colors">
                  بوكلين وحفارات
                </Link>
              </li>
              <li>
                <Link to="/equipment/forklift" className="hover:text-[#C9A96A] transition-colors">
                  رافعات شوكية
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-[#C9A96A] text-xs font-semibold hover:underline">
                  عرض كل الـ 17 معدة &larr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#C9A96A] uppercase font-display">
              معلومات الاتصال
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A96A] shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A96A] shrink-0" />
                <a href={`tel:${contact.phone}`} dir="ltr" className="hover:text-[#C9A96A] transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C9A96A] shrink-0" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A96A] transition-colors"
                >
                  واتساب: {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A96A] shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-[#C9A96A] transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#C9A96A] shrink-0" />
                <span>{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {company.name}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#C9A96A] transition-colors">
              عن الشركة
            </Link>
            <Link to="/articles" className="hover:text-[#C9A96A] transition-colors">
              المقالات الهندسية
            </Link>
            <Link to="/contact" className="hover:text-[#C9A96A] transition-colors">
              طلب تسعير
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
