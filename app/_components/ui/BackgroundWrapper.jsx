"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function BackgroundWrapper({ children }) {
  const { resolvedTheme } = useTheme();
  const [background, setBackground] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setBackground(
        "absolute inset-0 -z-10 h-full w-full bg-slate-950 " +
        "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] " +
        "bg-[size:14px_24px] [mask-image]"
      );
      setTextColor("text-white");
    } else {
      setBackground(
        "absolute inset-0 -z-10 h-full w-full bg-white " +
        "bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] " +
        "bg-[size:6rem_4rem] " +
        "bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
      );
      setTextColor("text-black");
    }
  }, [resolvedTheme]);

  return (
    <div className="relative h-full w-full">
      <div className={background}></div>
      <div className={textColor}>
        {children}
      </div>
    </div>
  );
}

export default BackgroundWrapper;
