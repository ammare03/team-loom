"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Button } from "@/components/ui/button";
import { setIsSidebarCollapsed } from "@/state";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGetProjectsQuery } from "@/state/api";

export default function Sidebar() {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const { data: projects } = useGetProjectsQuery();

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  return (
    <div
      className={`no-scrollbar dark:bg-dark-bg fixed z-40 flex h-[100%] flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 ${isSidebarCollapsed ? "hidden w-0" : "w-64"}`}
    >
      <div className="flex h-full w-full flex-col justify-start">
        {/* Top Logo */}
        <div className="dark:bg-dark-bg sticky top-0 z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            TeamLoom
          </div>
          {isSidebarCollapsed ? null : (
            <Button
              className="border-none bg-transparent py-3 shadow-none hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="size-6 text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-300" />
            </Button>
          )}
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
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>

        {/* Projects Links */}
        <div>
          <div className="mx-1.5 my-1.5 rounded-lg bg-transparent">
            <Button
              onClick={() => {
                setShowProjects((prev) => !prev);
              }}
              className="flex w-full items-center justify-between bg-transparent px-8 py-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="">Projects</span>
              {showProjects ? (
                <ChevronUp className="size-5" />
              ) : (
                <ChevronDown className="size-5" />
              )}
            </Button>
            {/* Projects List */}
            {showProjects &&
              projects?.map((project) => (
                <SidebarLink
                  key={project.id}
                  icon={Briefcase}
                  label={project.name}
                  href={`/projects/${project.id}`}
                />
              ))}
          </div>

          {/* Priorities Links */}
          <div className="mx-1.5 my-1.5 mb-6 rounded-lg bg-transparent">
            <Button
              onClick={() => {
                setShowPriority((prev) => !prev);
              }}
              className="flex w-full items-center justify-between bg-transparent px-8 py-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="">Priority</span>
              {showPriority ? (
                <ChevronUp className="size-5" />
              ) : (
                <ChevronDown className="size-5" />
              )}
            </Button>
            {showPriority && (
              <>
                <SidebarLink
                  icon={AlertCircle}
                  label="Urgent"
                  href="/priority/urgent"
                />
                <SidebarLink
                  icon={ShieldAlert}
                  label="High"
                  href="/priority/high"
                />
                <SidebarLink
                  icon={AlertTriangle}
                  label="Medium"
                  href="/priority/medium"
                />
                <SidebarLink
                  icon={AlertOctagon}
                  label="Low"
                  href="/priority/low"
                />
                <SidebarLink
                  icon={Layers3}
                  label="Backlog"
                  href="/priority/backlog"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`dark:bg-dark-bg relative flex cursor-pointer items-center gap-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute top-0 left-0 h-full w-[5px] bg-blue-200" />
        )}
        <Icon className="size-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};
