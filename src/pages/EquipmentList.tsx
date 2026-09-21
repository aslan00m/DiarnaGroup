import { useState, useMemo } from 'react'
import { Search, Filter, Truck, AlertCircle, PhoneCall, MessageSquare } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EquipmentCard } from '@/components/ui/EquipmentCard'
import { equipment, equipmentCategories } from '@/data/equipment'
import { contact } from '@/data/contact'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function EquipmentList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <>
      <SEO
        title="تأجير المعدات الثقيلة في الرياض | 17 فئة جاهزة للعمل"
        description="تأجير المعدات الثقيلة في الرياض والمملكة: سيزر لفت، بوكلين، كرين، شيول، مان لفت، بوبكات، حاويات، مولدات. خيارات تأجير يومي وشهري."
        canonical="/equipment"
      />

      {/* Hero Header */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Truck className="w-3.5 h-3.5" />
            <span>أسطول متكامل لأعمال الرفع والحفر والإنشاءات</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            تأجير المعدات الثقيلة بالرياض
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            نوفر أسطولاً يضم 17 فئة رئيسية من المعدات الثقيلة بأعلى درجات الصيانة والفحص الدوري، مع خيارات التأجير اليومي والأسبوعي والشهري وتوفير المشغلين المعتمدين.
          </p>
        </div>
      </section>

      {/* Filters and Catalog */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page space-y-8">
          {/* Controls Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن اسم المعدة..."
                className="input pr-10 text-xs sm:text-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {equipmentCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0F1115] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-xs text-gray-500 px-1">
            <span>
              عرض <strong className="text-gray-900 font-bold">{filteredEquipment.length}</strong> معدة
              متوفرة حالياً
            </span>
            <span>توريد مباشر لكافة مناطق المملكة مع مشغلين وصيانة</span>
          </div>

          {/* Equipment Grid */}
          {filteredEquipment.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEquipment.map((item) => (
                <EquipmentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-gray-200 space-y-4">
              <AlertCircle className="w-10 h-10 text-gray-400 mx-auto" />
              <h3 className="font-bold text-gray-900 font-display">لم يتم العثور على معدة مطابقة</h3>
              <p className="text-xs text-gray-500">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="btn btn-outline text-xs"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          )}

          {/* Help / Emergency Support Banner */}
          <div className="p-8 rounded-2xl bg-[#0F1115] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-right">
              <span className="text-xs font-bold text-[#C9A96A] uppercase tracking-wider">
                استجابة فورية للمواقع والمشاريع
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                هل تحتاج إلى معدة غير معروضة أو أسطول مخصص؟
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
                شبكة علاقاتنا وأسطولنا الضخم يمكننا من توفير أي معدة إنشائية نادرة أو متخصصة خلال وقت قياسي.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppLink('مرحباً ديارنا، أرغب بالاستفسار عن تأجير معدة خاصة')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent text-xs font-bold py-3 px-5 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>تواصل واتساب</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="btn btn-outline text-xs font-bold py-3 px-5 border-white/30 text-white hover:bg-white/10 flex items-center gap-1.5"
                dir="ltr"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
