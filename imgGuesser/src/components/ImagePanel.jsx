
function ImagePanel({ imageURL, loading }) {
  if (loading || !imageURL) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-400">
        Loading...
      </div>
    );
  }

  return (
    <img
      src={imageURL}
      alt="Guess the location"
      className="w-full h-full object-cover rounded-xl"
    />
  );
}

export default ImagePanel;