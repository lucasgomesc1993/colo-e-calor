import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Milena Santana",
      role: "Mamãe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      text: "Camila é uma profissional excelente! Me ajudou muitíssimo no início da amamentação, onde muita dor se tornou em alegria na hora de amamentar. Com as melhores estratégias ensinadas por ela, hoje amamento com zero dor.",
      rating: 5
    },
    {
      name: "Fernanda Caxito",
      role: "Mamãe",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      text: "O trabalho dela é excepcional, ela é paciente e ajuda a desmistificar tudo que aprendemos ao longo da vida que amamentar tem que doer, quando não tem e que apesar de ser por instinto, tem a forma correta. Depois que conheci ela amamentar realmente se tornou algo prazeroso tanto para mim como para minha bebê.",
      rating: 5
    },
    {
      name: "Yanca Oliveira",
      role: "Mamãe",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      text: "Simplesmente ela salvou minha vida. Estava tendo bastante dificuldades com a amamentação, muita dor pela pega errada e fissuras no meu peito. Se não fosse por ela, não teria conseguido. Agradeço muito ao trabalho excepcional que ela fez, ao carinho e dedicação, uma profissional excelente.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Veja o que as mamães estão falando
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de quem venceu a dor e conquistou uma amamentação tranquila.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-normal leading-tight">
              Sim! Eu quero o método Colo & Calor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
