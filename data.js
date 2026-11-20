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
