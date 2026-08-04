import { useState, useEffect } from "react";
import MapPanel from "./MapPanel";
import ImagePanel from "./ImagePanel";
import { getRandomLocation } from "../data/Location";
import { fetchLocationImage } from "../utils/fetchImage";
import { getDistanceKm } from "../utils/distance";
import { calculateScore } from "../utils/score";

function GameLayout({ roundTrigger }) {
  const [currentPlace, setCurrentPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageURL, setImageURL] = useState(null);
  const [result, setResult] = useState(null); // { distanceKm, score }

  const startNewRound = async () => {
    setLoading(true);
    setResult(null);

    const randomPlace = getRandomLocation();
    setCurrentPlace(randomPlace);

    const query = randomPlace.name;
    const res = await fetchLocationImage(query);

    setImageURL(res.url);
    setLoading(false);
  };

  const handleGuessSubmit = (guessLatLng) => {
    if (!currentPlace) return;

    const actual = { lat: currentPlace.lat, lng: currentPlace.lng };
    const distanceKm = getDistanceKm(guessLatLng, actual);
    const score = calculateScore(distanceKm);

    setResult({ distanceKm: Math.round(distanceKm), score });
  };

  useEffect(() => {
    startNewRound();
  }, [roundTrigger]);

  return (
    <div className="flex flex-col flex-1 bg-[#14746F] min-h-0">
      <main className="relative flex-1 p-4 min-h-0">
        <div className="absolute inset-4 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
          <ImagePanel imageURL={imageURL} loading={loading} />
        </div>

        <div className="absolute bottom-8 right-8 w-[380px] h-[280px] rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-600 shadow-2xl hover:w-[600px] hover:h-[450px] transition-all duration-300 z-10">
          <MapPanel
            key={currentPlace?.name}
            onGuessSubmit={handleGuessSubmit}
            actualPlace={currentPlace}
            revealed={!!result}
          />
        </div>

        {result && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-xl shadow-xl z-20 flex items-center gap-4">
            <span>
              You were <strong>{result.distanceKm} km</strong> away — Score:{" "}
              <strong>{result.score}</strong>
            </span>
            <button
              onClick={startNewRound}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors font-semibold"
            >
              Next Round
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default GameLayout;