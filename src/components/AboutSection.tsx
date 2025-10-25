import camilaPhoto from "@/assets/camila-toniatti-2.jpg";
import { Award, BookOpen, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Conheça sua consultora
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden">
                <img
                  src={camilaPhoto}
                  alt="Camila Toniatti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl text-primary font-bold mb-6">
                Camila Toniatti
              </h3>
              <p className="text-lg text-muted-foreground font-semibold mb-6">
                Consultora de Amamentação
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  Sou mãe de duas lindas meninas e passei por dificuldades na amamentação. Essa experiência me fez entender os desafios das mães e me motivou a me tornar consultora de amamentação em 2020. Desenvolvi os 8 passos para uma amamentação de sucesso, ajudando mães a amamentar sem dor e com confiança.
                </p>
                <p className="text-foreground leading-relaxed">
                  Sou idealizadora do evento Bem Gestar, preparatório para gestantes em Mogi das Cruzes, já na 7ª edição. Também sou coautora do livro CONHE'SER VOCÊ, onde compartilho minha experiência na amamentação.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Award, text: "Consultora de amamentação desde 2020" },
                  { icon: Users, text: "Idealizadora do evento Bem Gestar" },
                  { icon: BookOpen, text: "Coautora do livro CONHE'SER VOCÊ" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
