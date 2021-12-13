import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTodo, setFilteredTodo] = useState([todoList]);

  // const onInput = (e) => {
  //   setTodo(e.target.value);
  // };

  const addTodoBtn = () => {
    if (todo !== "") {
      const todoDetails = {
        id: Math.floor(Math.random() * 1000),
        value: todo,
        isCompleted: false,
      };
      // setTodoList([...todoList, todoDetails])
      setTodoList((state) => [...state, todoDetails]);
    }
    setTodo("");
  };

  const deleteTodo = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      setFilteredTodo(todoList);
    } else {
      setFilteredTodo(
        todoList.filter((t) => {
          return t.value.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, todoList]);

  const handleEdit = (val) => {
    alert(val.value);
    console.log(todo);
    setTodo(val.value);
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          name="todo"
          placeholder="add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={(e) => addTodoBtn(e)}>Add</button>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={onSearch}
        />
        <p>{search}</p>
      </div>
      <div>
        {filteredTodo !== [] ? (
          <ul>
            {filteredTodo.map((t) => (
              <li>
                {t.value}
                <button onClick={(e) => handleEdit(t)}>edit</button>
                <button>completed</button>
                <button onClick={(e) => deleteTodo(e, t.id)}>delete</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Todo;
