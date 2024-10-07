// Loading.tsx
import React from "react";

const TodoLoading: React.FC = () => (
  <div className="animate-pulse flex ">
    <div className="flex-1 py-1">
      <div className="space-y-3">
        <div className="grid grid-cols-5 gap-10 py-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-2 bg-slate-200 rounded col-span-5"
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TodoLoading;
