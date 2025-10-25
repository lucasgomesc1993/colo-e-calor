import { Quote } from "lucide-react";

export const SuccessStorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              A Daiane transformou a amamentação dela com o Método Colo & Calor!
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 relative">
            <Quote className="w-16 h-16 text-primary/20 absolute top-8 left-8" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic text-center">
                "Foi a luz no fim do túnel pra mim, porque eu estava passando por tanta coisa naqueles primeiros dias, sem conseguir amamentar... realmente foi o que me salvou"
              </p>
              
              <div className="relative max-w-sm mx-auto mb-8">
                <div className="relative aspect-[9/16] bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/CLEub2Z__0s"
                    title="Depoimento Daiane"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground font-semibold text-center">
                — Daiane M. - Mãe de primeira viagem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
