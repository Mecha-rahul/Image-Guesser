const BASE_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;


export async function fetchLocationImage(locationName) {
  try {
    const response = await fetch(
      `${BASE_URL}?query=${encodeURIComponent(locationName)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return null;
    }

    const photo = data.results[0];

    return {
      url: photo.urls.regular,     
      thumb: photo.urls.thumb,       
      photographer: photo.user.name, 
      photographerLink: photo.user.links.html,
      altDescription: photo.alt_description,
    };
  } catch (error) {
    console.error("Failed to fetch image:", error);
    return null;
  }
}