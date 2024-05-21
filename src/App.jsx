import { useState } from "react"
import "./App.css"
import { getAllJokes, newJokePosted} from "./services/jokeService.jsx"


export const App = () => {
  //Storing user's input with new state variable 
  const [joke, setNewJoke] = useState(false)
  const [newJoke, setNewPostedJoke] = useState(" ") //Currently empty due to needing space for new joke 


  return ( 
    <div
    method="POST">
  <div>
    <h1>Chuckle Checklist</h1>
    </div>


  <input
  className="joke-input"
  type="text"
  placeholder="New One Liner"
  onChange={(event) => {
    // What's the value of event?
    const inputValue = event.target.value
    console.log(inputValue)
  }}
/>

<button className="new-joke-btn" 
onClick={() => {setNewJoke(false)}}>
  Got a funny one?
  </button>

</div>
  )
}