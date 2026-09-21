import { useState } from 'react'
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react'
import { equipment } from '@/data/equipment'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { FORM_ENDPOINT, FORM_PROVIDER } from '@/config/site'

interface ContactFormProps {
  defaultSector?: string
  defaultEquipment?: string
  className?: string
}

export function ContactForm({
  defaultSector = 'equipment',
  defaultEquipment = '',
  className = '',
}: ContactFormProps) {
  const [sector, setSector] = useState(defaultSector)
  const [selectedEquipment, setSelectedEquipment] = useState(defaultEquipment)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('الرياض')
  const [message, setMessage] = useState('')
  const [duration, setDuration] = useState('يومي')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('يرجى إدخال الاسم الكريم.')
      return
    }
    if (!phone.trim() || phone.length < 9) {
      setError('يرجى إدخال رقم هاتف صحيح للتواصل.')
      return
    }

    setLoading(true)

    // Prepare WhatsApp Message text
    const sectorLabels: Record<string, string> = {
      equipment: 'تأجير المعدات الثقيلة',
      stone: 'الحجر والواجهات',
      marble: 'الرخام وتفصيله',
      contracting: 'المقاولات والإنشاءات',
      other: 'استفسار عام',
    }

    let summary = `*طلب تسعير جديد — ديارنا الحديثة*\n\n`
    summary += `👤 *الاسم:* ${name}\n`
    summary += `📱 *الجوال:* ${phone}\n`
    summary += `📍 *المدينة:* ${city}\n`
    summary += `🏗️ *القطاع:* ${sectorLabels[sector] || sector}\n`
    if (sector === 'equipment' && selectedEquipment) {
      const eqItem = equipment.find((e) => e.slug === selectedEquipment)
      summary += `🚜 *المعدة المطلوبة:* ${eqItem ? eqItem.name : selectedEquipment}\n`
      summary += `⏱️ *مدة التأجير:* ${duration}\n`
    }
    if (message.trim()) {
      summary += `📝 *ملاحظات المشروع:* ${message}\n`
    }

    // Try posting to custom endpoint if configured
    if (FORM_PROVIDER !== 'none' && FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            phone,
            city,
            sector,
            selectedEquipment,
            duration,
            message,
          }),
        })
      } catch (err) {
        console.warn('Form endpoint submit failed, falling back to instant WhatsApp confirmation', err)
      }
    }

    setLoading(false)
    setSubmitted(true)

    // Also offer direct WhatsApp redirect
    const waUrl = buildWhatsAppLink(summary)
    window.open(waUrl, '_blank')
  }

  if (submitted) {
    return (
      <div className={`p-8 bg-[#FAF7F0] border border-[#C9A96A]/40 rounded-2xl text-center space-y-4 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#C9A96A] text-white flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-display text-gray-900">
          تم استلام طلبك بنجاح!
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
          شكراً لتواصلك مع شركة ديارنا الحديثة للاستثمار. تم فتح محادثة الواتساب لإرسال تفاصيل طلبك مباشرة لفريق المبيعات، وسنقوم بالرد عليك في أسرع وقت.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false)
              setMessage('')
            }}
            className="btn btn-outline text-xs font-semibold"
          >
            إرسال طلب آخر
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Sector Selection */}
      <div>
        <label className="label">اختر القطاع أو الخدمة المطلوبة</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'equipment', label: 'المعدات الثقيلة' },
            { id: 'stone', label: 'الحجر والواجهات' },
            { id: 'marble', label: 'الرخام' },
            { id: 'contracting', label: 'المقاولات' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSector(item.id)}
              className={`p-2.5 rounded-lg border text-xs font-bold transition-all text-center ${
                sector === item.id
                  ? 'bg-[#0F1115] text-white border-[#0F1115] shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment conditional dropdown */}
      {sector === 'equipment' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
          <div>
            <label className="label text-xs">المعدة المطلوبة (اختياري)</label>
            <select
              value={selectedEquipment}
              onChange={(e) => setSelectedEquipment(e.target.value)}
              className="input text-xs"
            >
              <option value="">-- اختر المعدة من القائمة --</option>
              {equipment.map((eq) => (
                <option key={eq.slug} value={eq.slug}>
                  {eq.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label text-xs">مدة التأجير المتوقعة</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="input text-xs"
            >
              <option value="يومي">تأجير يومي</option>
              <option value="أسبوعي">تأجير أسبوعي</option>
              <option value="شهري">تأجير شهري</option>
              <option value="مشروع كامل">تعاقد مشروع كامل</option>
            </select>
          </div>
        </div>
      )}

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="label">الاسم الكريم *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثال: م. فهد السبيعي"
            className="input"
          />
        </div>
        <div>
          <label className="label">رقم الجوال (واتساب) *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="مثال: 0536089153"
            className="input text-left"
            dir="ltr"
          />
        </div>
      </div>

      {/* City */}
      <div>
        <label className="label">المدينة أو موقع المشروع</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="مثال: الرياض، الخرج، المزاحمية، جدة..."
          className="input"
        />
      </div>

      {/* Notes / Message */}
      <div>
        <label className="label">تفاصيل إضافية عن المشروع أو الاحتياج</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اذكر المواصفات المطلوبة، تاريخ بدء العمل، أو أي تفاصيل هندسية..."
          className="input resize-none"
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-accent flex-1 text-sm font-bold py-3 shadow-md"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? 'جارٍ المعالجة...' : 'إرسال طلب التسعير'}</span>
        </button>

        <a
          href={buildWhatsAppLink('السلام عليكم، أرغب بالتواصل الفوري لطلب تسعير من ديارنا الحديثة')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline py-3 px-4 text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>تواصل واتساب مباشر</span>
        </a>
      </div>

      <p className="text-[11px] text-gray-600 text-center">
        نلتزم بالرد خلال ساعات العمل الرسمية وتزويدك بعرض سعر تفصيلي فوري.
      </p>
    </form>
  )
}
