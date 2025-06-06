import React from "react";

export function CommonHeader({
  title,
  height = "h-[46px]",
  fontSize = "text-base",
  hasShadow = false,
  bgColor = "",
  borderBottomColor = "",
}) {
  return (
    <header
      className={`relative flex items-center justify-center px-4 ${height} ${
        hasShadow ? "shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)]" : ""
      }`}
      style={{
        backgroundColor: bgColor || "transparent",
        borderBottom: borderBottomColor
          ? `1px solid ${borderBottomColor}`
          : undefined,
      }}
    >
      <h1 className={`${fontSize} font-semibold`}>{title}</h1>
    </header>
  );
}
