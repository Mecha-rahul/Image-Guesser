import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function ClickHandler({ onGuess }) {
  useMapEvents({
    click(e) {
      onGuess(e.latlng);
    },
  });
  return null;
}

export default function MapPanel({ onGuessSubmit, actualPlace, revealed }) {
  const [guess, setGuess] = useState(null);
  const [justClicked, setJustClicked] = useState(false);

  const handleGuess = (latlng) => {
    if (revealed) return; // lock the map once a guess is submitted
    setGuess(latlng);
  };

  const confirmGuess = () => {
    if (!guess) return;
    setJustClicked(true);
    onGuessSubmit(guess);
    setTimeout(() => setJustClicked(false), 300);
  };

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <ClickHandler onGuess={handleGuess} />

        {guess && <Marker position={[guess.lat, guess.lng]} />}

        {revealed && actualPlace && (
          <Marker position={[actualPlace.lat, actualPlace.lng]} />
        )}
      </MapContainer>

      {!revealed && (
        <button
          onClick={confirmGuess}
          disabled={!guess}
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-[1000] px-4 py-2 rounded-lg
                      text-white font-semibold shadow-lg transition-colors duration-200
                      disabled:bg-slate-500 disabled:cursor-not-allowed
                      ${justClicked ? "bg-emerald-800" : "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700"}`}
        >
          Guess
        </button>
      )}
    </div>
  );
}