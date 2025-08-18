import { Material } from '@/types/waste';

export const materials: Material[] = [
  {
    id: 'diapers',
    names: ['diaper', 'diapers', 'blöja', 'blöjor', 'nappy', 'nappies'],
    category: 'household_waste',
    at_home: true,
    home_bin: 'Residual waste',
    home_bin_sv: 'Restavfall',
    instructions: [
      'Put in regular household waste bin',
      'Cannot be recycled due to hygiene reasons',
      'Dispose in residual waste container'
    ],
    instructions_sv: [
      'Lägg i vanliga hushållsavfall',
      'Kan inte återvinnas av hygienskäl',
      'Slängning i restavfallsbehållare'
    ],
    show_stations: false,
    station_filters: []
  },
  {
    id: 'batteries',
    names: ['battery', 'batteries', 'batteri', 'batterier', 'AA battery', 'lithium battery'],
    category: 'hazardous_waste',
    at_home: false,
    home_bin: '',
    home_bin_sv: '',
    instructions: [
      'Never put in household waste',
      'Take to battery collection point',
      'Available at most stores and recycling centers'
    ],
    instructions_sv: [
      'Aldrig i hushållsavfall',
      'Ta till batteriinsamlingsplats',
      'Finns på de flesta butiker och återvinningscentraler'
    ],
    show_stations: true,
    station_filters: ['batteries', 'electronics', 'hazardous']
  },
  {
    id: 'glass_bottle',
    names: ['glass bottle', 'wine bottle', 'beer bottle', 'glasflaska', 'vinflaska', 'ölflaska'],
    category: 'recyclable',
    at_home: false,
    home_bin: '',
    home_bin_sv: '',
    instructions: [
      'Remove caps and labels if possible',
      'Rinse clean',
      'Sort by color at recycling station'
    ],
    instructions_sv: [
      'Ta bort korkar och etiketter om möjligt',
      'Skölj rena',
      'Sortera efter färg vid återvinningsstation'
    ],
    show_stations: true,
    station_filters: ['glass', 'bottles']
  },
  {
    id: 'textiles',
    names: ['clothes', 'clothing', 'textiles', 'shirt', 'pants', 'kläder', 'textilier', 'skjorta', 'byxor'],
    category: 'recyclable',
    at_home: false,
    home_bin: '',
    home_bin_sv: '',
    instructions: [
      'Clean and dry textiles only',
      'Put in textile collection containers',
      'Damaged items can often still be recycled'
    ],
    instructions_sv: [
      'Endast rena och torra textilier',
      'Lägg i textilbehållare',
      'Skadade föremål kan ofta fortfarande återvinnas'
    ],
    show_stations: true,
    station_filters: ['textiles', 'clothing']
  },
  {
    id: 'cardboard',
    names: ['cardboard', 'box', 'packaging', 'kartong', 'låda', 'förpackning'],
    category: 'recyclable',
    at_home: true,
    home_bin: 'Paper recycling',
    home_bin_sv: 'Pappersåtervinning',
    instructions: [
      'Flatten boxes to save space',
      'Remove tape and plastic parts',
      'Keep dry and clean'
    ],
    instructions_sv: [
      'Platta till lådor för att spara plats',
      'Ta bort tejp och plastdelar',
      'Håll torrt och rent'
    ],
    show_stations: true,
    station_filters: ['paper', 'cardboard']
  },
   {
    id: 'plastic_packaging',
    names: ['plastic packaging', 'plastic bag', 'plastpåse', 'plastförpackning', 'plast'],
    category: 'recyclable',
    at_home: true,
    home_bin: 'Plastic recycling',
    home_bin_sv: 'Plaståtervinning',
    instructions: [
      'Rinse clean to remove food residue',
      'Remove non-plastic parts',
      'Place in plastic recycling container'
    ],
    instructions_sv: [
      'Skölj ren från matrester',
      'Ta bort delar som inte är plast',
      'Lägg i plaståtervinning'
    ],
    show_stations: true,
    station_filters: ['plastic', 'packaging']
  },
  {
    id: 'food_waste',
    names: ['food waste', 'banana peel', 'apple core', 'matavfall', 'bananskal', 'äppelskrutt'],
    category: 'organic_waste',
    at_home: true,
    home_bin: 'Food waste bin',
    home_bin_sv: 'Matavfallsbehållare',
    instructions: [
      'Place in compostable bag',
      'Tie the bag and put it in the food waste bin',
      'No plastic, glass, or metal'
    ],
    instructions_sv: [
      'Lägg i komposterbar påse',
      'Knyt påsen och lägg i matavfallsbehållare',
      'Ingen plast, glas eller metall'
    ],
    show_stations: false,
    station_filters: []
  },
  {
    id: 'light_bulbs',
    names: ['light bulb', 'bulb', 'lamp', 'glödlampa', 'lampa'],
    category: 'hazardous_waste',
    at_home: false,
    home_bin: '',
    home_bin_sv: '',
    instructions: [
      'Do not throw in household waste',
      'Take to hazardous waste collection point or recycling station'
    ],
    instructions_sv: [
      'Släng inte i hushållsavfall',
      'Lämna till farligt avfall-insamling eller återvinningsstation'
    ],
    show_stations: true,
    station_filters: ['hazardous', 'electronics', 'bulbs']
  },
  {
    id: 'electronics',
    names: ['laptop', 'computer', 'tv', 'phone', 'electronics', 'elektronik', 'mobil', 'dator', 'tv'],
    category: 'electronics',
    at_home: false,
    home_bin: '',
    home_bin_sv: '',
    instructions: [
      'Do not throw in household waste',
      'Take to electronics recycling station',
      'Remove batteries before disposal'
    ],
    instructions_sv: [
      'Släng inte i hushållsavfall',
      'Lämna till elektronikåtervinning',
      'Ta bort batterier innan återvinning'
    ],
    show_stations: true,
    station_filters: ['electronics']
  },
  {
    id: 'metal_cans',
    names: ['tin can', 'metal can', 'aluminium can', 'konservburk', 'metallburk', 'aluminiumburk'],
    category: 'recyclable',
    at_home: true,
    home_bin: 'Metal recycling',
    home_bin_sv: 'Metallåtervinning',
    instructions: [
      'Rinse to remove food residue',
      'Crush to save space',
      'Place in metal recycling container'
    ],
    instructions_sv: [
      'Skölj ren från matrester',
      'Platta till för att spara plats',
      'Lägg i metallåtervinning'
    ],
    show_stations: true,
    station_filters: ['metal']
  }
];



// Mock drop-off stations
export const dropOffStations = [
  {
    id: 'ica_maxi_stockholm',
    name: 'ICA Maxi Stockholm',
    address: 'Årstavägen 21, Stockholm',
    types: ['batteries', 'electronics', 'textiles'],
    lat: 59.3098,
    lng: 18.0686,
    opening_hours: 'Mon-Sun 8:00-22:00'
  },
  {
    id: 'recycling_center_south',
    name: 'Återvinningscentral Söderort',
    address: 'Månskensvägen 15, Stockholm',
    types: ['glass', 'bottles', 'textiles', 'batteries', 'electronics', 'hazardous', 'metal'],
    lat: 59.2978,
    lng: 18.0765,
    opening_hours: 'Mon-Fri 7:00-19:00, Sat-Sun 9:00-17:00'
  },
  {
    id: 'coop_vasastan',
    name: 'Coop Vasastan',
    address: 'Upplandsgatan 41, Stockholm',
    types: ['batteries', 'electronics'],
    lat: 59.3434,
    lng: 18.0597,
    opening_hours: 'Mon-Sun 7:00-23:00'
  }
];