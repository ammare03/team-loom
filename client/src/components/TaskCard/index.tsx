import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import {
  CalendarDays,
  Clock,
  MessageSquareMore,
  User,
  Users,
} from "lucide-react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const taskTagsSplit = task.tags ? task.tags.split(",") : [];

  const formattedStartDate = task.startDate
    ? format(new Date(task.startDate), "MMM dd, yyyy")
    : null;

  const formattedDueDate = task.dueDate
    ? format(new Date(task.dueDate), "MMM dd, yyyy")
    : null;

  const numberOfComments = (task.comments && task.comments.length) || 0;

  const PriorityBadge = ({ priority }: { priority: Task["priority"] }) => (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        priority === "Urgent"
          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
          : priority === "High"
            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
            : priority === "Medium"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
              : priority === "Low"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      }`}
    >
      {priority}
    </span>
  );

  const StatusBadge = ({ status }: { status: string }) => (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        status === "To Do"
          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
          : status === "Work In Progress"
            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
            : status === "Under Review"
              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              : status === "Completed"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="group dark:bg-dark-secondary dark:hover:bg-dark-secondary/80 mb-4 rounded-lg bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {task.attachments && task.attachments.length > 0 && (
        <div className="-mx-1 -mt-1 mb-4">
          <Image
            src={`/${task.attachments[0].fileURL}`}
            alt={task.attachments[0].fileName}
            width={400}
            height={200}
            className="h-48 w-full rounded-lg object-cover"
          />
        </div>
      )}

      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
            #{task.id}
          </span>
          <StatusBadge status={task.status ?? ""} />
        </div>
        {task.priority && <PriorityBadge priority={task.priority} />}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {task.title}
      </h3>

      {task.description && (
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {task.description}
        </p>
      )}

      {taskTagsSplit.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {taskTagsSplit.map((tag) => (
            <span
              key={tag.trim()}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      )}

      <div className="mb-4 space-y-2">
        {formattedStartDate && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Start:</span>
            <span>{formattedStartDate}</span>
          </div>
        )}
        {formattedDueDate && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <CalendarDays className="h-4 w-4" />
            <span className="font-medium">Due:</span>
            <span>{formattedDueDate}</span>
          </div>
        )}
      </div>

      <div className="mb-4 border-t border-gray-200 dark:border-gray-700" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {task.assignee && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {task.assignee.username}
              </span>
            </div>
          )}
          {task.author && task.author.userId !== task.assignee?.userId && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {task.author.username}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <MessageSquareMore className="h-4 w-4" />
          <span className="text-sm">{numberOfComments}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
