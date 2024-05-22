import React from 'react'
import { Link } from 'react-router-dom'

export const SimpleLayout = ({children}) => {
  return (
    <div>
      <header>
        <h1>Simple Layout</h1>
      </header>
      <main>
        <div style={{
            display: 'flex',
        
        }}>

        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/about/contact-us">Contact Us</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            </ul>
        </nav>
        {children}
        </div>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}
