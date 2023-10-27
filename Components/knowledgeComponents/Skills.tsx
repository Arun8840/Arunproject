import useGetSkills from "@/data/SkillsData";
import React from "react";

function Skills() {
  const { SkillItems } = useGetSkills();
  return (
    <div className="grid grid-cols-6 gap-4 h-1/2 place-items-center py-5">
      {SkillItems.map((items) => {
        return (
          <div className="rounded-lg w-full h-full flex flex-col justify-between items-center">
            <div className="w-[70%] mx-auto">{items.icon}</div>
            <h1>{items.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
