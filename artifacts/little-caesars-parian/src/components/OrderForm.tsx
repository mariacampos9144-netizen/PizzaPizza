import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Pizza } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "Ingresa un número de teléfono válido"),
  message: z.string().min(5, "Por favor indica qué te gustaría pedir"),
});

type FormValues = z.infer<typeof formSchema>;

export function OrderForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Simulamos el envío
    setTimeout(() => {
      toast.success(`¡Gracias ${values.name}! Tu pedido fue recibido. Te contactaremos pronto al ${values.phone}.`);
      form.reset();
    }, 500);
  }

  return (
    <section id="contacto" className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8">
              <Pizza className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              ¿Hambre? <br/>
              <span className="text-primary">Ordena ahora</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-md">
              Déjanos tus datos y lo que deseas pedir. Prepararemos tu pizza al instante para que pases por ella al Parián.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-foreground p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Detalles de tu pedido</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej. Juan Pérez" className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Ej. 33 1234 5678" className="h-12 bg-secondary/50 border-transparent focus:bg-white transition-colors" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Pedido o mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ej. Quiero una Pizza Pepperoni y unos Crazy Bread..." 
                          className="min-h-[120px] bg-secondary/50 border-transparent focus:bg-white transition-colors resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-full shadow-lg hover:-translate-y-1 transition-all">
                  Enviar Pedido
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
