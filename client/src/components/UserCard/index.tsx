import { User } from "@/state/api";
import Image from "next/image";
import React from "react";
import { Mail, User as UserIcon, Users, Hash, CheckCircle } from "lucide-react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="group dark:bg-dark-secondary dark:hover:bg-dark-secondary/80 mb-6 rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          {user.profilePictureUrl ? (
            <Image
              src={`https://team-loom-s3-images.s3.us-east-1.amazonaws.com/p1.jpeg`}
              alt="User Profile"
              width={64}
              height={64}
              className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
              <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </div>
          )}
          {/* Online Status Indicator */}
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white dark:border-dark-secondary"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white truncate mb-1">
            {user.username}
          </h3>
          {user.email && (
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {user.email}
              </p>
            </div>
          )}
          {user.userId && (
            <div className="flex items-center gap-2">
              <Hash className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                ID: {user.userId}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700 mb-4" />

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Team</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {user.teamId ? `Team ${user.teamId}` : "No Team"}
          </p>
        </div>
        
        <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-center gap-2 mb-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Status</span>
          </div>
          <p className="text-sm font-semibold text-green-600 dark:text-green-400">
            Active
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Member since</span>
          <span>Recently active</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
