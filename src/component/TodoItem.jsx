import React from "react";

const TodoItem = () => {
  const todoname = "buy milk";
  const duedate = "20.12.25";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">{todoname}</div>
        <div class="col-4">{duedate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
