import React, { useState } from "react";

interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    //console.log("com", newTodos[index].complete);
    newTodos[index].complete = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    //console.log("com", newTodos[index].complete);
    newTodos.splice(index, 1); //a=[2,1,2,5,6]   a.splice[1,2]===> [1,5,6]
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <input
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <div
              key={index}
              style={{ textDecoration: todo.complete ? "line-through" : "" }}
            >
              {todo.text}
              {todo.complete}

              <button type="button" onClick={() => completeTodo(index)}>
                {todo.complete ? "Incomplete" : "complete"}
              </button>
              <button type="button" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
