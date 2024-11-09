import { useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, status: false }]);
      setNewTodo(''); // Clear input after adding
    }
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => toggleStatus(todo.id)}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i            
                onClick={() => deleteTodo(todo.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>         
        ))}
        {todos
          .filter((todo) => todo.status)
          .map((todo) => (
            <h1 key={todo.id}>{todo.text}</h1>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
