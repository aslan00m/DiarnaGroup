import { Link } from 'react-router-dom'
import { BookOpen, Calendar, ArrowLeft, User } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { articles } from '@/data/articles'

export function ArticlesList() {
  return (
    <>
      <SEO
        title="المقالات والأدلة الفنية | ديارنا الحديثة للاستثمار"
        description="مقالات متخصصة في تأجير المعدات الثقيلة، تركيب واجهات الحجر الطبيعي وحجر الرياض، واختيار الرخام في المملكة العربية السعودية."
        canonical="/articles"
      />

      {/* Hero */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>المعرفة المعمارية واللوجستية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            المقالات والأدلة الهندسية
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            إرشادات فنية ودراسات عملية موجهة للمقاولين والمهندسين وأصحاب الفلل لتسهيل اتخاذ القرارات الإنشائية الأنسب.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art) => (
              <div
                key={art.id}
                className="card bg-white overflow-hidden flex flex-col group hover:border-[#C9A96A] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge badge-accent font-bold text-xs">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{art.author}</span>
                    </span>
                  </div>

                  <Link to={`/articles/${art.slug}`}>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#A9884A] transition-colors leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                    {art.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {art.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="badge badge-muted text-[10px]">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/articles/${art.slug}`}
                      className="text-xs font-bold text-[#A9884A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>اقرأ المقال</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
