// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState("Test");
//   const [users, setUsers] = useState([10, 20, 30]);
//   function changeNum() {
//     setNum(30);
//     setUsername("User");
//     setUsers([30, 40, 50]);
//   }

//   return (
//     <div>
//       <h1>
//         Value of num is {num} <br /> {users}
//         <br /> Value of user is {username}
//       </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jumpBy5() {
    setNum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpBy5}>Jump by 5</button>
    </div>
  );
};

export default App;
