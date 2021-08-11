import React from "react";
import { IState as IProps } from "../App";

// const List = ({ users }: IProps) => {
const List: React.FC<IProps> = ({ users }) => {
  const renderList = (): JSX.Element[] => {
    return users.map((user) => {
      return (
        <li className="List">
          <div className="List-header">
            <h2>
              Name: {user.fname} {user.lname}
            </h2>
          </div>
          <p>VZID: {user.vzid}</p>
          <p>Age: {user.age}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
