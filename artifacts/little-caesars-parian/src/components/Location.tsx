import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Store } from "lucide-react";

export function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Nuestra <span className="text-primary">Ubicación</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Visítanos en el corazón del Centro Histórico de Tlaquepaque, a unos pasos del Parián.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-secondary p-8 rounded-3xl h-full flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dirección</h3>
                  <p className="text-muted-foreground">C. Herrera y Cairo 17, Centro, San Pedro Tlaquepaque, Jalisco</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horario</h3>
                  <p className="text-muted-foreground">Lun - Dom: 11:00 - 23:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+52 33 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Servicio</h3>
                  <p className="text-muted-foreground">Para llevar y servicio a domicilio en zona centro.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto border border-border"
          >
            <iframe 
              src="https://www.google.com/maps?q=C.+Herrera+y+Cairo+17,+Centro,+San+Pedro+Tlaquepaque,+Jalisco&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Little Caesars Parián"
              className="grayscale-[20%] contrast-[110%] hue-rotate-90 filter" // Light styling to make it fit slightly better
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
