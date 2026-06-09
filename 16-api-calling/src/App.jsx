import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios("https://picsum.photos/v2/list");
    console.log("response: ", data);
    setData(data);
  };
  return (
    <div onClick={getData}>
      <button>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return (
            <h4>
              Hello,
              {elem.author}
              {idx}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default App;
