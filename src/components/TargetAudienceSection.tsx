import { Users, Heart, AlertCircle, Sparkles } from "lucide-react";

export const TargetAudienceSection = () => {
  const audience = [
    {
      icon: Users,
      title: "Gestantes",
      description: "Que buscam um plano claro, objetivo e emocionalmente seguro para se prepararem para amamentar"
    },
    {
      icon: Heart,
      title: "Mamães",
      description: "Que buscam técnicas aplicáveis para aprimorar a mamada, melhorar a pega e corrigir problemas"
    },
    {
      icon: AlertCircle,
      title: "Quem enfrenta desafios",
      description: "Dores, fissuras, baixa produção ou insegurança"
    },
    {
      icon: Sparkles,
      title: "Quem permite vivenciar",
      description: "Uma experiência positiva desde a primeira mamada"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Para quem é o Método Colo & Calor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {audience.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
