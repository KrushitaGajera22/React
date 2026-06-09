import React from "react";

const App = () => {
  const user = {
    name: "User",
    age: 25,
    city: "Gandhinagar",
  };
  localStorage.setItem("user", JSON.stringify(user));

  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  return <div>App</div>;
};

export default App;
