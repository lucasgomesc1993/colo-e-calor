import { BookOpen, Video } from "lucide-react";

export const MethodSection = () => {
  const modules = [
    { number: "Módulo 1", title: "Antes de tudo: a amamentação começa na sua mente" },
    { number: "Módulo 2", title: "Preparando o ambiente e o enxoval para amamentar com leveza" },
    { number: "Módulo 3", title: "Golden Hour: iniciação a amamentação e cuidados práticos" },
    { number: "Módulo 4", title: "Quebrando os mitos que te impedem de amamentar com confiança" },
    { number: "Módulo 5", title: "A pega perfeita começa com o preparo da mama e o posicionamento certo" },
    { number: "Módulo 6", title: "Lapidando a mamada" },
    { number: "Módulo 7", title: "Finalizando a mamada: desacoplando o bebê e corrigindo problemas" },
    { number: "Módulo 8", title: "Pós mamada: hora da soneca" }
  ];

  const specialVideos = [
    "Amamentação de gêmeos",
    "Salto desenvolvimento 1º mês x volume de leite",
    "Amamentação x prótese mamária e/ou redução de mama",
    "Causas das dores nas mamadas que não cessam"
  ];

  // Função para formatar o título sem negrito
  const formatTitle = (title: string) => {
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