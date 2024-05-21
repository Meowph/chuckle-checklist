//This fetches jokes from api with link + res.json
export const addNewJoke = async (jokeObject) => {
 
 //this posts the jokes to the app/webpage/HTML
const postOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObject)
    }
    await fetch(`http://localhost:8088/jokes`, postOptions)
  }

  export const getAllJokes = () => {
    return fetch (`http://localhost:8088/jokes`)
  }