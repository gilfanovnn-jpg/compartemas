"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-serif text-xl font-medium text-foreground">ComparteMas</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#categorias" className="text-muted-foreground hover:text-foreground transition-colors">
              Categorías
            </Link>
            <Link href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Cómo funciona
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Ayuda
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Iniciar sesión
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Publicar anuncio
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="#categorias" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Categorías
            </Link>
            <Link href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Cómo funciona
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Ayuda
            </Link>
            <hr className="border-border" />
            <Button variant="ghost" className="justify-start text-foreground">
              Iniciar sesión
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Publicar anuncio
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
