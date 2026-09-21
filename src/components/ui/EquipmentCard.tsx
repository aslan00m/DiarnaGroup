import { Link } from 'react-router-dom'
import { CheckCircle2, Zap, MessageSquare, ArrowLeft } from 'lucide-react'
import type { Equipment } from '@/types'
import { buildWhatsAppLink } from '@/lib/whatsapp'

interface EquipmentCardProps {
  item: Equipment
}

export function EquipmentCard({ item }: EquipmentCardProps) {
  const whatsappMsg = `السلام عليكم، أرغب باستئجار معدة: ${item.name} (${item.slug}) من شركة ديارنا الحديثة.`

  return (
    <div className="card group flex flex-col overflow-hidden bg-white border border-gray-200 hover:border-[#C9A96A]/60 transition-all duration-300">
      {/* Image Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-accent shadow-sm backdrop-blur-md font-bold">
            جاهز للتوريد
          </span>
        </div>
        {item.power && (
          <div className="absolute bottom-3 left-3 bg-[#0F1115]/80 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#C9A96A]" />
            <span>{item.power}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/equipment/${item.slug}`}>
          <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-[#A9884A] transition-colors leading-snug line-clamp-1">
            {item.name}
          </h3>
        </Link>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow">
          {item.description}
        </p>

        {/* Feature bullets */}
        <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
          {item.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96A] shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
          <a
            href={buildWhatsAppLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-xs font-bold py-2 px-3 flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>طلب فوري</span>
          </a>
          <Link
            to={`/equipment/${item.slug}`}
            className="btn btn-outline text-xs font-semibold py-2 px-3 flex items-center justify-center gap-1"
          >
            <span>المواصفات</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
