import React, { Component } from 'react'
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {

    let checkValidation = false;
    let errorArr =[];
    Object.values(error).forEach(val => {
        if (val.length > 0) {
            errorArr.push(val)
        } 
    });

    let isError = !(errorArr.length > 0);
    return isError;
    //console.log(checkValidation);
    // Object.values(rest).forEach(val => {
    //     //console.log('rest : ' + val);
    //     if (val === null) {
    //         checkValidation = false
    //     } else {
    //         checkValidation = true
    //     }
    // });
    //return checkValidation;
}

export class UserForm extends Component {
    constructor(props){
        super(props);

        this.state ={
            name:'',
            email:'',
            password:'',
            error:{
                name:'',
                email:'',
                password:''
            }

        }
    }
    formObject = event =>{
        event.preventDefault();
        const {name,value} = event.target;
        //console.log(`name : ${name} value ${value}`);
        let error = { ...this.state.error };

        switch (name){
            case 'name':
                error.name = value.length < 5 ? 'Name should be longer than 5 characters' : '';
                break;
            case 'email':
                error.email = regularExpression.test(value) ? '' : 'Email is not valid';
                break;
            case 'password':
                error.password = value.length < 5 ? 'Password should be longer than 5 character':'';
                break;
        }  

        this.setState({
            error,
            [name]:value
        })

    }
    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log('success');
            console.log(this.state);
        } else {
            console.log('error');
        }

        // if (validation(this.state)) {
        //     console.log()
        // } else {
        //     console.log("Error occured");
        // }
    }

  render() {
      const { error } = this.state;
    return (
      <div className="container mb-5">
          <div className="card mt-5">
                <form action="" className="card-body" onSubmit={this.onFormSubmit}>
                    <div className="form-group mb-3">
                        <label className="mb-2"><strong>Name</strong></label>
                        <input required autoComplete="off"
                            type="text"
                            className={error.name.length > 0 ? 'is-invalid form-control' : 'form-control'}
                            name='name' 
                            onChange={this.formObject} />
                        {error.name.length > 0 && <span className="invalid-feedback">{error.name}</span>}                            
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2"><strong>Email</strong></label>
                        <input required autoComplete="off"
                            type="email"
                            className={error.email.length > 0 ? 'is-invalid form-control' : 'form-control'}
                            name='email'
                            onChange={this.formObject} />
                            {error.email.length > 0 && <span className="invalid-feedback">{error.email}</span>} 
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2"><strong>Password</strong></label>
                        <input required autoComplete="off"
                            type="password"
                            className={error.password.length > 0 ? 'is-invalid form-control' : 'form-control'}
                            name='password'
                            onChange={this.formObject} />
                            {error.password.length > 0 && <span className="invalid-feedback">{error.password}</span>} 
                    </div>
                    <div className="d-grid mt-3">
                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                    </div>
              </form>
          </div>
      </div>
    )
  }
}

export default UserForm
