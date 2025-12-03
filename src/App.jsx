import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=14`
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
      Please wait...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <Card elem={elem} idx={idx} />;
    });
  }

  return (
    <div className="bg-black items-center w-full gap-10 flex flex-col overflow-auto text-white p-4 h-screen">
      <div className="flex flex-wrap gap-3">{printUserData}</div>
      <div className="flex gap-6 justify-center items-center">
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          style={{opacity: index==1 ? 0.5 : 1}}
          className="bg-amber-500 active:bg-amber-600 active:scale-95 flex items-center rounded text-black font-semibold text-lg px-6 py-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left-icon lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Prev
        </button>

        <h1 className="text-2xl font-semibold">Page {index}</h1>

        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-500 active:bg-amber-600 active:scale-95 flex items-center rounded text-black font-semibold text-lg px-6 py-2 "
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
