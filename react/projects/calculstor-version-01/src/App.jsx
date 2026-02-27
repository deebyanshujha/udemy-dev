import "./App.css";
import Display from "./components/display";
import BtnSection from "./components/btn_container";
function App() {
  return (
    <div className="main">
      <div className="container">
        <h1 id="heading">Calculator</h1>
        <Display id="display"></Display>
        <BtnSection></BtnSection>
      </div>
    </div>
    
  );
}

export default App;
