import { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(0);
  const click8 = () => {
    setNumber(number + 1);
  };

  //   Working with Object

  const [myObject, setMyObject] = useState({
    key1: "value1",
    key2: "value2",
    key3: "value3",
  });

  const click9 = () => {
    setMyObject((preObj) => ({
      ...preObj,
      key1: "new value1",
      key2: "new value2",
      key3: "new value3",
    }));
  };

  return (
    <div>
      <h1>{myObject.key1}</h1>
      <h1>{myObject.key2}</h1>
      <h1>{myObject.key3}</h1>
      <button onClick={click9}> Click9</button>
      <h1>Number: {number}</h1>
      <button onClick={click8}>Click8</button>
    </div>
  );
};

export default UseState;
