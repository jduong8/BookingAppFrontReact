import './App.css'
import {useState, useEffect} from 'react';


function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
  // fetch
  fetch("http://localhost:3000/api/products/all", {
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
  console.log(data)
  setProducts(data)
})
}, []);

  return (
    <>
      <h1>Simplon - Frontend</h1>
      <ul className='productContainer'>
        {products.map((product) => {
          return (
            <li className='product' key={product.id}>
              <div>Category : {product.category}</div>
              <div>Name : {product.name}</div>
              <div>Description : {product.description}</div>
              <div>Price : {product.price}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

function AppP() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA0MjQ0OTYsImV4cCI6MTcxMDQyODA5Nn0.rFpsKQ5CqYoIBLiZpBdrSNVC5_009e2cC77Y4JELeRw";

  useEffect(() => {
    // fetch
    fetch("http://localhost:3000/api/reservations", {
      method: "GET",
      headers: {
        "Authorization" : token,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setReservations(data)
    })
}, []);

  return (
    <>
      <h1>Simplon - Frontend</h1>
      <p className="paragraph">1ere partie</p>
      <ul>
        {reservations.map((r) => {
          return (
            <li key={r.id}>
              <div>Nombre de clients : {r.number_of_customers}</div>
              <div>Reservé par : {r.reservation_name}</div>
              <div>Note : {r.reservation_note}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App