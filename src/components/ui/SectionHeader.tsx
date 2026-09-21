interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs md:text-sm font-bold tracking-wider uppercase mb-2 ${
            light ? 'text-[#C9A96A]' : 'text-[#A9884A]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-display leading-tight ${
          light ? 'text-white' : 'text-[#0F1115]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
