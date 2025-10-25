import { Video, BookOpen, Award, FileText, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BonusSection = () => {
  const bonuses = [
    {
      icon: Video,
      title: "Bônus 1 - Vídeo aula",
      description: "Como tratar fissuras mamarias em casa"
    },
    {
      icon: Video,
      title: "Bônus 2 - Mini vídeo",
      description: "Como facilitar a introdução alimentar do seu bebê através da amamentação"
    },
    {
      icon: FileText,
      title: "Bônus 3 - Técnicas",
      description: "para aumentar sua produção"
    },
    {
      icon: BookOpen,
      title: "Bônus 4 - Check list",
      description: "da mamada sem dor, para imprimir e deixar ao lado da poltrona"
    },
    {
      icon: Video,
      title: "Bônus 5 - Vídeo aula",
      description: "Seu Bebê não ganha peso? Saiba identificar as possíveis causas"
    },
    {
      icon: Heart,
      title: "Bônus 6 - Check list",
      description: "Conheça os 7 alimentos indispensáveis na sua dieta que irão turbinar seu leite"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Bônus Exclusivos
            </h2>
            <p className="text-xl text-muted-foreground">
              Conteúdos extras para potencializar seus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                  <bonus.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{bonus.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Quero todos os bônus!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};