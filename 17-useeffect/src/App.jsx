import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);

  function aChanging() {
    console.log("value of a changed");
  }
  function bChanging() {
    console.log("value of b changed");
  }
  useEffect(
    function () {
      aChanging();
    },
    [a],
  );
  useEffect(
    function () {
      bChanging();
    },
    [b],
  );
  return (
    <div>
      <h2>a is {a}</h2>
      <h2>b is {b}</h2>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        ChangeA
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        ChangeB
      </button>
    </div>
  );
};

export default App;
