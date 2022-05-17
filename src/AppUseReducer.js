import React, {useReducer} from "react";
import { ReactDOM } from "react";

//We will be using useState and useEffect to draw information through a fetch call

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return (
      <>
         <h1 onClick={() => setNumber(1)}>{number}</h1>
      </>
  )
}

export default App;