# 🌍 ImageGuessr

A GeoGuessr-inspired web game built with **React.js** where players guess the location of a randomly displayed image on an interactive world map.

Instead of using Google Street View, **ImageGuessr** uses the **Unsplash API** to fetch real-world images from a curated dataset of locations. Players place a marker on the map, and the game calculates how close their guess is to the actual location, awarding points based on accuracy.

---

## 🎮 Demo

>Locally run, i havent deployed it 

---


---

# 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Leaflet
- Leaflet.js

### APIs

- Unsplash API

### Other Tools

- JavaScript (ES6+)
- Vite (if applicable)
- Git & GitHub

---

# 🚀 How It Works

## 1. Location Dataset

The project uses a custom dataset containing approximately **20–30 unique locations**.

Each location stores information such as:

- Image ID
- Latitude
- Longitude
- Country
- Location Name

The dataset was created with assistance from **Claude AI** and is stored in an array format for quick lookup.

---

## 2. Fetching Images

When a game starts:

- A random location is selected from the dataset.
- The corresponding image is fetched using the **Unsplash API**.
- The image is displayed without revealing its location.

---

## 3. Guessing

Players inspect the image and:

- Navigate the interactive map.
- Click anywhere on the map to place their marker.
- Submit their guess.

---

## 4. Distance Calculation

Once the guess is submitted:

- The player's coordinates are compared with the actual coordinates.
- The geographical distance between both points is calculated.
- The score is generated based on how close the guess is to the real location.

The closer the guess, the higher the score.

---

# 🧠 Scoring Logic

The application calculates the geographical distance between:

- Player's selected coordinates
- Actual location coordinates

The score decreases as the distance increases, rewarding more accurate guesses.

---

# 📂 Project Structure

```
src/
│
├── components/
│   ├── Map
│   ├── ImageDisplay
│   ├── ScoreCard
│   └── UI Components
│
├── data/
│   └── locations.js
│
├── utils/
│   └── distanceCalculator.js
│
├── App.jsx
└── main.jsx
```

*(Structure may vary depending on the project.)*

---

# ⚙️ Installation

Clone the repository.

```bash
git clone https://github.com/Mecha-rahul/Image-Guesser.git
```

Navigate into the project.

```bash
cd Image-Guesser/imgGuesser
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file.

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
```

You can obtain an API key by creating a developer account on Unsplash.

---

# 🎯 Future Improvements

- Multiple difficulty levels
- Larger location database
- Multiplayer mode
- Daily challenges
- Leaderboards
- Timer mode
- Hint system
- More accurate scoring algorithm
- Global rankings
- Mobile optimizations

---

# 🤖 AI Assistance

This project was developed with assistance from **Claude AI** during the development process.

AI assistance was used for:

- Creating the initial location dataset
- Development guidance
- Code suggestions
- Debugging
- General implementation support

All project integration, customization, and final implementation were completed by the project author.

---

# 🙌 Acknowledgements

- Unsplash API for providing location images.
- React Leaflet for interactive mapping.
- Leaflet.js for map rendering.
- Claude AI for development assistance and dataset generation.

---


# 👨‍💻 Author

**Mecha-rahul**

GitHub: https://github.com/Mecha-rahul

If you enjoyed this project, consider giving it a ⭐ on GitHub!
