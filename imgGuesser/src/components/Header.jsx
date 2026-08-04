function Header({ name = "Player", onNewGame }) {
  return (
    <div className="flex justify-between items-center px-6 py-1.5 bg-[#0F3D3E] text-white">
      <h1
      className="text-xl font-extrabold drop-shadow-emerald-700"
      style={{ fontFamily: "'Baloo 2', sans-serif" }}
      >
      Img Guesser
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={onNewGame}
          className="px-3 py-1.5 text-sm bg-[#14746F] rounded-lg font-semibold hover:bg-[#2a9d8f] transition"
        >
          New Game
        </button>
        <button className="w-8 h-8 rounded-full bg-cyan-300 text-white font-bold flex items-center justify-center hover:bg-[#2a9d8f] transition">
          {name.charAt(0).toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default Header;