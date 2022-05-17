import React, {useState} from "react";
import { ReactDOM } from "react";

// Much like useRef, this is using useState to reference a value for later. We are literally using the current state.

function App() {
 const [sound, setSound] = useState("");
 const [color, setColor] = useState("#000000")

 const submit = (e) => {
     e.preventDefault();

     alert(`${sound} sounds like ${color}`)
     
     setSound("");
     setColor("#000000");


 }
// notice value in input. This is needed to so that once the submit button is pushed, the value in that variable is sent to server.
  return (
      <>
        <form onSubmit={submit}>
            <input value={sound} type="text"  onChange={(e) => setSound(e.target.value)}/>
            <input value={color} type="color" onChange={(e)=> setColor(e.target.value)}/>
            <button>ADD</button>
        </form>
      </>
  )
}