import React, {useReducer} from "react";
import { ReactDOM } from "react";

//defining the initial state
const initialState = {
    message: "hi"
};

// reducer takes in a state and an action. Action will return a new state. It returns the new state through dispatch in the onClick in the button of the UI.
function reducer(state, action) {
    switch (action.type) {
        case "yell":
            return {
                message: `HEY! I JUST SAID ${state.message}`
            };
        case "whisper":
            return {
                message: `Excuse me...I said ${state.message}`
            };
        default:
            console.log("Error or something...")
    };
}

function App() {

    //dispatch will dispatch the action in the reducer (2nd arg)
  const [state, dispatch] = useReducer(reducer, initialState);

  //onClick will dispatch the action type we want. The type is yell or whisper, located in the switch statement of the reducer.
  return (
      <>
         <p>Message: {state.message}</p>
         <button onClick={()=> dispatch({type: "yell"})}>YELL</button>
         <button onClick={()=>dispatch({type: "whisper"})}>whisper...</button>
      </>
  )
}

export default App;