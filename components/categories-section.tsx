import { Wrench, Laptop, Dumbbell, PartyPopper, Camera, Car, Tent, Music } from "lucide-react"

const categories = [
  {
    id: "herramientas",
    name: "Herramientas",
    description: "Taladros, sierras, equipos de jardín",
    icon: Wrench,
    count: 458,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "electronica",
    name: "Electrónica",
    description: "Cámaras, drones, proyectores",
    icon: Laptop,
    count: 324,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "deporte",
    name: "Deporte",
    description: "Bicicletas, esquís, kayaks",
    icon: Dumbbell,
    count: 567,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "fiestas",
    name: "Fiestas",
    description: "Mesas, sillas, decoración",
    icon: PartyPopper,
    count: 289,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "fotografia",
    name: "Fotografía",
    description: "Objetivos, iluminación, trípodes",
    icon: Camera,
    count: 198,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "vehiculos",
    name: "Vehículos",
    description: "Coches, motos, furgonetas",
    icon: Car,
    count: 156,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "camping",
    name: "Camping",
    description: "Tiendas, sacos, neveras",
    icon: Tent,
    count: 234,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "musica",
    name: "Música",
    description: "Instrumentos, amplificadores",
    icon: Music,
    count: 145,
    color: "bg-amber-100 text-amber-600",
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Categorías populares
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra lo que buscas entre miles de artículos disponibles cerca de ti
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="group bg-card rounded-2xl border border-border p-6 text-left hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{category.description}</p>
              <span className="text-xs text-primary font-medium">{category.count} artículos</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
