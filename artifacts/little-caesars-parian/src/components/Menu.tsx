import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Menu() {
  const products = [
    {
      id: 1,
      name: "Pizza Pepperoni",
      description: "Clásica con generosas rebanadas de pepperoni.",
      price: "$129 MXN",
      image: "/images/pepperoni.png"
    },
    {
      id: 2,
      name: "Pizza Hawaiana",
      description: "Jamón y piña sobre queso derretido.",
      price: "$139 MXN",
      image: "/images/hawaiian.png"
    },
    {
      id: 3,
      name: "Crazy Bread",
      description: "Palitos de pan con ajo y queso parmesano.",
      price: "$59 MXN",
      image: "/images/crazy-bread.png"
    },
    {
      id: 4,
      name: "Refrescos",
      description: "Coca-Cola 600ml bien fría.",
      price: "$25 MXN",
      image: "/images/cola.png"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Nuestro <span className="text-primary">Menú</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Calientes, deliciosas y listas cuando tú lo estés. Conoce nuestros favoritos.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white font-black px-3 py-1 rounded-full text-sm shadow-md">
                    {product.price}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>
                  <Button 
                    className="w-full font-bold rounded-full"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                      // Try to pre-fill the form if possible
                      const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                      if (textarea) {
                        textarea.value = `Hola, me gustaría ordenar: ${product.name}`;
                        textarea.dispatchEvent(new Event('input', { bubbles: true }));
                      }
                    }}
                  >
                    Pedir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
