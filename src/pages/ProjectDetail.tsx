import { useParams, Link } from 'react-router-dom'
import { MapPin, Calendar, CheckCircle2, ChevronRight, MessageSquare, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { Gallery } from '@/components/ui/Gallery'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="section text-center">
        <div className="container-page max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-display text-gray-900">المشروع غير موجود</h2>
          <p className="text-sm text-gray-600">عذراً، لم نتمكن من العثور على هذا المشروع.</p>
          <Link to="/projects" className="btn btn-primary text-xs font-bold">
            العودة لقائمة المشاريع
          </Link>
        </div>
      </div>
    )
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={project.seo.title || `${project.title} | ديارنا الحديثة`}
        description={project.seo.description || project.description}
        canonical={`/projects/${project.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="container-page flex items-center gap-2">
          <Link to="/" className="hover:text-gray-900">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/projects" className="hover:text-gray-900">المشاريع</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">{project.title}</span>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-page space-y-12">
          {/* Header Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-accent font-bold text-xs">
                  {project.status === 'completed' ? 'تم الإنجاز بنجاح' : 'مشروع قيد التنفيذ'}
                </span>
                <span className="badge badge-muted text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C9A96A]" />
                  <span>{project.city}</span>
                </span>
                <span className="badge badge-muted text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#C9A96A]" />
                  <span>{project.date}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-gray-900 leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                  الخدمات والحلول المقدمة في هذا المشروع:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((srv, idx) => (
                    <span key={idx} className="badge badge-muted text-xs py-1.5 px-3">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side CTA Card */}
            <div className="lg:col-span-4 bg-[#F7F7F5] p-6 rounded-2xl border border-gray-200 space-y-4">
              <h3 className="font-bold text-base font-display text-gray-900">
                هل لديك مشروع مشابه؟
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                يسعدنا مناقشة تفاصيل مشروعك وتقديم دراسة فنية وعرض سعر تفصيلي.
              </p>
              <a
                href={buildWhatsAppLink(`السلام عليكم، اطلعت على مشروع "${project.title}" وأرغب بمناقشة مشروع مشابه`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent w-full text-xs font-bold py-3 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ناقش مشروعك عبر واتساب</span>
              </a>
              <Link to="/contact" className="btn btn-outline w-full text-xs font-semibold py-2.5 text-center">
                إرسال استفسار رسمي
              </Link>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-xl font-bold font-display text-gray-900">
              معرض صور المشروع
            </h3>
            <Gallery images={project.images} title={project.title} />
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="pt-12 border-t border-gray-200 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                  مشاريع أخرى من أعمالنا
                </h3>
                <Link to="/projects" className="text-xs font-bold text-[#A9884A] hover:underline flex items-center gap-1">
                  <span>جميع المشاريع</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
