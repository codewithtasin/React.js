import { useState } from "react";

const ProjectFormSubmission = () => {
  const [FormSub, SetFormSub] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    SetFormSub((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(FormSub);
  };

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <label htmlFor="fName"> First Name</label>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          value={FormSub.fName}
          type="text"
          placeholder="type here..."
        />
        <label htmlFor=""> Last Name</label>
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          value={FormSub.lName}
          type="text"
          placeholder="type here..."
        />
        <label htmlFor="">City</label>
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={FormSub.city}
        >
          <option value="">Choose your City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Khulna">Khulna</option>
          <option value="Barisal">Barisal</option>
        </select>
        <label htmlFor=""> Gender</label>
        <input
          onChange={() => {
            InputOnChange("gender", (value = "Male"));
          }}
          checked={FormSub.gender === "Male"}
          type="radio"
          name="gender"
        /> Male
        <input
          onChange={() => {
            InputOnChange("gender", (value = "Female"));
          }}
          checked={FormSub.gender === "Female"}
          type="radio"
          name="gender"
        /> Female
        <br />
        <br />
        <button onSubmit={InputOnChange}>Submit</button>
      </form>
    </div>
  );
};

export default ProjectFormSubmission;
