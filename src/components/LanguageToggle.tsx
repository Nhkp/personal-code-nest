import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="font-medium"
    >
      {language === "fr" ? "EN" : "FR"}
    </Button>
  );
};
