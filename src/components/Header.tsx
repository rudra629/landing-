import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b-4 border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/resq-logo.ico" 
              alt="ResQ Logo" 
              className="h-20 w-auto"
              
            />
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Sponsored by</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">-Star Security Services-</span>
                <img 
                  src="/star-security-logo.png" 
                  alt="Star Security Services Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
          
          <Button variant="hero" size="lg">
            Developed
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
