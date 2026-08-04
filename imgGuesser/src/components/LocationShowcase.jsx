
import { useLocation } from "../hooks/useLocation";

function LocationShowcase() {
  const { location, loading, error } = useLocation();

  if (loading) {
    return <p>Loading locations...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <div className="location-grid">
      {location.map((location) => (
        <div key={location.id} className="location-card">
          {location.image ? (
            <img
              src={location.image.url}
              alt={location.image.altDescription || location.name}
            />
          ) : (
            <div className="no-image">Image not found</div>
          )}

          <h3>{location.name}</h3>
          <p>{location.country}</p>

          {location.image && (
            <p className="attribution">
              Photo by{" "}
              <a href={location.image.photographerLink} target="_blank" rel="noreferrer">
                {location.image.photographer}
              </a>{" "}
              on Unsplash
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default LocationShowcase;