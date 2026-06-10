import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-lg border-b border-border/60 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#" 
              className="text-xl font-bold gradient-text cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              CP
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#about");
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#skills");
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.projects}
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#experience");
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.experience}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.contact}
              </a>
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#about");
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#skills");
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.projects}
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#experience");
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.experience}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
