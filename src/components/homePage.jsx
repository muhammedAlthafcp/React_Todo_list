import { useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(''); // Clear input after adding
    }
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
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <div className="left">
              <input type="checkbox" />
              <p>{todo}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
