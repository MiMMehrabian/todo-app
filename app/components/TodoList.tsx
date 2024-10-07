"use client";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadInitialTodos, RootState } from "@/app/redux/store";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoLoading from "./TodoLoading";
import { addTodo } from "../redux/slices/todosSlice";

const TodoList: React.FC = () => {
  const { items: todos, loading } = useSelector(
    (state: RootState) => state.todos
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: any = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    dispatch(loadInitialTodos());
  }, [dispatch]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch(addTodo({ text: inputValue, completed: false }));
    setInputValue("");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-10 h-[60vh] overflow-y-auto relative ">
      <div className="sticky top-0 w-full bg-white pb-2 z-10">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTodo={handleAddTodo}
          loading={loading}
        />
      </div>

      <div>
        {loading ? (
          <TodoLoading />
        ) : (
          <>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No todos available.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
