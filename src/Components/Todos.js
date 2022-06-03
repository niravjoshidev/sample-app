import React, { Suspense } from 'react'
import {Todo} from './Todo'

//Lazy loading component
// const Todo = React.lazy(() => import('./Todo'))

export const Todos = (props) => {
  const listPanel ={
    minHeight:'70vh',
    margin:'10px auto'
  }
  return (
    <div className='container my-3' style={listPanel}>
      <h3 className='text-center'>Employee List</h3>
      {
        props.todos.length === 0 ? "No Employee found" : 
        props.todos.map((obj) => {
          return (
             <Todo item={obj} key={obj.Id} onDelete={props.onDeleteFunc} /> 
            
            //Lazy loading component
            // <Suspense fallback={<div>...loading</div>}>
            //   <Todo />
            // </Suspense>
          )
        })  
      }
      
    </div>
  )
}
