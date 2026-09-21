import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import type { ServiceSector } from '@/types'

interface SectorCardProps {
  sector: ServiceSector
}

export function SectorCard({ sector }: SectorCardProps) {
  return (
    <div className="card group overflow-hidden bg-white border border-gray-200 hover:border-[#C9A96A] flex flex-col transition-all duration-300">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={sector.image}
          alt={sector.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 right-3 text-white">
          <span className="text-xs uppercase tracking-wider text-[#C9A96A] font-bold">قطاع رئيسي</span>
          <h3 className="text-lg font-bold text-white font-display">{sector.name}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
          {sector.short}
        </p>

        <div className="mt-4 space-y-2 pt-4 border-t border-gray-100">
          {sector.features.slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
              <CheckCircle className="w-3.5 h-3.5 text-[#C9A96A] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            to={
              sector.sector === 'equipment'
                ? '/equipment'
                : sector.sector === 'stone'
                ? '/stone'
                : sector.sector === 'marble'
                ? '/marble'
                : '/contracting'
            }
            className="btn btn-outline w-full flex items-center justify-between group-hover:bg-[#0F1115] group-hover:text-white group-hover:border-[#0F1115] transition-all"
          >
            <span>استكشف حلول {sector.name}</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
