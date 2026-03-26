const stats = [
  { value: "15K+", label: "Usuarios activos" },
  { value: "8K+", label: "Artículos disponibles" },
  { value: "25K+", label: "Alquileres completados" },
  { value: "98%", label: "Satisfacción" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-primary-foreground mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
