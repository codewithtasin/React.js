import { useState } from "react";

// Project - Todo List
const ProjectToDoList = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const AddToList = () => {
    list.push(item);
    setList([...list]);
    alert("Successfully Added!");
  };

  const RemoveItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
    alert("Successfully Deleted!");
  };

  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="item"
      />
      <button onClick={AddToList}>Add List</button>
    </div>
  );
};

export default ProjectToDoList;
