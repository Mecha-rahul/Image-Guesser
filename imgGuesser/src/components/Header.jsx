function Header({name = "Player"}){
  return(
    <div className="flex justify-between items-center px-6 py-4 bg-[#0F3D3E] text-white">
      <h1 className=" font-extrabold  text-2xl font-biold drop-shadow-emerald-700">Img Guesser</h1>
      <div className="flex items-center gap-4">
          <button className=" px-4  py-2  bg-[#14746F] rounded-lg font-semibold hover:bg-[#2a9d8f] transition">New Game</button>
          <button className="w-10 h-10 rounded-full bg-cyan-300 text-white font-bold flex items-center justify-center hover:bg-[#2a9d8f] transitiontransition">
              {name.charAt(0).toUpperCase()}
          </button>
      </div>
    </div>
  );
}

export default Header