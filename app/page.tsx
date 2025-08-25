"use client";
import { useState } from "react";
import { Recycle, Leaf } from "lucide-react";
import WasteSearchBar from "@/components/WasteSearchBar";
import ResultCard from "@/components/ResultCard";
import SuggestionChips from "@/components/SuggestionChips";
import {
  mapMaterialsToItems,
  mapStringsToItems,
} from "@/utils/suggestionMappers";
import StationList from "@/components/StationList";
import { resolveMaterial, getExampleItems } from "@/utils/wasteResolver";
import { dropOffStations } from "@/data/materials";
import { SearchResult } from "@/types/waste";
import Link from "next/link";

const MainPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [language, setLanguage] = useState<"en" | "sv">("en");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResult(null);
      setHasSearched(false);
      return;
    }

    const result = resolveMaterial(query);
    setSearchResult(result);
    setHasSearched(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sv" : "en"));
  };

  const materialSuggestions = mapMaterialsToItems(
    searchResult?.suggestions ?? [],
    language
  );
  const exampleSuggestionItems = mapStringsToItems(getExampleItems(language));

  const getFilteredStations = () => {
    if (!searchResult?.material?.show_stations) return [];

    return dropOffStations.filter((station) =>
      searchResult?.material?.station_filters.some((filter) =>
        station.types.includes(filter)
      )
    );
  };

  const showNoResults = hasSearched && searchResult?.confidence === 0;
  const showLowConfidence =
    hasSearched &&
    searchResult &&
    searchResult.confidence < 0.8 &&
    searchResult.confidence > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="p-2 bg-gradient-hero rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </Link>
              <h1 className="text-xl font-bold text-foreground">SopSmart</h1>
            </div>

            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm bg-secondary hover:bg-secondary/80 rounded-md transition-colors"
            >
              {language === "en" ? "Svenska" : "English"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {language === "sv"
                  ? "Smart sortering för hållbar framtid"
                  : "Smart sorting for a sustainable future"}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "sv"
                ? "Skriv vad du ska slänga så visar vi var det ska sorteras"
                : "Type what you're throwing away and we'll show you where it goes"}
            </p>
          </div>

          <WasteSearchBar
            onSearch={handleSearch}
            placeholder={
              language === "sv"
                ? "Vad slänger du?"
                : "What are you throwing away?"
            }
          />
        </div>
      </section>

      {/* Results Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Show search result */}
          {searchResult?.material && searchResult.confidence > 0 && (
            <ResultCard
              material={searchResult.material}
              language={language}
              showStations={true}
            />
          )}

          {/* Show low confidence suggestions */}
          {showLowConfidence && searchResult?.suggestions && (
            <SuggestionChips
              suggestions={materialSuggestions}
              onSuggestionClick={handleSuggestionClick}
              title={language === "sv" ? "Menade du:" : "Did you mean:"}
              language={language}
            />
          )}

          {/* Show no results with examples */}
          {showNoResults && (
            <SuggestionChips
              suggestions={exampleSuggestionItems}
              onSuggestionClick={handleSuggestionClick}
              title={
                language === "sv"
                  ? "Hittade ingen matchning. Prova med:"
                  : "No match found. Try these examples:"
              }
              language={language}
            />
          )}

          {/* Show example chips when no search has been made */}
          {!hasSearched && (
            <SuggestionChips
              suggestions={exampleSuggestionItems}
              onSuggestionClick={handleSuggestionClick}
              title={
                language === "sv" ? "Vanliga exempel:" : "Popular examples:"
              }
              language={language}
            />
          )}

          {/* Show drop-off stations */}
          {searchResult?.material?.show_stations && (
            <StationList stations={getFilteredStations()} language={language} />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            {language === "sv"
              ? "Hjälper dig sortera rätt för en renare miljö"
              : "Helping you sort right for a cleaner environment"}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
