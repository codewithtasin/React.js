const AddingEventHandler = () => {
  function Demo() {
    alert("Hello4");
  }

  return (
    <div>
      {/* <button onClick={alert("Hello1")}>Alert Button 1</button> */}

      <button
        onClick={() => {
          alert("Hello2");
        }}
      >
        Alert Button 2
      </button>

      <button
        onClick={function Demo() {
          alert("Hello3");
        }}
      >
        Alert Button 3
      </button>

      <button onClick={Demo}>Alert Button 4</button>
    </div>
  );
};

export default AddingEventHandler;
