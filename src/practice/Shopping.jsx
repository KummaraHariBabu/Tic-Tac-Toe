import React from 'react'

const Shopping = (props,ar) => {
  return (
    <div className="shopping-list">
        <h1>Shopping list for the {props.name}</h1>
        <ul>
            <li>{ar.arr[1]} Insta</li>
            <li>{ar.arr[2]}FB</li>
            <li>{ar.arr[3]}YouTube</li>
        </ul>
    </div>
   )
}

export default Shopping