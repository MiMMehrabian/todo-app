// TodoItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todosSlice";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between my-5 border-b rounded-r-lg border-gray-300">
      <span
        onClick={() => dispatch(toggleTodo(id))}
        className={`cursor-pointer text-gray-800 line-through-container ${
          completed ? "completed text-gray-500" : ""
        }`}
      >
        {text}
        <span className="line-through"></span>
      </span>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="bg-red-500 text-white rounded-r-lg p-2 hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
