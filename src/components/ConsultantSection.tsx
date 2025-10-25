import camilaPhoto from "@/assets/camila-toniatti.jpg";

export const ConsultantSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden bg-card rounded-3xl shadow-2xl border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <div className="relative grid md:grid-cols-[300px,1fr] gap-8 p-8 md:p-12 items-center">
              {/* Foto */}
              <div className="mx-auto md:mx-0">
                <img 
                  src={camilaPhoto} 
                  alt="Camila Toniatti - Consultora de Amamentação" 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover shadow-xl ring-4 ring-background"
                />
              </div>

              {/* Conteúdo */}
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    Consultora de Amamentação
                  </span>
                </div>
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Me chamo <span className="font-bold text-primary">Camila Toniatti</span> e após anos de aplicação deste método na prática, ajudando mais de <span className="font-bold text-primary">600 mulheres</span> a salvar sua amamentação, estou segura que este passo a passo também vai ajudar <span className="font-bold text-primary">Você!!!</span>
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">+600 mulheres atendidas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground">Anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
