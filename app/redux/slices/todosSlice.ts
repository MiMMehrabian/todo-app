import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
  loading: boolean;
}

// Function to load todos from localStorage
const loadTodos = async (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const savedTodos = localStorage.getItem("todos");
        resolve(savedTodos ? JSON.parse(savedTodos) : []);
      } else {
        resolve([]);
      }
    }, 500); // Simulate loading delay
  });
};

// Function to save todos to localStorage
const saveTodos = (todos: Todo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [] as Todo[],
    loading: true,
  } as TodosState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addTodo: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.items.push(newTodo);
      saveTodos(state.items);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state.items);
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveTodos(state.items);
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.items = action.payload;
      state.loading = false; // Stop loading once todos are loaded
    },
  },
});

// Thunk action for loading initial todos
export const loadInitialTodos = () => async (dispatch: AppDispatch) => {
  const todos = await loadTodos();
  dispatch(setTodos(todos));
};

// Export actions and reducer
export const { setLoading, addTodo, toggleTodo, deleteTodo, setTodos } =
  todoSlice.actions;

// Configure the Redux store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
