import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
const [productList, setProductList] = useState([])

useEffect(() => {
  window.fetch('/api/avo')
  .then(response => response.json())
  .then(({data, length}) => {
    setProductList(data)
  })
}, [])

  return (
    <div>
        <Navbar/>
        <h1>Hola Platzi!</h1>
        <br/>
        {productList.map(product => (
          <ul>
            <li>{product.name} <img src={product.image}></img></li>
          </ul>
        ))}
    </div>
  )
}

export default Home

