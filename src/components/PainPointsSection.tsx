import { AlertCircle } from "lucide-react";
import lowProductionImg from "@/assets/low-production.jpg";
import longFeedingImg from "@/assets/long-feeding.jpg";
import breastfeedingPainImg from "@/assets/breastfeeding-pain.jpg";
export const PainPointsSection = () => {
  const painPoints = [{
    text: "Problemas com baixa produção?",
    image: lowProductionImg
  }, {
    text: "Bebê fica horas no peito mamando?",
    image: longFeedingImg
  }, {
    text: "Dor e medo da próxima mamada?",
    image: breastfeedingPainImg
  }];
  return <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Amamentação não deve ser romantizada. As dificuldades são uma realidade!
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {painPoints.map((point, index) => <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                <div className="aspect-square overflow-hidden">
                  <img src={point.image} alt={point.text} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <AlertCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
                  <p className="text-foreground font-semibold text-lg">{point.text}</p>
                </div>
              </div>)}
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-primary">Se ainda está na gestação,</span> saiba que a preparação que você fizer agora será determinante para uma amamentação tranquila e prazerosa.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Eu sei que você teme as fissuras nas primeiras mamadas, a falta de leite, o medo de o bebê rejeitar o peito, de precisar recorrer à fórmula ou aos bicos artificiais — e ainda se sentir culpada por tudo isso.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-primary">Mas existe um caminho</span> para você se preparar por completo para viver uma amamentação leve, sem medo e repleta de conexão.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/20">
              <p className="text-xl text-foreground leading-relaxed font-semibold text-center mb-4">
                E é isso que você vai encontrar no Método Colo & Calor.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                Ele será divisor de águas entre a dor e o PRAZER, a frustração e a LEVEZA.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};