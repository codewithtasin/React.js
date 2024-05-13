// Conditional Rendering using Invoke Function
const InvokeFunction = () => {
  return (
    <div>
      <h1>Login Status for Invoke Func</h1>
      {(() => {
        if (status == false) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      })()}
    </div>
  );
};

export default InvokeFunction;
