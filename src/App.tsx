import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

// Use interface to define shape that gets passed to App component
// This state is an array of user objects
export interface IState {
  users: {
    fname: string;
    lname: string;
    age: number;
    vzid: string;
    note?: string;
  }[];
}

function App() {
  const [users, setUsers] = useState<IState["users"]>([
    // Initialize state with these values
    {
      fname: "Jane",
      lname: "Doe",
      age: 30,
      vzid: "doeja",
    },
  ]);

  return (
    <div className="App">
      <h1>Users</h1>
      <List users={users} />
      <AddToList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
