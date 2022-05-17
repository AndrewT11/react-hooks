import React, {useState, useEffect} from "react";
import { ReactDOM } from "react";

//We will be using useState and useEffect to draw information through a fetch call

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  //above we make the response.json() become setData. setData useState makes all the json data from the fetch the current data. Thus we can use the if statement, passing in data as true, to generate the li components if we have data. If not data, we will return the paragraph tag stating "No Users"
  if(data) {
    return (
      <>
        <ul style={{listStyleType:"none"}}>
          {data.map((user) => (
            <li key={user.id} style={{border:"1px solid black",width:110}}>
             {user.login}<br></br>
              <img src={user.avatar_url} alt="Avatar" height="90" />
              </li>                  
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </>
    )
  }

  return (
   <p>No Users</p>
  )
}

export default App;