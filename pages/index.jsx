import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout'

const HomePage = () => {
const [productList, setProductList] = useState([])

useEffect(() => {
  window.fetch('/api/avo')
  .then(response => response.json())
  .then(({data, length}) => {
    setProductList(data)
  })
}, [])

  return (
    <Layout>
       <div>
        <h1>Products!</h1>
        {productList.map(product => (
          <ul>
            <li>{product.name}</li>
          </ul>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage

