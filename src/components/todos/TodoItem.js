import React from "react";
import { Table, Badge, Button } from "react-bootstrap";
import { BsFillTrashFill, BsFillCheckSquareFill } from "react-icons/bs";
function TodoItem({ todo, dispatch }) {
  return (
    <div>
      <div className="col-md-5 mx-auto">
        <Table responsive>
          <tbody>
            <tr>
              <td className="bg-white border">
                <div className="mt-1" style={{ float: "left", display: "flex" }}>
                  <input className="mt-2 mx-2" type="checkbox" onChange={() => dispatch({ type: "flip", payload: { id: todo.id } })} />
                  <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>{todo.text}</span>
                  <Badge className="mt-1 mx-2" pill color={todo.complete ? "danger" : "success"}>
                    {todo.complete ? "Completed" : "On Going"}
                    Progress
                  </Badge>
                </div>
                <div style={{ float: "right", display: "flex" }}>
                  <Button size="sm" variant="success" onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}>
                    <BsFillCheckSquareFill />
                  </Button>
                  <Button size="sm" variant="danger" className="mx-1" onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}>
                    <BsFillTrashFill />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default TodoItem;
