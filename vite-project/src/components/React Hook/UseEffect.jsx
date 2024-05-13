import { useEffect, useState } from "react";
const UseEffect = () => {
  let [data, setData] = useState();
  //   useEffect(() => {
  //     console.log("Hello World! I am Tasin Islam");
  //   }, [2, 266, 30, 45]);

  //   fetch method inside useEffect

  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products/1")
  //       .then((res) => res.json())
  //       .then((json) => setData(json));
  //   }, []);

  // Async await inside useEffect

  useEffect(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/products");
      let json = await response.json();
      setData(json);
    })();
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default UseEffect;
