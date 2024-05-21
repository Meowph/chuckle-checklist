import { useState, useEffect } from "react"
import "./App.css"
import { addNewJoke, getAllJokes } from "./services/jokeService.jsx"
import stevePic from "./assets/steve.png"


export const App = () => {
  //Storing user's input with new state variable 
  const [newJoke, setNewJoke] = useState(" ")
  const [allJokes, setAllJokes] = useState([ ])
  const [untoldJokes, setUntoldJokes] = useState([ ])
  const [toldJokes, setToldJokes] = useState([ ])

  //First, let's get all of our jokes from the database and store them in state
  const getAndSetAllJokes = () => {
    getAllJokes().then((jokesArray) =>
      setAllJokes(jokesArray))
  }

  useEffect (() => {
    getAndSetAllJokes()
  }, [])

  //This is what is shown on webpage (HTML)
  return ( 

    <div className="app-container">
    <div className="app-heading">
      <img className="app-logo" src={stevePic} alt="Good Job Steve"/>
      <h1 className="app-heading-text">Chuckle Checklist</h1>
      <h2 className="add-joke-text">Add Joke</h2>
    </div>


  <input
  className="joke-input-submit"
  type="text"
  placeholder="New One Liner"
  value={newJoke}
  onChange={(event) => {
    // What's the value of event?
    setNewJoke(event.target.value)
    console.log(newJoke)
  }}
/>

<button className="new-joke-btn" 
onClick={() => {addNewJoke(
  {text: newJoke,
   told: false
   }
   )}}>Submit Thy Funniest Jokes!</button>
  </div>
  )
}