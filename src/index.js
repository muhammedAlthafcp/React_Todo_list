import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
