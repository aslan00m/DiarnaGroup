import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'

export function NotFound() {
  return (
    <>
      <SEO title="الصفحة غير موجودة | ديارنا الحديثة" noindex />
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F7F5] py-16 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F0] text-[#A9884A] flex items-center justify-center mx-auto text-2xl font-bold font-display">
            404
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-display text-gray-900">
              الصفحة غير موجودة
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو قد تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو استكشاف قطاعاتنا.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="btn btn-primary flex-1 text-xs font-bold py-2.5 flex items-center justify-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>الصفحة الرئيسية</span>
            </Link>
            <Link
              to="/equipment"
              className="btn btn-outline flex-1 text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5"
            >
              <span>تصفح المعدات</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
