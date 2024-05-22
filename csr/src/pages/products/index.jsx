import React, { useEffect, useState } from 'react'
import { SimpleLayout } from '../../layouts/SimpleLayout'
import { getProducts } from '../../services/products.api'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        })
    
      return () => {
        
      }
    }, [])

    console.log({products})
    

  return (
    <SimpleLayout>
        <h2>Products</h2>
        <ul>
            {
                products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.title} style={{
                            width: '100px',
                            height: '100px',
                        
                        }}/>
                    </li>
                ))
            }
        </ul>
    </SimpleLayout>
  )
}

export default Products