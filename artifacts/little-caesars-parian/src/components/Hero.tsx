import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-foreground"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent z-10" />
        <img 
          src="/images/hero.png" 
          alt="Pizzas deliciosas" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold text-sm mb-6">
              <Pizza className="w-4 h-4" />
              <span>Calientita y lista</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
              Pizza rápida, <span className="text-primary">deliciosa</span> y lista para llevar
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 max-w-xl">
              Disfruta el sabor de Little Caesars en Tlaquepaque
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full text-lg h-14 px-8 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ordena ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg h-14 px-8 font-bold bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Menú
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
