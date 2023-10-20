import React from "react";
interface defaultTypes {
  song: string;
  artist: string;
  year: string;
}
function Table() {
  let defaultData: defaultTypes[] = [
    {
      song: "The Sliding Mr. Bones",
      artist: "Witchy Woman",
      year: "1972",
    },
    {
      song: "Witchy Woman",
      artist: "The Eagles",
      year: "1972",
    },
    {
      song: "Shining Star",
      artist: "Earth, Wind, and Fire",
      year: "1972",
    },
    {
      song: "The Sliding Mr. Bones",
      artist: "Witchy Woman",
      year: "1972",
    },
    {
      song: "The Sliding Mr. Bones",
      artist: "Witchy Woman",
      year: "1972",
    },
    {
      song: "The Sliding Mr. Bones",
      artist: "Witchy Woman",
      year: "1972",
    },
  ];
  return (
    <div className="w-full h-full overflow-hidden border border-[#27272a] rounded-lg">
      <table className="table-auto w-full h-full">
        <thead>
          <tr className="border-b border-b-[#334155] bg-[#131b2e] text-[#d7dde6]">
            <th className="text-start p-2">song</th>
            <th className="text-start p-2">artist</th>
            <th className="text-start p-2">year</th>
          </tr>
        </thead>
        <tbody>
          {defaultData.map((items) => {
            return (
              <tr className="border-b border-b-[#334155] bg-[#1e293b] text-[#8b9aae]">
                <td className="text-start p-2 text-sm">{items.song}</td>
                <td className="text-start p-2 text-sm">{items.artist}</td>
                <td className="text-start p-2 text-sm">{items.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
