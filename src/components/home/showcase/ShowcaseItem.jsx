import React from "react";

const ShowcaseItem = ({ item, className = "" }) => {
  return (
    <div
      className={`relative w-full mb-4 pb-[60%] rounded-[10px] shadow-md bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h3 className="m-0 mb-1 text-base">{item.title}</h3>
        <p className="m-0 text-xs opacity-90">{item.subtitle}</p>
      </div>
    </div>
  );
};

export default ShowcaseItem;
