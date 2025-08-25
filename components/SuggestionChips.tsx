import { Button } from "@/components/ui/button";
import type { SuggestionItem } from "@/utils/suggestionMappers";

interface SuggestionChipsProps {
  suggestions: SuggestionItem[];
  onSuggestionClick: (value: string) => void;
  language?: "en" | "sv";
  title?: string;
}

const SuggestionChips = ({
  suggestions,
  onSuggestionClick,
  title,
}: SuggestionChipsProps) => {
  if (!suggestions?.length) return null;

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
            onClick={() => onSuggestionClick(suggestion.value)}
            className="rounded-full bg-card hover:bg-accent hover:shadow-soft transition-all duration-200 border-border/50"
          >
            {suggestion.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionChips;
