import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Calendar, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/common/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ProjectsList() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filterOptions = [
    { id: 'all', label: 'جميع المشاريع' },
    { id: 'stone', label: 'الحجر والواجهات' },
    { id: 'equipment', label: 'المعدات الثقيلة' },
    { id: 'marble', label: 'الرخام' },
    { id: 'contracting', label: 'المقاولات' },
  ]

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects
    return projects.filter((p) => p.category === selectedFilter)
  }, [selectedFilter])

  return (
    <>
      <SEO
        title="معرض المشاريع المنفذة | ديارنا الحديثة للاستثمار"
        description="استعرض نماذج من مشاريع شركة ديارنا الحديثة في توريد معدات المشاريع، تنفيذ واجهات حجر الرياض، وأعمال الرخام الفاخر في المملكة."
        canonical="/projects"
      />

      {/* Hero */}
      <section className="bg-[#0F1115] text-white py-16 relative overflow-hidden">
        <div className="container-page text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#C9A96A]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>سجل حافل بالإنجازات والنجاحات</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-tight text-white">
            معرض المشاريع المنفذة
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            نفخر بمشاركتنا في تنفيذ كبرى المشاريع السكنية، التجارية، والمقرات الحيوية في الرياض ومختلف مناطق المملكة.
          </p>
        </div>
      </section>

      {/* Filters and List */}
      <section className="section bg-[#F7F7F5]">
        <div className="container-page space-y-8">
          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedFilter === opt.id
                    ? 'bg-[#0F1115] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-display text-gray-900">
                هل ترغب بإضافة مشروعك القادم إلى قائمة نجاحاتنا؟
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                فريقنا الهندسي جاهز لتقديم الاستشارات المعمارية والتشغيلية فوراً.
              </p>
            </div>
            <a
              href={buildWhatsAppLink('السلام عليكم، أرغب بمناقشة مشروع جديد مع ديارنا')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-xs font-bold py-3 px-6 whitespace-nowrap"
            >
              ناقش مشروعك معنا
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
