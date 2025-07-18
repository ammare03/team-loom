import Header from "@/components/Header";
import TaskColumn from "@/components/TaskColumn";
import { useGetTasksQuery, useUpdateTaskStatusMutation } from "@/state/api";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type BoardProps = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({ id, setIsModalNewTaskOpen }: BoardProps) => {
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: Number(id) });

  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: number, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="px-4 xl:px-6">
        <div className="pt-5">
          <Header name="Project Tasks Board" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {taskStatus.map((status) => (
              <TaskColumn
                key={status}
                status={status}
                tasks={tasks ?? []}
                moveTask={moveTask}
                setIsModalNewTaskOpen={setIsModalNewTaskOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;
