import { useState, useEffect } from 'react'
import { MessageSquare, Phone, ArrowUp } from 'lucide-react'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-3">
      {/* Scroll To Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0F1115] text-white shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 border border-gray-700"
          aria-label="الرجوع للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Phone Call Button */}
      <a
        href={`tel:${contact.phone}`}
        className="w-11 h-11 rounded-full bg-[#1F2937] text-white shadow-lg flex items-center justify-center hover:bg-[#0F1115] transition-all transform hover:scale-105 border border-gray-600"
        aria-label="اتصال هاتفي مباشر"
        title="اتصل بنا"
      >
        <Phone className="w-5 h-5 text-[#C9A96A]" />
      </a>

      {/* Pulsing WhatsApp CTA */}
      <a
        href={buildWhatsAppLink('مرحباً ديارنا الحديثة، أرغب بالتواصل والاستفسار')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all transform hover:scale-110"
        aria-label="تواصل واتساب"
        title="تواصل معنا عبر واتساب"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <MessageSquare className="w-7 h-7 relative z-10 fill-current" />
        
        {/* Tooltip on hover for desktop */}
        <span className="hidden md:group-hover:inline-block absolute right-full ml-0 mr-3 px-3 py-1.5 rounded-lg bg-[#0F1115] text-white text-xs font-semibold whitespace-nowrap shadow-md pointer-events-none">
          تواصل مباشر واتساب
        </span>
      </a>
    </div>
  )
}
