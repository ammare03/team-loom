import React from "react";
import { Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-[4px] mr-2 size-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <Input
            className="w-full rounded border-none p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center">
        <Link
          href="/settings"
          className="size-min rounded p-2 hover:bg-gray-100"
        >
          <Settings className="size-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
}
