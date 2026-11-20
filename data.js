// RWANDA DASHBOARD DATA
// Step 1: verified seasons only. Monthly rainfall will be added next.

const rwandaSeasons = [
  {
    id: "long-rains",
    name: "Long rainy season",
    localName: "Itumba",
    months: ["March", "April", "May"],
    type: "rainy",
    note: "Main rainy season of the year."
  },
  {
    id: "long-dry",
    name: "Long dry season",
    localName: "Impeshyi",
    months: ["June", "July", "August"],
    type: "dry",
    note: "Driest part of the year."
  },
  {
    id: "short-rains",
    name: "Short rainy season",
    localName: "Umuhindo",
    months: ["September", "October", "November"],
    type: "rainy",
    note: "Second rainy season, often with more year-to-year change."
  },
  {
    id: "short-dry",
    name: "Short dry season",
    localName: "Urugaryi",
    months: ["December", "January", "February"],
    type: "dry",
    note: "Shorter dry period between the rainy seasons."
  }
];

const dataSources = [
  {
    name: "Rwanda Meteorology Agency (Meteo Rwanda) - Climatology of Rwanda",
    url: "https://www.meteorwanda.gov.rw/services/climatology-of-rwanda"
  },
  {
    name: "World Bank Climate Knowledge Portal - Rwanda",
    url: "https://climateknowledgeportal.worldbank.org/node/3511"
  }
];

// STEP 3: Monthly rainfall (national average)
const rainfallInfo = {
  title: "Average monthly rainfall in Rwanda",
  period: "1991-2020",
  unit: "mm",
  source: "World Bank Climate Change Knowledge Portal, Climatology (CRU), observed data from the Climatic Research Unit, University of East Anglia",
  sourceUrl: "https://climateknowledgeportal.worldbank.org/country/rwanda/climate-data-historical"
};

const monthlyRainfall = [
  { month: "Jan", mm: 115.06 },
  { month: "Feb", mm: 94.99 },
  { month: "Mar", mm: 137.45 },
  { month: "Apr", mm: 142.70 },
  { month: "May", mm: 117.75 },
  { month: "Jun", mm: 30.30 },
  { month: "Jul", mm: 14.58 },
  { month: "Aug", mm: 37.09 },
  { month: "Sep", mm: 94.40 },
  { month: "Oct", mm: 130.82 },
  { month: "Nov", mm: 148.48 },
  { month: "Dec", mm: 118.54 }
];
