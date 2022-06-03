import './App.css';
import Header from '../src/Components/Header';
import {AddEmployee} from './Components/AddEmployee';
 import  {Todos}  from './Components/Todos';
import {Footer}  from './Components/Footer';
import {AboutUs} from './Components/AboutUs'
import Contactus from './Components/Contactus';
import Table from './Components/Table';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Form from './Components/Form';
import UserForm from './Components/UserForm';
import PersonList from './Components/PersonList';
import PersonAdd from './Components/PersonAdd';
import DataTable from './Components/DataTable';
import FormikForm from './Components/FormikForm';

function App() {
  let initTodos;
  if(localStorage.getItem('todos')===null){
    initTodos=[];
  } 
  else{
    initTodos = JSON.parse(localStorage.getItem('todos'))
  } 

  const onDelete = (todo) =>{
    console.log('Delete Record of Employee :', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const addEmployee = (name, designation) => {
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos[todos.length - 1].Id + 1;
    }
    console.log('Add Employee ', name, designation);
    const todo = {
      Id: id,
      Name: name,
      Designation: designation
    }
    setTodos([...todos, todo]);
    console.log('My EMployee ', todo);
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])

  const [characterSet, setCharacterSet] = useState([])
  
  const submitJobData = (character) =>{
    setCharacterSet([...characterSet,character]);
  }

  const removeCharacter = (index) => {
    setCharacterSet(characterSet.filter((character, i) => {
      return i !== index;
    }))

  }

  return (
    <>
      <Router>
        <Header title="Sample App" isSerachBarShow={false} />
        <Routes>
          <Route exact path="/" element={
              <><AddEmployee insertEmployee={addEmployee} /><Todos todos={todos} onDeleteFunc={onDelete} /></>
            }>
          </Route>
          <Route exact path="/about" element={<AboutUs />}>
            
          </Route>
          <Route exact path="/contact" element={<Contactus />}>
          </Route>
          <Route exact path="/table" element={
            <>
              <div className='container'>
                <Table characterData={characterSet} removeCharacterFunc={removeCharacter} />
                <hr />
                <Form handleSubmit={submitJobData} />
              </div>
            </>
          }>
          </Route>
          <Route exact path="/userForm" element={<UserForm />}>
          </Route>
          <Route exact path="/persons" element={<><PersonAdd /><PersonList /> </>}>
          </Route>
          <Route exact path="/datatable" element={<DataTable />}>
          </Route>
          <Route exact path="/formikform" element={<FormikForm />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
