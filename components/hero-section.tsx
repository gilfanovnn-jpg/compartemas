"use client"

import { Search, MapPin, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import WaitlistForm from '../WaitlistForm' // путь зависит от расположения файлов
import AuthButton from './AuthButton'

const locations = [
  { id: "madrid", name: "Madrid" },
  { id: "barcelona", name: "Barcelona" },
  { id: "valencia", name: "Valencia" },
]

export function HeroSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">+2,500 artículos disponibles hoy</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 max-w-4xl mx-auto text-balance">
          Alquila lo que necesitas, gana con lo que no usas
        </h1>

        <WaitlistForm />
        <div className="mt-4">
  <AuthButton />
</div>

        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          Conectamos a personas que necesitan cosas con quienes las tienen. Ahorra dinero, genera ingresos y cuida el planeta.
        </p>

        {/* Search box */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-2 flex flex-col sm:flex-row gap-2">
            {/* Search input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-input rounded-xl">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="¿Qué necesitas alquilar?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Location selector */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="w-full sm:w-auto flex items-center gap-2 px-4 py-3 bg-input rounded-xl hover:bg-secondary transition-colors"
              >
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground">{selectedLocation.name}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isLocationOpen ? "rotate-180" : ""}`} />
              </button>

              {isLocationOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl border border-border shadow-lg overflow-hidden z-20">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => {
                        setSelectedLocation(location)
                        setIsLocationOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-secondary transition-colors ${
                        selectedLocation.id === location.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search button */}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-auto rounded-xl text-base font-medium">
              Buscar
            </Button>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Taladro", "Cámara", "Bicicleta", "Proyector"].map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 text-sm bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors text-foreground"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
