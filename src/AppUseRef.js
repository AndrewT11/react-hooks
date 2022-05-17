import React, {useRef} from "react";
import { ReactDOM } from "react";



function App() {

  // useRef() is set to a variable. Then, that variable is used as a reference in an input area or maybe a form tag or some type. Now we can get the innerText by inserting "ref={refVariable}" into a form element <input>
 const sound = useRef()
 const color = useRef()

 const submit = (e) => {
     e.preventDefault();

     // these ___Val variables hold the input values. We can call these input values later in logs, alerts, returns, send to database.
     const soundVal = sound.current.value;
     const colorVal = color.current.value;
     alert(`${soundVal} sounds like ${colorVal}`)
     sound.current.value = "";
     color.current.value = "";

 }

 // ref = { useRef() variable defined above }
  return (
      <>
        <form onSubmit={submit}>
            <input ref={sound} type="text" placeholder="Sound..."/>
            <input ref={color} type="color"/>
            <button>ADD</button>
        </form>
      </>
  )
}

export default App;