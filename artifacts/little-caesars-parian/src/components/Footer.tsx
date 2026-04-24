import { Pizza } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Pizza className="w-6 h-6 text-primary" />
              <span className="font-black text-xl tracking-tight">
                Little Caesars <span className="text-primary">Parián</span>
              </span>
            </div>
            <p className="text-sm max-w-xs text-white/60">
              La pizzería favorita del corazón de Tlaquepaque. Pizza rápida, deliciosa y lista para llevar.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Navegación</h4>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" onClick={(e) => scrollTo(e, "#inicio")} className="hover:text-primary transition-colors text-sm w-fit">Inicio</a>
              <a href="#nosotros" onClick={(e) => scrollTo(e, "#nosotros")} className="hover:text-primary transition-colors text-sm w-fit">Nosotros</a>
              <a href="#menu" onClick={(e) => scrollTo(e, "#menu")} className="hover:text-primary transition-colors text-sm w-fit">Menú</a>
              <a href="#galeria" onClick={(e) => scrollTo(e, "#galeria")} className="hover:text-primary transition-colors text-sm w-fit">Galería</a>
              <a href="#ubicacion" onClick={(e) => scrollTo(e, "#ubicacion")} className="hover:text-primary transition-colors text-sm w-fit">Ubicación</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Créditos</h4>
            <div className="space-y-2 text-sm bg-white/5 p-4 rounded-xl border border-white/10">
              <p><span className="text-white/50">Tipo:</span> Proyecto académico</p>
              <p><span className="text-white/50">Estudiante:</span> [TU NOMBRE]</p>
              <p><span className="text-white/50">Universidad:</span> CUCEI</p>
              
              <div className="mt-4 border border-dashed border-white/30 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white/5">
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Logo CUCEI</p>
                {/* 
                  <img src="/ruta-a-tu-logo.png" alt="Logo CUCEI" className="h-12 object-contain" /> 
                */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Little Caesars Pizza Parián. Todos los derechos reservados.</p>
          <p>Hecho con propósito académico.</p>
        </div>
      </div>
    </footer>
  );
}
