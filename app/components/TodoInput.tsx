// TodoInput.tsx
import React, { FormEvent } from "react";

interface TodoInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

const TodoInput: React.FC<TodoInputProps> = ({
  inputValue,
  setInputValue,
  handleAddTodo,
  loading,
}) => (
  <form onSubmit={handleAddTodo} className="flex flex-col sm:flex-row mb-4">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new todo"
      disabled={loading}
      className="flex-grow border border-gray-300 sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none p-2 focus:outline-none  focus:ring-blue-400"
    />
    <button
      type="submit"
      disabled={loading}
      className="bg-blue-500 text-white sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none px-4 py-1 sm:py-0 hover:bg-blue-600 transition"
    >
      Add
    </button>
  </form>
);

export default TodoInput;
