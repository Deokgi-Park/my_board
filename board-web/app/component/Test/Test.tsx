"use client";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ComponentA = () => (
  <div className="w-64 h-64 bg-blue-200 flex items-center justify-center">
    Component A
  </div>
);

const ComponentB = () => (
  <div className="w-64 h-64 bg-green-200 flex items-center justify-center">
    Component B
  </div>
);

const Test = () => {
  const [showA, setShowA] = useState(true);

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={() => setShowA(!showA)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>
      <TransitionGroup>
        <CSSTransition key={showA ? "A" : "B"} timeout={300} classNames="fade">
          {showA ? <ComponentA /> : <ComponentB />}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Test;
