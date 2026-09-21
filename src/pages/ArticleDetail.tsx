import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ChevronRight, Tag, ArrowRight, MessageSquare, Truck } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { articles } from '@/data/articles'
import { equipment } from '@/data/equipment'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { getArticleSchema } from '@/lib/seo'
import { SITE_URL } from '@/config/site'

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="section text-center">
        <div className="container-page max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-display text-gray-900">المقال غير موجود</h2>
          <p className="text-sm text-gray-600">عذراً، لم يتم العثور على هذا المقال.</p>
          <Link to="/articles" className="btn btn-primary text-xs font-bold">
            العودة لمركز المقالات
          </Link>
        </div>
      </div>
    )
  }

  const relatedEq = equipment.filter((eq) =>
    article.relatedEquipment?.includes(eq.slug)
  )

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  const schema = getArticleSchema({
    title: article.title,
    description: article.seoDescription,
    url: `${SITE_URL}/articles/${article.slug}`,
    image: article.featuredImage,
    datePublished: article.date,
    dateModified: article.updatedAt,
    author: article.author,
  })

  return (
    <>
      <SEO
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        canonical={`/articles/${article.slug}`}
        ogImage={article.featuredImage}
        ogType="article"
        schema={schema}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container-page flex items-center gap-2">
          <Link to="/" className="hover:text-gray-900">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/articles" className="hover:text-gray-900">المقالات</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold line-clamp-1">{article.title}</span>
        </div>
      </div>

      <article className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <span className="badge badge-accent font-bold text-xs">
                  {article.category}
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#A9884A]" />
                    <span>تاريخ النشر: {article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#A9884A]" />
                    <span>الكاتب: {article.author}</span>
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-100">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Excerpt Lead */}
              <p className="text-base sm:text-lg font-medium text-gray-700 leading-relaxed bg-[#FAF7F0] p-5 rounded-xl border-r-4 border-r-[#C9A96A]">
                {article.excerpt}
              </p>

              {/* Formatted Article Body */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 font-sans">
                {article.content
                  .split('\n\n')
                  .filter((p) => p.trim().length > 0)
                  .map((block, idx) => {
                    if (block.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-xl sm:text-2xl font-bold font-display text-gray-900 mt-8 mb-4">
                          {block.replace('### ', '')}
                        </h3>
                      )
                    }
                    if (block.startsWith('- ')) {
                      const items = block.split('\n- ').map((s) => s.replace(/^- /, ''))
                      return (
                        <ul key={idx} className="list-disc pr-6 space-y-2 text-sm sm:text-base text-gray-700 my-4">
                          {items.map((it, i) => (
                            <li key={i}>{it}</li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {block}
                      </p>
                    )
                  })}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-gray-100 flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400 font-bold">الكلمات الدلالية:</span>
                {article.tags.map((t, idx) => (
                  <span key={idx} className="badge badge-muted text-xs">
                    #{t}
                  </span>
                ))}
              </div>

              {/* WhatsApp Share / Consult */}
              <div className="p-6 rounded-2xl bg-[#0F1115] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-right">
                  <h4 className="font-bold text-base font-display text-white">
                    هل لديك استفسار حول موضوع هذا المقال؟
                  </h4>
                  <p className="text-xs text-gray-300">
                    تواصل مباشرة مع فريقنا الهندسي لمناقشة التفاصيل لمشروعك.
                  </p>
                </div>
                <a
                  href={buildWhatsAppLink(`السلام عليكم، قرأت مقال "${article.title}" وأود الاستفسار`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-xs font-bold py-2.5 px-5 whitespace-nowrap flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>تواصل مع المهندس</span>
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Related Equipment */}
              {relatedEq.length > 0 && (
                <div className="bg-[#F7F7F5] p-6 rounded-2xl border border-gray-200 space-y-4">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                    <Truck className="w-4 h-4 text-[#A9884A]" />
                    <span>معدات مرتبطة بالمقال</span>
                  </div>
                  <div className="space-y-3">
                    {relatedEq.map((eq) => (
                      <Link
                        key={eq.id}
                        to={`/equipment/${eq.slug}`}
                        className="p-3 rounded-xl bg-white border border-gray-200 hover:border-[#C9A96A] transition-colors flex items-center gap-3 group block"
                      >
                        <img
                          src={eq.image}
                          alt={eq.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h5 className="font-bold text-xs text-gray-900 group-hover:text-[#A9884A] transition-colors line-clamp-1">
                            {eq.name}
                          </h5>
                          <span className="text-[11px] text-[#A9884A] font-semibold">
                            طلب استئجار &larr;
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Articles */}
              {otherArticles.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                  <h4 className="font-bold text-base font-display text-gray-900">
                    مقالات أخرى قد تهمك
                  </h4>
                  <div className="space-y-4">
                    {otherArticles.map((oa) => (
                      <Link
                        key={oa.id}
                        to={`/articles/${oa.slug}`}
                        className="block group space-y-1 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <span className="text-[11px] text-gray-400 font-mono block">{oa.date}</span>
                        <h5 className="font-bold text-sm text-gray-800 group-hover:text-[#A9884A] transition-colors leading-snug line-clamp-2">
                          {oa.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
