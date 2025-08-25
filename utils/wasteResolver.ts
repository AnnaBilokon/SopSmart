import { Material, SearchResult } from '@/types/waste';
import { materials } from '@/data/materials';

export function resolveMaterial(query: string, materialList: Material[] = materials): SearchResult {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) {
    return {
      material: null,
      confidence: 0,
      suggestions: materials.slice(0, 3)
    };
  }

  for (const material of materialList) {
    for (const name of material.names) {
      if (name.toLowerCase() === normalizedQuery) {
        return {
          material: { ...material, confidence: 1.0 },
          confidence: 1.0
        };
      }
    }
  }

  const partialMatches: Array<{ material: Material; score: number }> = [];
  
  for (const material of materialList) {
    for (const name of material.names) {
      const lowerName = name.toLowerCase();
      if (lowerName.includes(normalizedQuery)) {
        const score = normalizedQuery.length / lowerName.length;
        partialMatches.push({ material, score });
      }
    }
  }

  if (partialMatches.length > 0) {

    partialMatches.sort((a, b) => b.score - a.score);
    const bestMatch = partialMatches[0];
    
    const confidence = Math.min(bestMatch.score * 1.2, 1.0);
    
    if (confidence < 0.8) {

      return {
        material: { ...bestMatch.material, confidence },
        confidence,
        suggestions: partialMatches.slice(0, 3).map(m => m.material)
      };
    }
    
    return {
      material: { ...bestMatch.material, confidence },
      confidence
    };
  }

  return {
    material: materials[0],
    confidence: 0,
    suggestions: materials.slice(0, 4)
  };
}

export function getExampleItems(lang: "en" | "sv" = "en"): string[] {
  const examples = {
    en: ["diapers", "batteries", "glass bottle", "textiles", "cardboard"],
    sv: ["blöjor", "batterier", "glasflaska", "textilier", "wellpapp"],
  };
  return examples[lang];
}