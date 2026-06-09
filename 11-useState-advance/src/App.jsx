import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "test", age: 20 });
  function btnClicked() {
    const newNum = { ...num };
    newNum.user = "User";
    newNum.age = 23;
    setNum(newNum);
  }

  const [array, setArray] = useState([10, 20, 30]);

  function btnClick() {
    const newArr = [...array];
    newArr.push(99);
    setArray(newArr);
  }

  function click() {
    setNum((prev) => ({ ...prev, age: 25 }));
  }

  //batch update
  const [int, setInt] = useState(10);

  const clickInt = () => {
    setInt((prev) => prev + 1);
    setInt((prev) => prev + 1);
    setInt((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{int}</h1>
      <button onClick={clickInt}>Click</button>
    </div>
  );
};

export default App;
