import { Button } from "@/components/ui/button";
import { Material } from "@/types/waste";

interface SuggestionChipsProps {
  suggestions: Material[] | string[];
  onSuggestionClick: (suggestion: string) => void;
  title?: string;
  language?: "en" | "sv";
}

const SuggestionChips = ({
  suggestions,
  onSuggestionClick,
  title,
  language = "en",
}: SuggestionChipsProps) => {
  const getDisplayName = (suggestion: Material | string): string => {
    if (typeof suggestion === "string") return suggestion;

    // Try to find a name in the preferred language
    const names = suggestion.names;
    if (language === "sv") {
      // Look for Swedish names (often longer or contain specific Swedish characters)
      const swedishName = names.find(
        (name) =>
          name.includes("ö") ||
          name.includes("ä") ||
          name.includes("å") ||
          names.indexOf(name) > names.length / 2
      );
      if (swedishName) return swedishName;
    }

    return names[0];
  };

  const getSuggestionValue = (suggestion: Material | string): string => {
    if (typeof suggestion === "string") return suggestion;
    return suggestion.names[0];
  };

  if (!suggestions.length) return null;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {title && (
        <p className="text-sm text-muted-foreground text-center">{title}</p>
      )}
      <div className="flex flex-wrap gap-2 justify-center">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(getSuggestionValue(suggestion))}
            className="rounded-full bg-card hover:bg-accent hover:shadow-soft transition-all duration-200 border-border/50"
          >
            {getDisplayName(suggestion)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;
