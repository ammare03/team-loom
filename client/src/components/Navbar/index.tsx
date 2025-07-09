import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import Image from "next/image";
import { signOut } from "aws-amplify/auth";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const { data: currentUser } = useGetAuthUserQuery({});

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!currentUser) return null;
  const currentUserDetails = currentUser?.userDetails;

  return (
    <div className="dark:bg-dark-bg flex items-center justify-between bg-white px-4 py-3">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <Button
            className="border-none bg-transparent py-3 shadow-none hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="size-8 text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-300" />
          </Button>
        )}
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
        <Button
          variant="ghost"
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? `rounded p-2 dark:hover:bg-gray-700`
              : `rounded p-2 hover:bg-gray-100`
          }
        >
          {isDarkMode ? (
            <Sun className="size-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="size-6 cursor-pointer dark:text-white" />
          )}
        </Button>
        <Link
          href="/settings"
          className={
            isDarkMode
              ? `size-min rounded p-2 dark:hover:bg-gray-700`
              : `size-min rounded p-2 hover:bg-gray-100`
          }
        >
          <Settings className="size-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
        <div className="hidden items-center justify-between md:flex">
          <div className="align-center flex size-9 justify-center">
            {!!currentUserDetails?.profilePictureUrl ? (
              <Image
                src={`https://team-loom-s3-images.s3.us-east-1.amazonaws.com/${currentUserDetails.profilePictureUrl}`}
                alt={currentUserDetails?.username || "User Profile Picture"}
                width={100}
                height={50}
                className="h-full rounded-full object-cover"
              />
            ) : (
              <User className="size-6 cursor-pointer self-center rounded-full dark:text-white" />
            )}
          </div>
          <span className="mx-3 text-gray-800 dark:text-white">
            {currentUserDetails?.username || "User"}
          </span>
          <button
            className="hidden rounded bg-blue-400 px-4 py-2 text-sm font-bold text-white hover:bg-blue-500 md:block"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
