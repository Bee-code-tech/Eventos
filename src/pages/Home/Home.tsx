import RetroGrid from "@/components/ui/retro-grid"

const Home = () => {
  return (
    <div className="mt-24"
    >

      <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden border rounded-lg bg-background ">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent">
        Retro Grid
      </span>
 
      <RetroGrid />
    </div>
    </div>
  )
}

export default Home