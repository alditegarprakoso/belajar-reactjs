import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
function Todo() {
  const [aktivitas, setAktivitas] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState("");

  useEffect(function () {
    document.title = "ToDo List";
  }, []);

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!aktivitas) {
      return setMessage("Nama aktifitas tidak boleh kosong");
    } else {
      setMessage("");
    }

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        aktivitas,
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);
      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        aktivitas: aktivitas,
        done: false,
      },
    ]);
    setAktivitas("");
  }

  function removeTodoHandler(todoId) {
    setMessage("");
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setMessage("");
    setEdit(todo);
    setAktivitas(todo.aktivitas);
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      id: todo.id,
      aktivitas: todo.aktivitas,
      done: todo.done ? false : true,
    };
    const editTodoIndex = todos.findIndex(function (currentTodos) {
      return currentTodos.id === todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }

  function cancelEditHandler() {
    setMessage("");
    setEdit({});
    setAktivitas("");
  }

  return (
    <section className="section">
      <h1 className="section-title">Simple Todo List</h1>
      {message && message}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Nama aktivitas"
          value={aktivitas}
          onChange={function (event) {
            setAktivitas(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                />
                {todo.aktivitas}({todo.done ? "Selesai" : "Belum Selesai"})
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Tidak ada Todo</i>
        </p>
      )}
    </section>
  );
}

export default Todo;
