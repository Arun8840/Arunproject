import Link from "next/link";
import React from "react";

function layout({ children }: any) {
  return (
    <div className="w-full h-[100vh] flex gap-1">
      <div className="border w-[250px] h-full">
        <ul>
          <Link href={"/Dashboard/home1"}>
            <li>home1</li>
          </Link>
          <Link href={"/Dashboard/home2"}>
            <li>home2</li>
          </Link>
        </ul>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default layout;
