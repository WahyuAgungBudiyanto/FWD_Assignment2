import React, { useState, useReducer } from "react";
import TodoItem from "./TodoItem";

import { Form, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo":
      return [...todos, addTodo(action.payload.text)];
    case "flip":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "add-todo", payload: { text: text } });
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="container-fluid col-md-5 shadow mx-auto p-3 bg-white rounded">
          <InputGroup>
            <InputGroup.Text>
              <FcPlus />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="What's your working on?" value={text} onChange={(event) => setText(event.target.value)} required />
            <Button className="mx-2" style={{ height: "auto", width: "auto" }} variant="primary" type="Submit">
              Add
            </Button>{" "}
          </InputGroup>

          <div className="pt-3" style={{ display: "flex", marginLeft: "auto" }}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-primary active">All</Button>
              <Button variant="outline-primary">On Going</Button>
              <Button variant="outline-primary">Completed</Button>
            </ButtonGroup>
          </div>
        </div>
      </form>

      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default Todos;
