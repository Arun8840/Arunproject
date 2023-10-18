import React from "react";

function CardImage({ children }: any) {
  return (
    <div className="w-full max-h-[150px] rounded-t overflow-hidden">
      {children}
    </div>
  );
}

export default CardImage;
