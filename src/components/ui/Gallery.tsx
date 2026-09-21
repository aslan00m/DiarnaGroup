import { useState } from 'react'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'

interface GalleryProps {
  images: string[]
  title?: string
}

export function Gallery({ images, title = 'معرض الصور' }: GalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const openModal = (idx: number) => setActiveIdx(idx)
  const closeModal = () => setActiveIdx(null)

  const nextImage = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + images.length) % images.length)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openModal(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={img}
              alt={`${title} ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
              عرض الصورة المكبرة
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl">
            <img
              src={images[activeIdx]}
              alt={`${title} ${activeIdx + 1}`}
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-lg"
            />
            <p className="text-center text-xs text-gray-300 mt-2 font-sans">
              صورة {activeIdx + 1} من {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
