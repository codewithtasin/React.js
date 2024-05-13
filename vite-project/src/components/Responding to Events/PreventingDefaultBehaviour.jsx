const PreventingDefaultBehaviour = () => {
  const SubmitForm = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };
  return (
    <div>
      <form onSubmit={SubmitForm} action="">
        <input type="text" placeholder="name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PreventingDefaultBehaviour;
