import React, { useState } from "react";
import { IState as Props } from "../App";

// App sends state to this component, this component uses them as props
interface IProps {
  users: Props["users"];
  setUsers: React.Dispatch<React.SetStateAction<Props["users"]>>;
}

// Tell Typescript that this is a function component that expects props to be passed
const AddToList: React.FC<IProps> = ({ users, setUsers }) => {
  // Define input as this component's state
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    age: "",
    vzid: "",
    note: "",
  });

  // Every time user types in the input field, update the input object
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  // Handle submit button click
  const handleClick = (): void => {
    // If input fields are empty, don't return anything
    if (!input.fname || !input.lname || !input.vzid || !input.age) {
      return;
    }
    // Otherwise update users array with new user object using inputted values
    setUsers([
      ...users,
      {
        fname: input.fname,
        lname: input.lname,
        age: parseInt(input.age),
        vzid: input.vzid,
        note: input.note,
      },
    ]);

    // And reset the input fields to empty
    setInput({
      fname: "",
      lname: "",
      age: "",
      vzid: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="First Name"
        className="AddToList-input"
        value={input.fname}
        onChange={handleChange}
        name="fname" //binds to keys in state
      />
      <input
        type="text"
        placeholder="Last Name"
        className="AddToList-input"
        value={input.lname}
        onChange={handleChange}
        name="lname"
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="VZID"
        className="AddToList-input"
        value={input.vzid}
        onChange={handleChange}
        name="vzid"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
