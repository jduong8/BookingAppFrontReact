import './App.css'

function App() {

  // fetch
  fetch("http://localhost:3000/api/products/all", {
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => console.log(data))

  return (
    <>
      <h1>Simplon - Frontend</h1>
    </>
  )
}

export default App