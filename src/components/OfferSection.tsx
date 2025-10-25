import { CheckCircle, Baby } from "lucide-react";

export const OfferSection = () => {
  const benefits = [
    "Plano claro e objetivo - Método estruturado e emocionalmente seguro",
    "Aulas gravadas - Conteúdo direto ao ponto, sem enrolação",
    "Suporte completo - Técnicas aplicáveis antes e depois do nascimento",
    "Aulas bônus - Conteúdo exclusivo para turbinar seus resultados"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              No Método Colo & Calor você vai ter:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20 mb-8">
            <Baby className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Tenha uma experiência positiva desde a primeira mamada
            </h3>
            <p className="text-xl text-muted-foreground font-semibold">
              Para Gestantes e Lactantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
