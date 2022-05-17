import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


// **  useState use as a button to change state from not delivered to delivered in browser **/

function App() {
  const [status, setStatus] = useState("Not Delivered");
  return (
  <div>
    <h1>The package is: {status}</h1>
    <button onClick={() => setStatus("Delivered")}>Deliver</button>
  </div>
  )
}

export default App;
