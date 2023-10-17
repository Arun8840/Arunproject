import React from "react";

function Avatar({ source, className }: any) {
  // todo props items
  let avatarProp = {
    src: source
      ? source
      : "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600",
    className: className
      ? className
      : "w-[80px] h-[80px] rounded-full overflow-hidden",
  };
  return (
    <div className=" w-full h-full rounded-lg flex flex-col items-center justify-center">
      <div className={avatarProp.className}>
        <img
          src={avatarProp.src}
          alt="avatar"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  );
}

export default Avatar;
