import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {

  
  return (
    <div className="item-Container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
      ;
    </div>
  );
};

export default TodoItems;
