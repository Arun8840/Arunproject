import React from "react";

function CardAction({ children }: any) {
  return (
    <div className=" flex items-center gap-3 justify-end p-2 text-sm">
      {children}
    </div>
  );
}

export default CardAction;
