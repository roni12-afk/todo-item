import React, { useState } from "react";
import AddTodo from "./component/AddTodo";
import Appname from "./component/Appname";
import TodoItems from "./component/TodoItems";
import WelcomeMessge from "./component/WelcomeMessge";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName}, due on ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoitemName) => {
    console.log(`item deleted${todoitemName}`);
  };

  return (
    <center className="todo-Container">
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessge />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
};

export default App;
