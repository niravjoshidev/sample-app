import React from 'react'

export const Todo = ({item, onDelete}) => {
  return (
    <>
      <div>
        <h4>{item.Name}</h4>
        <p>{item.Designation}</p>
        <button className='btn btn-sm btn-danger' onClick={(() => onDelete(item))} >Delete</button>
      </div>
      <hr />
    </>
  )
}
