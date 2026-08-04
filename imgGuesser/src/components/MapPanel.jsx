
import { MapContainer, TileLayer } from "react-leaflet";

function MapPanel() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full"
        style={{ background: "#1e293b" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}


export default MapPanel ;