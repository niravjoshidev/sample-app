import React, { useState } from 'react'

export const AddEmployee = ({insertEmployee}) => {

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
        if (!name || !designation) {
            alert('value can not be blank')
        }else{
            insertEmployee(name,designation);
            setName("");
            setDesignation("")
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add Employee</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor='empName' className="form-label">Name</label>
                    <input type="empName" className="form-control" value={name} id="empName" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="empDesignation" className="form-label">Designation</label>
                    <input type="empDesignation" className="form-control" value={designation} id="empDesignation" onChange={(e) => setDesignation(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Employee</button>
            </form>
        </div>

    )
}
