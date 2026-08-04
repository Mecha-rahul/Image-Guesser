//CLAUDE GENERATED DATA FROM AROUND THE WORLD FOR IMAGES 




export function getLocations() {
  return [
    // --- 7 Wonders of the World ---
    { id: "great-wall-china", name: "Great Wall of China", country: "China", lat: 40.4319, lng: 116.5704, category: "wonder" },
    { id: "petra", name: "Petra", country: "Jordan", lat: 30.3285, lng: 35.4444, category: "wonder" },
    { id: "christ-redeemer", name: "Christ the Redeemer", country: "Brazil", lat: -22.9519, lng: -43.2105, category: "wonder" },
    { id: "machu-picchu", name: "Machu Picchu", country: "Peru", lat: -13.1631, lng: -72.5450, category: "wonder" },
    { id: "chichen-itza", name: "Chichen Itza", country: "Mexico", lat: 20.6843, lng: -88.5678, category: "wonder" },
    { id: "colosseum", name: "Colosseum", country: "Italy", lat: 41.8902, lng: 12.4922, category: "wonder" },
    { id: "taj-mahal", name: "Taj Mahal", country: "India", lat: 27.1751, lng: 78.0421, category: "wonder" },
    { id: "giza-pyramids", name: "Great Pyramid of Giza", country: "Egypt", lat: 29.9792, lng: 31.1342, category: "wonder" }, // honorary 8th wonder
 
    // --- Other famous popular places ---
    { id: "eiffel-tower", name: "Eiffel Tower", country: "France", lat: 48.8584, lng: 2.2945, category: "landmark" },
    { id: "statue-of-liberty", name: "Statue of Liberty", country: "USA", lat: 40.6892, lng: -74.0445, category: "landmark" },
    { id: "big-ben", name: "Big Ben", country: "UK", lat: 51.5007, lng: -0.1246, category: "landmark" },
    { id: "sydney-opera-house", name: "Sydney Opera House", country: "Australia", lat: -33.8568, lng: 151.2153, category: "landmark" },
    { id: "burj-khalifa", name: "Burj Khalifa", country: "UAE", lat: 25.1972, lng: 55.2744, category: "landmark" },
    { id: "mount-fuji", name: "Mount Fuji", country: "Japan", lat: 35.3606, lng: 138.7274, category: "nature" },
    { id: "grand-canyon", name: "Grand Canyon", country: "USA", lat: 36.1069, lng: -112.1129, category: "nature" },
    { id: "santorini", name: "Santorini", country: "Greece", lat: 36.3932, lng: 25.4615, category: "landmark" },
    { id: "angkor-wat", name: "Angkor Wat", country: "Cambodia", lat: 13.4125, lng: 103.8670, category: "landmark" },
    { id: "golden-gate-bridge", name: "Golden Gate Bridge", country: "USA", lat: 37.8199, lng: -122.4783, category: "landmark" },
    { id: "leaning-tower-pisa", name: "Leaning Tower of Pisa", country: "Italy", lat: 43.7230, lng: 10.3966, category: "landmark" },
    { id: "neuschwanstein", name: "Neuschwanstein Castle", country: "Germany", lat: 47.5576, lng: 10.7498, category: "landmark" },
    { id: "kremlin", name: "Kremlin", country: "Russia", lat: 55.7520, lng: 37.6175, category: "landmark" },
    { id: "hagia-sophia", name: "Hagia Sophia", country: "Turkey", lat: 41.0086, lng: 28.9802, category: "landmark" },
    { id: "table-mountain", name: "Table Mountain", country: "South Africa", lat: -33.9628, lng: 18.4098, category: "nature" },
  ];
}

export function getRandomLoaction(){
  const location = getLocations();
  return locationn[Math.floor(Math.random() * location.length)];
}