"use client";

import React, { use, useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";

type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* Modal New Tasks */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && (
        <Board/>
      )} */}
    </div>
  );
};

export default Project;
