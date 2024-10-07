import React from "react";

import TodoList from "@/app/components/TodoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full">
        <TodoList />
      </div>
      <Footer />
    </React.Fragment>
  );
}
