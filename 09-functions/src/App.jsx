import React from "react";

const App = () => {
  function btnClicked() {
    console.log("Button clicked");
  }
  return (
    <div>
      <h1>Hello, User</h1>

      <button
        onClick={function () {
          console.log("button is clicked");
        }}
      >
        change user
      </button>
    </div>
  );
};

export default App;
