export const getAllJokes = () => {
  return fetch('http://localhost:8088/jokes').then((res) => res.json())
};
 
export const newJokePosted = async (taco) => { //taco is a default param
  const postOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(taco) //that becomes an argument here

}
}