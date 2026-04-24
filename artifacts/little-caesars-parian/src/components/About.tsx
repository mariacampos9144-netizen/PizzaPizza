import { motion } from "framer-motion";
import { Clock, DollarSign, Star } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Rapidez",
      description: "Tus pizzas favoritas listas para llevar, sin tiempos de espera aburridos."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Precio Accesible",
      description: "El mejor sabor al mejor precio para disfrutar todos los días."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Calidad",
      description: "Ingredientes frescos, masa preparada diariamente y mucho queso."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              El orgullo de <span className="text-primary">Tlaquepaque</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ubicados a solo unos pasos del histórico Parián, somos tu pizzería de barrio. 
              Nos enorgullece servir a la comunidad de San Pedro Tlaquepaque con la inconfundible 
              calidad de Little Caesars, combinada con la calidez y el ambiente festivo de nuestra tierra.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ya sea que vengas de pasear por el centro, de salir de trabajar, o busques algo 
              rápido y delicioso para la familia, aquí siempre encontrarás una pizza recién salida del horno.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {features.map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="/images/about.png" 
                alt="Local Little Caesars Parián" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-primary/20 rounded-3xl pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-primary">100%</div>
                <div className="text-sm font-bold text-muted-foreground leading-tight">
                  SABOR<br/>GARANTIZADO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
