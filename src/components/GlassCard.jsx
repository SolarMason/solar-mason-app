export default function GlassCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <div
      className="glass-card p-6 rounded-2xl reveal-on-scroll"
      style={{ animationDelay: delay + 'ms' }}
    >
      {Icon && (
        <div className="w-12 h-12 mb-4 text-[#4ecdc4]">
          <Icon size={48} />
        </div>
      )}
      {title && <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>}
      {description && <p className="text-gray-400 leading-relaxed">{description}</p>}
    </div>
  )
}
