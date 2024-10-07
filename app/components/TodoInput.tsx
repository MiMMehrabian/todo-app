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
  <form onSubmit={handleAddTodo} className="flex mb-4">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new todo"
      disabled={loading}
      className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button
      type="submit"
      disabled={loading}
      className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition"
    >
      Add
    </button>
  </form>
);

export default TodoInput;
