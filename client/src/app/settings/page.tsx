import Header from "@/components/Header";
import React from "react";

const Settings = () => {
  const userSettings = {
    username: "JohnDoe",
    email: "john.doe@example.com",
    teamName: "Team Loom",
    roleName: "Developer",
  };

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles}>Username: </label>
          <div className={textStyles}>{userSettings.username}</div>
          <label className={labelStyles}>Email: </label>
          <div className={textStyles}>{userSettings.email}</div>
          <label className={labelStyles}>Team: </label>
          <div className={textStyles}>{userSettings.teamName}</div>
          <label className={labelStyles}>Roles: </label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
