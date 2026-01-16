import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = ["dal", "roti", "fruits", "protein", "paneer"];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className ="list-group">
        {items.map((item) => ( //map is used for coverting ek item ko dusre item mai
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
