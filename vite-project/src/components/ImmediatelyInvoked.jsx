// Immediately Invoked
const ImmediatelyInvoked = () => {
  const marks = 80;
  return (
    <div>
      {(() => {
        if ((marks != 80) & (marks != 100)) {
          return <h1> You got A+ </h1>;
        } else {
          return <h1>You Failed!</h1>;
        }
      })()}
    </div>
  );
};

export default ImmediatelyInvoked;
