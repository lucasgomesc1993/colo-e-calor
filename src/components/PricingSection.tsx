import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const PricingSection = () => {
  const items = [
    { name: "Método Colo & Calor", value: "R$ 597,00" },
    { name: "o que fazer se seu bebê rejeitar o peito nas primeiras mamadas", value: "R$ 198,00" },
    { name: "Tratando fissuras em casa", value: "R$ 57,00" },
    { name: "Facilitando introdução alimentar durante a amamentação", value: "R$ 27,00" },
    { name: "Check List 7 Alimentos essenciais", value: "R$ 29,00" },
    { name: "Check List Mamada sem dor", value: "R$ 49,00" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--secondary)/0.1),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Veja tudo que você vai levar:
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20">
            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-4 pb-4 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-foreground font-medium">{item.name}</p>
                  </div>
                  <p className="text-muted-foreground font-semibold whitespace-nowrap">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-primary/20 pt-6 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-foreground">Valor Total:</span>
                <span className="text-3xl font-bold text-muted-foreground line-through">R$ 957,00</span>
              </div>
            </div>

            <div className="bg-accent/30 rounded-2xl p-6 mb-8">
              <p className="text-foreground leading-relaxed text-center">
                Esse seria o valor total de cada produto vendido separadamente, e que facilmente poderia custar muito mais, visto que é o <span className="font-bold text-primary">MÉTODO</span> que vai garantir uma experiência perfeita para você e seu bebê.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-secondary/20 text-secondary px-6 py-3 rounded-full font-bold text-lg mb-6">
                🔥 Oferta Especial
              </div>
              
              <div className="mb-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">R$ 497,00</div>
                <p className="text-2xl text-foreground font-semibold">ou 12x de R$ 52,93</p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full text-base md:text-xl py-8 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-normal leading-tight">
              <a href="https://lastlink.com/p/C00A5AE1C/checkout-payment/" target="_blank" rel="noopener noreferrer">
                Sim! Eu quero amamentar sem dor e sem complemento!
              </a>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro | Ambiente protegido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};