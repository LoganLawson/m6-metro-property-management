import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Quick Sort Demo</h1>
        <Link to='/Logan'> <h2>Logan</h2>  </Link>
        <Link to='/Brandon'> <h2>Brandon</h2>  </Link>
        <Link to='/Ranju'> <h2>Ranju</h2> </Link>
    </div> 
  )
}

export default Home