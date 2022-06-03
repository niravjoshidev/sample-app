import React,{useState} from 'react'

export default function Form(props) {
  
    const [nameState, setNameState] = useState("");
    const [jobState, setJobState] = useState("");

    // const handleChange = (event) => {
    //     const {name, value} = event.target
    //     setState({
    //         [name]:value
    //     })
    // }

    const submitFormData =() =>{
      
        props.handleSubmit({name:nameState,job:jobState});
        setNameState("");
        setJobState("");
    }
  return (
        <div className="container my-3">
            <form action="">
                <div className="form-group">
                    <label  htmlFor="name">Name</label>   
                    <input type="text" className='form-control' name="name"  id="name" value={nameState} onChange={(e) => setNameState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>   
                    <input type="text" name="job" className='form-control'  id="job" value={jobState} onChange={(e) => setJobState(e.target.value)} />
                </div>
                <div className="my-3">
                    <button className="btn btn-primary" type='button' onClick={submitFormData}>Submit</button>
                </div>
            </form>
        </div>
    )
}
