import MapPanel from "./MapPanel"
import ImagePanel from "./ImagePanel"
function GameLayout(){
  return(
    <div className="flex flex-col h-screen bg-[#14746F]">
      <main className="flex flex-1 gap-2 p-4">
        <div className=" w-[60%] rounded-2xl bg-slate-800 p-2 border border-slate-700">
          <ImagePanel/ ></div>
        <div className="w-[40%] rounded-2xl bg-slate-800 p-2 border border-slate-700">
          <MapPanel /></div>
      </main>
    </div>
  );
}

export default GameLayout