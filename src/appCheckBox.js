import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

//** checkbox example having <p> tag generate if the box is checked or not */

// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//   <div>
//     <input type="checkbox" value="checked" onChange={() => setChecked((checked) => !checked)} />
//     <p>{checked ? "checked" : "not checked"}</p>
//   </div>
//   )
// }

//useReducer instead of use state to minimize what can go wrong.
//toggle is the first function of reducer. checked is initial state, which is set to false in reducer. The first param in userReduer, the function, merely reverses what checked is.
// function App() {
//   const [number, newNumber] = useReducer((number, newNumber) => number + newNumber, 0)
//   return <h1 onClick={()=>newNumber(1)}>{number}
//   </h1>
// }


function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
  <div>
    <input type="checkbox" value="checked" onChange={toggle} />
    <p>{checked ? "checked" : "not checked"}</p>
  </div>
  )
}

export default App;