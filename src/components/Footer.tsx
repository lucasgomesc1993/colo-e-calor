import logo from "@/assets/logo-colo-calor.png";
import { Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/coloecalorconsultoria" },
    { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@coloecalorconsultoria" },
    { icon: Mail, name: "Email", url: "mailto:metodocoloecalor@gmail.com" },
    { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/5511972360065" }
  ];

  return (
    <footer className="bg-gradient-to-b from-accent/10 to-background py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logo} 
              alt="Método Colo & Calor" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <p className="text-muted-foreground">
            Transformando a experiência da amamentação com conhecimento, suporte e carinho.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground">
            © 2025 Método Colo & Calor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};