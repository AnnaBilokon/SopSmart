export interface Material {
  id: string;
  names: string[];
  category: string;
  at_home: boolean;
  home_bin: string;
  home_bin_sv: string;
  instructions: string[];
  instructions_sv: string[];
  show_stations: boolean;
  station_filters: string[];
  confidence?: number;
}

export interface DropOffStation {
  id: string;
  name: string;
  address: string;
  types: string[];
  lat: number;
  lng: number;
  distance?: number;
  opening_hours?: string;
}

export interface SearchResult {
  material: Material;
  confidence: number;
  suggestions?: Material[];
}