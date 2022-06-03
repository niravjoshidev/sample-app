import axios from 'axios';
import React, {useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const columns = [
    {
        name: 'name',
        selector: row => row.name,
        sortable:true
    },
    {
        name: 'email',
        selector: row => row.email,
        sortable:true
    },
    {
        name: 'phone',
        selector: row => row.phone,
        sortable:true
    },
    {
        name: 'Address',
        selector: row => (
             `${row.address.street}, ${row.address.city}, ${row.address.zipcode}`
        ),
        sortable:true
    },
    {
        name: 'website',
        selector: row => row.phone,
        sortable:true
    },
];


export default function DataTableTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = () =>{
        const userObj = axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const result = res.data;
            setUsers(result);
        });   
    }
    useEffect(()=>{
        fetchUsers();
    },[])   

  return (
    <DataTable columns={columns} 
    data={users}
    expandableRows expandableRowsComponent={ExpandedComponent}
    selectableRows 
    pagination />
  )
}
