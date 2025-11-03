import camilaPhoto from "@/assets/camila-toniatti-2.jpg";
import { Award, BookOpen, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
Conheça sua Consultora
            </h2>
          </div>

          <div className="flex flex-col gap-8 items-center text-left">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden">
                <img
                  src={camilaPhoto}
                  alt="Camila Toniatti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl text-primary font-bold mb-6">
                Camila Toniatti
              </h3>
              <p className="text-lg text-muted-foreground font-semibold mb-6">
Consultora em Aleitamento Materno
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-foreground leading-relaxed">
                  Minha jornada de maternidade, como mãe de duas meninas maravilhosas, foi marcada por <span className="font-bold">grandes desafios</span>, especialmente no puerpério e na amamentação. Foram momentos de dor, insegurança e, muitas vezes, de solidão.
                </p>
                <p className="text-foreground leading-relaxed">
                  Essa experiência profunda me fez entender, na pele e no coração, os <span className="font-bold">verdadeiros desafios</span> que todas nós, mães, enfrentamos. Foi esse o ponto de virada que me impulsionou: em 2020, decidi transformar minha dor em propósito e me tornei <span className="font-bold">Consultora em Aleitamento Materno.</span>
                </p>
                <p className="text-foreground leading-relaxed">
                  Percebi o quanto eu poderia <span className="font-bold">mudar a trajetória e a experiência</span> de centenas de famílias, transformando angústia em alívio, confiança e alegria. 
                </p>
                <p className="text-foreground leading-relaxed">
                  Minha Missão: Fazer com que você amamente sem dor, <span className="font-bold">com confiança total</span> e desfrute de cada momento.
                </p>
                <p className="text-foreground leading-relaxed">
                  Para isso, desenvolvi os <span className="font-bold">"8 Passos para uma Amamentação de Sucesso"</span> - um método validado que guia você para uma experiência plena e tranquila.
                </p>
                <p className="text-foreground leading-relaxed">
                  Minha dedicação à causa se reflete em diversas frentes:
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Idealizadora do Bem Gestar - Seu Guia, Seu Momento:</span> O maior evento preparatório para gestantes de Mogi das Cruzes, já em sua <span className="font-bold">7ª edição</span>, preparando mães e pais para o momento mais importante de suas vidas.
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Coautora do Livro Conhe'Ser Você na Maternidade:</span> Onde compartilho minha experiência pessoal, aliada a informações técnicas e práticas essenciais sobre amamentação.
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Eu acredito, de verdade, que a amamentação muda o mundo. </span>
                </p>
                <p className="text-foreground leading-relaxed">
                  Amamentar não é apenas sobre nutrição de "padrão ouro". É um ato que envolve a produção e liberação de uma cascata de <span className="font-bold">"hormônios do Bem"</span> que trazem bem-estar e segurança para você e seu bebê.
                </p>
                <p className="text-foreground leading-relaxed">
                  Quando um bebê se sente amado, seguro e acolhido desde o seu primeiro relacionamento fora do útero, por uma mãe feliz e confiante, <span className="font-bold">ele floresce</span>. E é essa base sólida que fará toda a diferença na sociedade que estamos construindo.
                </p>
                <p className="text-foreground leading-relaxed">
                  <span className="font-bold">Permita-se viver o melhor da amamentação. Eu estou aqui para guiar você.</span>
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
