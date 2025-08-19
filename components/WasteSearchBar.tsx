import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface WasteSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const WasteSearchBar = ({
  onSearch,
  placeholder = "What are you throwing away?",
}: WasteSearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Debounced search on pause
    if (value.trim()) {
      const timer = setTimeout(() => onSearch(value), 500);
      return () => clearTimeout(timer);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="pl-12 pr-20 h-14 text-lg bg-gradient-search border-2 border-border/50 focus:border-primary focus:shadow-search transition-all duration-300 rounded-xl"
        />
        <Button
          type="submit"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-4 bg-gradient-hero hover:opacity-90 transition-opacity"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default WasteSearchBar;
