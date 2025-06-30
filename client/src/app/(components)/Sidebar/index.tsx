"use client";

import { LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div className="fixed z-40 flex h-[100%] w-64 flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black">
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Top Logo */}
        <div className="min-g-[50px] z-50 flex w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TeamLoom
          </div>
        </div>
        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <div>
            <h3 className="text-md font-bold tracking-wide capitalize dark:text-gray-200">
              Ammar&apos;s Team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] size-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* Navbar Links */}
      </div>
    </div>
  );
};


