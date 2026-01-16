import AppHead from "./components/appname";
import AddTask from "./components/addTask";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppHead />
      <AddTask />
    </center>
  );
}

export default App;
