const ObjectData = (props) => {
  return (
    <div>
      <ul>
        <li>Name: {props.item["Name"]}</li>
        <li>Age: {props.item["Age"]}</li>
        <li>Address: {props.item["Address"]}</li>
      </ul>
    </div>
  );
};

export default ObjectData;
