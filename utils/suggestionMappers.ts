
import type { Material } from "@/types/waste";


export type SuggestionItem = {
  id: string;   
  label: string; 
  value: string; 
};

export const mapStringsToItems = (items: string[]): SuggestionItem[] =>
  items.map((label) => ({
    id: slugify(label),
    label,
    value: label,
  }));


export const mapMaterialsToItems = (
  materials: Material[],
  language: "en" | "sv"
): SuggestionItem[] =>
  materials.map((m) => {
    const label =
      language === "sv" ? (m.names[1] ?? m.names[0]) : m.names[0];

    return {
      id: m.id,
      label,
      value: m.names[0], 
    };
  });

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
