// RWANDA DASHBOARD DATA
// Monthly rainfall values are copied from the World Bank CCKP download:
// rwanda-monthly-rainfall-1991-2020.csv (same folder as this file).

const rwandaSeasons = [
  { id: "long-rains", name: "Long rainy season", localName: "Itumba", months: ["March", "April", "May"], type: "rainy", note: "Main rainy season of the year." },
  { id: "long-dry", name: "Long dry season", localName: "Impeshyi", months: ["June", "July", "August"], type: "dry", note: "Driest part of the year." },
  { id: "short-rains", name: "Short rainy season", localName: "Umuhindo", months: ["September", "October", "November", "December"], type: "rainy", note: "Second rainy season (Sep-Dec, as used by Meteo Rwanda)." },
  { id: "short-dry", name: "Short dry season", localName: "Urugaryi", months: ["January", "February"], type: "dry", note: "Shorter dry period (the World Bank portal counts Dec-Feb)." }
];

const rainfallInfo = {
  title: "Average monthly rainfall in Rwanda",
  period: "1991-2020",
  unit: "mm",
  retrieved: "November 2026",
  source: "World Bank Climate Change Knowledge Portal, Climatology (CRU), observed data from the Climatic Research Unit, University of East Anglia",
  sourceUrl: "https://climateknowledgeportal.worldbank.org/country/rwanda/climate-data-historical"
};

const monthlyRainfall = [
  { month: "Jan", mm: 115.06 }, { month: "Feb", mm: 94.99 }, { month: "Mar", mm: 137.45 },
  { month: "Apr", mm: 142.70 }, { month: "May", mm: 117.75 }, { month: "Jun", mm: 30.30 },
  { month: "Jul", mm: 14.58 }, { month: "Aug", mm: 37.09 }, { month: "Sep", mm: 94.40 },
  { month: "Oct", mm: 130.82 }, { month: "Nov", mm: 148.48 }, { month: "Dec", mm: 118.54 }
];
