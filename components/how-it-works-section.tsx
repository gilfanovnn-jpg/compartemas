import { Search, MessageCircle, Package } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Encuentra",
    description: "Busca entre miles de artículos disponibles en tu ciudad. Filtra por categoría, precio o distancia.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Contacta",
    description: "Escribe al propietario, acuerda los detalles y fecha de recogida. Todo de forma segura.",
  },
  {
    number: "03",
    icon: Package,
    title: "Disfruta",
    description: "Recoge el artículo, úsalo el tiempo acordado y devuélvelo. ¡Así de fácil!",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Sencillo y seguro
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alquilar o poner en alquiler tus cosas nunca ha sido tan fácil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="font-serif text-5xl text-border font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Empezar a buscar
            </button>
            <button className="px-8 py-4 bg-card text-foreground border border-border rounded-xl font-medium hover:border-primary transition-colors">
              Publicar mi primer anuncio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
