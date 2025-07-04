import { Project } from "@/state/api";
import { format } from "date-fns";
import React from "react";
import {
  CalendarDays,
  Clock,
  FolderOpen,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const formattedStartDate = project.startDate
    ? format(new Date(project.startDate), "MMM dd, yyyy")
    : null;

  const formattedEndDate = project.endDate
    ? format(new Date(project.endDate), "MMM dd, yyyy")
    : null;

  // Calculate project status based on dates
  const getProjectStatus = () => {
    if (!project.startDate || !project.endDate) return "planning";

    const now = new Date();
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);

    if (now < start) return "upcoming";
    if (now > end) return "completed";
    return "active";
  };

  const projectStatus = getProjectStatus();

  const StatusBadge = ({ status }: { status: string }) => (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        status === "completed"
          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
          : status === "active"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
            : status === "upcoming"
              ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      }`}
    >
      {status === "completed" && <CheckCircle2 className="h-3 w-3" />}
      {status === "active" && <AlertCircle className="h-3 w-3" />}
      {status === "upcoming" && <Clock className="h-3 w-3" />}
      {status === "planning" && <FolderOpen className="h-3 w-3" />}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );

  return (
    <div className="group dark:bg-dark-secondary dark:hover:bg-dark-secondary/80 mb-4 rounded-lg bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Header Section */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
            <FolderOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
              #{project.id}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {project.name}
            </h3>
          </div>
        </div>
        <StatusBadge status={projectStatus} />
      </div>

      {/* Description */}
      {project.description && (
        <div className="mb-4">
          <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      )}

      {/* Divider */}
      <div className="mb-4 border-t border-gray-200 dark:border-gray-700" />

      {/* Date Information */}
      <div className="space-y-3">
        {formattedStartDate && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Start Date
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {formattedStartDate}
              </span>
            </div>
          </div>
        )}

        {formattedEndDate && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <CalendarDays className="h-4 w-4 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                End Date
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {formattedEndDate}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {(formattedStartDate || formattedEndDate) && (
        <div className="mt-4 border-t border-gray-100 pt-3 dark:border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Project Timeline</span>
            {projectStatus === "active" && (
              <span className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                In Progress
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
