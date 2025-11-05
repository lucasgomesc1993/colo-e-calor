import { Button } from "@/components/ui/button";
import { BookOpen, Gift, Video, FileText, Users, Heart } from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    { icon: FileText, title: "Bônus #1", description: "Checklist para mamada sem dor (para imprimir e deixar do lado da poltrona)" },
    { icon: Video, title: "Bônus #2", description: "Mini vídeo: \"o que fazer se o bebê rejeitar o peito nas primeiras mamadas\"" },
    { icon: BookOpen, title: "Bônus #3", description: "Ebook: 7 alimentos para turbinar sua produção" },
    { icon: Video, title: "Bônus #4", description: "Mini vídeo: como a introdução alimentar pode ser influenciada pela amamentação" },
    { icon: BookOpen, title: "Bônus #5", description: "Ebook: tratando fissuras em casa" }
  ];

  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
              <a href="#pricing" onClick={handleScrollToPricing}>
                Quero todos os bônus!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};