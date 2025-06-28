"use client";

import React, { useState } from "react";

export default function Sidebar() {
  //   const [showProjects, setShowProjects] = useState(true);
  //   const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40dark:bg-black overflow-y-auto bg-white w-64 `;
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="min-g-[50px] z-50 flex w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TeamLoom
          </div>
        </div>
      </div>
    </div>
  );
}
