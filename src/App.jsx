import React, { useState } from "react";
import AddTodo from "./component/AddTodo";
import Appname from "./component/Appname";
import TodoItems from "./component/TodoItems";
import WelcomeMessge from "./component/WelcomeMessge";

const App = () => {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "29/05/25",
    },
    {
      name: "Go to College",
      dueDate: "29/05/25",
    },
    {
      name: "Buy Milk",
      dueDate: "20/06/25",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName}, due on ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-Container">
      <Appname />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessge />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
