import { BookOpen, Video } from "lucide-react";

export const MethodSection = () => {
  const modules = [
    { number: "Módulo 1", title: "Antes de tudo: Amamentação começa na mente" },
    { number: "Módulo 2", title: "Ambiente: Preparando o ambiente e o enxoval para amamentar com leveza" },
    { number: "Módulo 3", title: "Golden Hour: O início que define tudo" },
    { number: "Módulo 4", title: "Mitos: Quebrando mitos que te impedem de amamentar com confiança" },
    { number: "Módulo 5", title: "A pega perfeita: Massagens, posições e técnicas de encaixe" },
    { number: "Módulo 6", title: "Acoplagem: O segredo que muda tudo" },
    { number: "Módulo 7", title: "Desacoplar: Desacoplando sem dor e corrigindo erros" },
    { number: "Módulo 8", title: "Pós-mamada: Cuidados após amamentar - Hora da soneca" }
  ];

  const specialVideos = [
    "Técnicas para aumentar sua produção",
    "Como tratar fissuras mamárias em casa"
  ];

  // Função para formatar o título com negrito antes dos dois pontos
  const formatTitle = (title: string) => {
    const parts = title.split(':');
    if (parts.length > 1) {
      return (
        <>
          <strong>{parts[0]}</strong>:{parts.slice(1).join(':')}
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O que você vai encontrar dentro do Método Colo & Calor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center gap-4 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {module.number}
                  </span>
                  <h3 className="text-foreground text-base leading-tight">
                    {formatTitle(module.title)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 border-2 border-secondary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Vídeos Especiais
            </h3>
            <div className="space-y-4">
              {specialVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-foreground text-lg">{video}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};