import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Quando posso começar o curso?",
      answer: "Imediatamente. Mesmo durante a gestação, você já pode iniciar hoje mesmo."
    },
    {
      question: "E se meu bebê já tiver nascido, ainda vale a pena fazer?",
      answer: "Sim! O Método Colo & Calor foi criado para ajudar em qualquer fase da amamentação — seja enfrentando dor, pega incorreta, baixa produção ou insegurança nas mamadas."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "Os resultados podem aparecer logo nas primeiras aulas. As técnicas são práticas, diretas e já trouxeram alívio para muitas mães em poucos dias — algumas sentiram diferença já na primeira mamada."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Você terá acesso ao treinamento por 12 meses."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o método
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
