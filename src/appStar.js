import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from "react-icons/fa";


//** takes in length (how many stars you want) and returns an array of length of what you wanted
const createArray = (length) => [ ...Array(length)]
 
//the actual stars and what they will do when selected. Setup up onClick to run function onSelect.
function Star({ selected = false, onSelect}) {
  return (
    <FaStar color={selected ? "red" : "grey"}
    onClick={onSelect}
    />
  )
}

//how use state will be used. We create an array using map. That array will have as many stars as we passed into totalStars. Default is 5. When we click on a star, onSelect will use useState to have setSelectedStars equal the index number of the star + 1. That will be the new selected stars number. In the paragraph tag, setSelectedStars sets selectedStars number of totalStars that was passed into StarRating function. 5 is default.

function StarRating({totalStars = 5}) {
    const [selectedStars, setSelectedStars] = useState(0);
  
    return (
    <>
    {createArray(totalStars).map((n, i) => (
      <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}/>
    ))}
    <p>
      {selectedStars} of {totalStars}
    </p>
    </>
    )
  }
  
  function App() {
    return (
      <StarRating totalStars={5}/>
    )
  } 

export default App;
