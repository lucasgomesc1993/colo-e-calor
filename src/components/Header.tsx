import logo from "@/assets/logo-colo-calor.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="Método Colo & Calor - 8 passos para uma amamentação de sucesso" 
            className="h-12 md:h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
};
