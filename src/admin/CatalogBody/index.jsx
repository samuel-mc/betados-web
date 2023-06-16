import React from 'react'

const Body = ({title, children}) => {
  return (
    <>
        <h1>{title}</h1>
        {children}
    </>
  )
}

export default Body