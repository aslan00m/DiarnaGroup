import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  Truck,
  Layers,
  Sparkles,
  Building2,
  ChevronDown,
} from 'lucide-react'
import { company } from '@/data/company'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const navItems = [
  { name: 'الرئيسية', href: '/' },
  { name: 'من نحن', href: '/about' },
  {
    name: 'الخدمات والقطاعات',
    href: '/services',
    children: [
      { name: 'تأجير المعدات الثقيلة', href: '/equipment', icon: Truck, desc: 'سيزر لفت، بوكلين، كرين، وشيول' },
      { name: 'الحجر والواجهات', href: '/stone', icon: Layers, desc: 'حجر طبيعي، حجر الرياض، والواجهات' },
      { name: 'الرخام', href: '/marble', icon: Sparkles, desc: 'توريد، قص وتفصيل، وأرضيات' },
      { name: 'المقاولات', href: '/contracting', icon: Building2, desc: 'تنفيذ المشاريع السكنية والتجارية' },
    ],
  },
  { name: 'المعدات', href: '/equipment' },
  { name: 'المشاريع', href: '/projects' },
  { name: 'المقالات والأدلة', href: '/articles' },
  { name: 'اتصل بنا', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setServicesDropdown(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-[#0F1115] text-xs text-gray-300 border-b border-gray-800">
        <div className="container-page py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-[#C9A96A]">
              <span className="w-2 h-2 rounded-full bg-[#C9A96A] animate-pulse"></span>
              جاهزية تامة للتوريد والتنفيذ في كافة مناطق المملكة
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hidden md:inline">{contact.hours}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[#C9A96A] transition-colors text-xs"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A96A]" />
              <span>{contact.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppLink('السلام عليكم، أود الاستفسار عن خدمات ديارنا الحديثة')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#C9A96A] hover:underline font-medium text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>تواصل واتساب</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F1115] flex items-center justify-center text-[#C9A96A] font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-serif">د</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#0F1115] leading-none">
                {company.name}
              </span>
              <span className="text-[11px] text-gray-500 font-sans tracking-wide mt-1">
                {company.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        location.pathname.startsWith('/services') ||
                        location.pathname === '/equipment' ||
                        location.pathname === '/stone' ||
                        location.pathname === '/marble' ||
                        location.pathname === '/contracting'
                          ? 'text-[#C9A96A]'
                          : 'text-gray-700 hover:text-[#0F1115] hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Mega Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full right-0 w-80 bg-white border border-gray-200 rounded-xl shadow-xl p-3 grid gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.children.map((sub) => {
                          const Icon = sub.icon
                          return (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group/sub"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center shrink-0 group-hover/sub:bg-[#C9A96A] group-hover/sub:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900 group-hover/sub:text-[#C9A96A] transition-colors">
                                  {sub.name}
                                </span>
                                <span className="text-xs text-gray-500 leading-snug">{sub.desc}</span>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-[#C9A96A]'
                      : 'text-gray-700 hover:text-[#0F1115] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn btn-accent text-xs font-bold py-2.5 px-4 shadow-sm hover:shadow"
            >
              اطلب عرض سعر
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2 max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name} className="py-2 border-b border-gray-100">
                    <span className="block px-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      {item.name}
                    </span>
                    <div className="grid gap-1 pr-2">
                      {item.children.map((sub) => {
                        const Icon = sub.icon
                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
                          >
                            <Icon className="w-4 h-4 text-[#C9A96A]" />
                            <span>{sub.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    isActive ? 'bg-[#FAF7F0] text-[#A9884A]' : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            <div className="pt-3 flex flex-col gap-2">
              <Link to="/contact" className="btn btn-accent w-full text-center py-2.5 text-sm">
                اطلب عرض سعر الآن
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full text-center py-2.5 text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>محادثة واتساب سريعة</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
