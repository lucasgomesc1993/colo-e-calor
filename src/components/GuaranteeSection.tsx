import { Shield, CheckCircle } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.1),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-12 shadow-2xl border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  7 dias de garantia incondicional!
                </h2>
                <p className="text-xl text-muted-foreground">
                  Você não corre nenhum risco!
                </p>
              </div>

              <div className="bg-accent/30 rounded-2xl p-8 mb-8">
                <p className="text-lg text-foreground leading-relaxed text-center">
                  Se o conteúdo não fizer sentido para você, <span className="font-bold text-primary">reembolsamos 100% do valor investido.</span>
                </p>
              </div>

              <div className="text-center space-y-6">
                <p className="text-2xl font-bold text-primary">
                  Compromisso real com o seu resultado
                </p>
                <p className="text-xl text-foreground">
                  Você não tem nada a perder e uma amamentação tranquila a ganhar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
