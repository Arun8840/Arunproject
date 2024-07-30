import React from "react"

function Home() {
  return (
    <section className="grid grid-rows-12 gap-2 w-full h-full px-1">
      {/* //todo header */}
      <div className="rounded-xl flex items-center gap-2">
        <input
          type="text"
          className="border rounded-xl p-2 flex-1"
          placeholder="Search ..."
        />
        <button className="rounded-full bg-[#1a1a1a] text-white size-[40px] grid place-items-center p-2">
          A
        </button>
      </div>
      {/* //todo items */}
      <div className="row-span-11 grid grid-cols-2 gap-2 rounded-xl max-h-full overflow-y-auto">
        <div className="bg-[#ecebeb]  w-full min-h-[300px] rounded-lg"></div>
        <div className="bg-[#ecebeb]  w-full min-h-[300px] rounded-lg"></div>
        <div className="bg-[#ecebeb]  w-full min-h-[300px] rounded-lg"></div>
        <div className="bg-[#ecebeb]  w-full min-h-[300px] rounded-lg"></div>
        <div className="bg-[#ecebeb]  w-full min-h-[300px] rounded-lg"></div>
      </div>
    </section>
  )
}

export default Home
