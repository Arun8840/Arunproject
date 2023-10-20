import Link from "next/link";
import React from "react";

function HoverCard() {
  const email = "recipient@example.com";
  const subject = "Hello from My React App";
  const body = "This is the body of the email message.";

  const mailtoLink = `mailto:${email}`;
  return (
    <button className=" relative group z-0 border border-[#27272a] w-full h-full rounded-lg bg-black text-sm">
      Arun Prakash
      {/* hover card items */}
      <div className="bg-white/80 shadow-lg backdrop-blur-sm rounded-lg min-w-[300px] min-h-[100px] absolute top-12 left-0 p-2 hidden group-hover:flex gap-2 items-center justify- ">
        <div className="w-[70px] h-[70px] rounded-full shadow-lg">
          <img
            src={
              "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            alt="avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        {/* title */}
        <div className="flex-1 text-start">
          <h1 className="text-sm text-slate-800 font-semibold">Arun Prakash</h1>
          <p className="text-xs text-slate-600 font-semibold py-1 tracking-wider">
            FrontEnd Developer
          </p>
          <Link href={mailtoLink}>
            <p className="text-xs text-blue-600 border-b border-b-blue-600 font-semibold tracking-wider">
              arunprakashrani@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </button>
  );
}

export default HoverCard;
