// Conditional Rendering using if else

function LoginStatusBtn(status) {
    if (status) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  }
  const IfElse = () => {
    return (
      <div>
        <h1>Login Status</h1>
        {LoginStatusBtn(true)}
      </div>
    );
  };
  
  export default IfElse;
  