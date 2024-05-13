//  Condition Rendering Ternery Operator

const TerneryOperator = () => {
  const status = false;

  return <div>{status ? <button>Logout</button> : <button>Login</button>}</div>;
};

export default TerneryOperator;
