import React from 'react'
import "../styles/error.css"

function Error({error}) {
  return (
    <div className='error-data'>{error}</div>
  )
}

export default Error