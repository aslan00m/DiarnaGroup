import { Link } from 'react-router-dom'
import { MapPin, Calendar, ArrowLeft } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group overflow-hidden bg-white border border-gray-200 hover:border-[#C9A96A] flex flex-col transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <span className="badge badge-accent font-bold">
            {project.status === 'completed' ? 'تم الإنجاز بنجاح' : 'مشروع قيد التنفيذ'}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
          <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" />
          <span>{project.city}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/projects/${project.slug}`}>
          <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-[#A9884A] transition-colors leading-snug line-clamp-1">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
          {project.services.map((srv, idx) => (
            <span key={idx} className="badge badge-muted text-[11px]">
              {srv}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.date}</span>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#A9884A] hover:underline"
          >
            <span>تفاصيل المشروع</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
