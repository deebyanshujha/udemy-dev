import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = [
    /*"dal", "roti", "fruits", "protein", "paneer"*/
  ];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {items.length === 0 ? <h3>I am still hungry!</h3> : null}
      {
        //method 2:
        items.length === 0 && <h3>I want to eat</h3>
        // A && B
        // ➡️ If A is false, return A
        // ➡️ If A is true, return B
      }
      <ul className="list-group">
        {items.map(
          (
            item, //map is used for coverting ek item ko dusre item mai
          ) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ),
        )}
      </ul>
    </React.Fragment>
  );
}

export default App;
