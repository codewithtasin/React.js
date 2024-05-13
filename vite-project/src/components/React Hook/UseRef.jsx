import { useRef } from "react";
const UseRef = () => {
  const myHeadLine = useRef();
  const click1 = () => {
    myHeadLine.current.innerHTML = "<ul> <li>Tasin</li><li>Fahim</li></ul>";
  };

  //   Change Attribute
  const useImg = useRef();
  const click2 = () => {
    useImg.current.src = "https://placehold.co/600x400/000000/FFFFFF/png";
    useImg.current.setAttribute("width", "200px");
    useImg.current.setAttribute("height", "100px");
  };

  //   change Input

  let firstName,
    lastName = useRef();
  const click3 = () => {
    const fName = firstName.value;
    const lName = lastName.value;

    alert(fName + " " + lName);
  };

  //  Change Class value of css bootstrap

  let myCss = useRef();
  const click4 = () => {
    myCss.current.classList.remove("text-success");
    myCss.current.classList.add("text-danger");
  };

  //   Persisted Mutable Value without using rendering

  let myNumber = useRef(0);
  const click5 = () => {
    myNumber.current++;

    console.log(myNumber.current);
  };

  //   Caching expensive computations

  const APIData = useRef(null);
  const myPTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    APIData.current = await response.json();
  };

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };

  return (
    <div>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Click6</button>
      <button onClick={showData}>Click7</button>
      <button onClick={click5}>Click5</button>
      <h1 ref={myCss} className="text-success">
        Hello World!
      </h1>
      <button onClick={click4}>Click4</button>

      <form action="">
        <input ref={(a) => (firstName = a)} type="text" />
        <input ref={(b) => (lastName = b)} type="text" />
        <button onClick={click3}>Click3</button>
      </form>

      <h1 ref={myHeadLine}></h1>
      <button onClick={click1}>Click1</button>

      <img ref={useImg} src="https://placehold.co/600x400" alt="" />
      <button onClick={click2}>Click2</button>
    </div>
  );
};

export default UseRef;
