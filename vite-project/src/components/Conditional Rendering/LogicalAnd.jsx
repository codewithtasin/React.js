// Conditional Rendering using Logical &&
const LogicalAnd = () => {
  const status = true;
  return (
    <div>
      <h1>Logical && Login Status</h1>
      {status && <button>Logout</button>}
    </div>
  );
};

export default LogicalAnd;
