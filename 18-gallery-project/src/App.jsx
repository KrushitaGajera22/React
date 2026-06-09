import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=50`,
      );

      setUserData(response.data);
      setHasNextPage(response.data.length === 50);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );
  let printUserData = (
    <h3 className="text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="h-screen overflow-auto bg-black p-4 text-white">
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="sticky bottom-0 bg-black border-t border-gray-700 flex justify-center items-center p-4 gap-6">
        <button
          disabled={index === 1}
          className={`text-sm rounded px-4 py-2 font-semibold ${
            index === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-amber-400 text-black cursor-pointer active:scale-95"
          }`}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex((prev) => prev - 1);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          disabled={!hasNextPage}
          className={`text-sm rounded px-4 py-2 font-semibold ${
            !hasNextPage
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-amber-400 text-black cursor-pointer active:scale-95"
          }`}
          onClick={() => {
            setUserData([]);
            setIndex((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
