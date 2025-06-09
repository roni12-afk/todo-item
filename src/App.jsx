import React from "react";
import Appname from "./component/Appname";
import AddTodo from "./component/AddTodo";

const App = () => {
  return (
    <center>
      <Appname />
      <AddTodo />
      <div class="container text-center">
        <div class="row">
          <div class="col-4">Buy milk</div>
          <div class="col-4">20.12.25</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default App;
