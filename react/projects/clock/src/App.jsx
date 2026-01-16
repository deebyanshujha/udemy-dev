import Header from "./components/header";
import Para from "./components/para";
import CurrTime from "./components/currTime";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Para></Para>
      <CurrTime></CurrTime>
    </div>
  );
}

export default App;
