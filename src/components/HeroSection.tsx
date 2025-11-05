import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const HeroSection = () => {
  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-glow)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent leading-snug md:leading-tight">
              Pare de sofrer calada: descubra como amamentar sem dor e criar uma conexão poderosa com seu bebê desde o primeiro instante
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Assista ao vídeo e descubra os 8 passos para uma amamentação de sucesso.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative aspect-video bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lrTpcHoqdLg"
                title="Vídeo de Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary-glow hover:scale-105 whitespace-normal leading-tight">
              <a href="#pricing" onClick={handleScrollToPricing}>
                Quero começar agora!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};