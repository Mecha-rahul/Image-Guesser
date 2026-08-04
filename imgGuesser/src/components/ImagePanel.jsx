function ImagePanel({ src }) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <img
        src={src}
        alt="Guess the location"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ImagePanel