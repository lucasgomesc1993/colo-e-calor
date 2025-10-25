import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-glow)/0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
              Chegou sua hora de amamentar sem dor e com confiança!
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Junte-se a mais de 600 mães que transformaram a experiência da amamentação
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20">
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">R$ 497,00</div>
              <p className="text-2xl text-foreground font-semibold mb-6">ou 12x de R$ 49,70</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Suporte completo</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full text-base md:text-xl py-8 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 whitespace-normal leading-tight">
              Sim! Eu quero amamentar sem dor e sem complemento!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
