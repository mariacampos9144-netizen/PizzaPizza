import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Pizza, MapPin, Phone, Info, Image as ImageIcon } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: <Pizza className="w-4 h-4" /> },
    { name: "Nosotros", href: "#nosotros", icon: <Info className="w-4 h-4" /> },
    { name: "Menú", href: "#menu", icon: <Menu className="w-4 h-4" /> },
    { name: "Galería", href: "#galeria", icon: <ImageIcon className="w-4 h-4" /> },
    { name: "Contacto", href: "#contacto", icon: <Phone className="w-4 h-4" /> },
    { name: "Ubicación", href: "#ubicacion", icon: <MapPin className="w-4 h-4" /> },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#inicio" 
          onClick={(e) => scrollTo(e, "#inicio")}
          className="flex items-center gap-2 group"
        >
          <div className="bg-primary text-white p-2 rounded-full group-hover:scale-110 transition-transform">
            <Pizza className="w-6 h-6" />
          </div>
          <span className="font-black text-xl tracking-tight text-foreground">
            Little Caesars <span className="text-primary">Parián</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-1">
            {navLinks.slice(1, -1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-semibold text-foreground/80 hover:text-primary px-3 py-2 rounded-md hover:bg-primary/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button 
            className="rounded-full px-6 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ordena ahora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border p-4 shadow-lg flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="flex items-center gap-3 text-base font-semibold text-foreground/80 hover:text-primary p-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <Button 
            className="w-full mt-2 font-bold"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ordena ahora
          </Button>
        </div>
      )}
    </nav>
  );
}
