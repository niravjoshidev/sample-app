import React from 'react'
import {useFormik} from 'formik'
import * as  Yup from 'yup'

export default function FormikForm() {

    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }
    const onSubmit = values => {
        console.log('formdata : ', values.name, ' ', values.email, ' ', values.channel);
    }

    const validate = values => {
        let errors = {};
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        }
        return errors;
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
        email: Yup.string().email('invalid email address').required('email is required'),
        channel: Yup.string().required('channel is required').min(5, 'minimum character should enter')
    })

    
    const fmFormik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    });

   
    //console.log('visitted : ', fmFormik.touched);
  return (
      <div className='container my-3'>
          <div className="row">
              <form action="" onSubmit={fmFormik.handleSubmit}>
                  <div className='form-group'>
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className='form-control' id='name' name='name' onBlur={fmFormik.handleBlur} onChange={fmFormik.handleChange} value={fmFormik.values.name} />
                      {fmFormik.touched.name && fmFormik.errors.name ? <div className='text-danger'>{fmFormik.errors.name}</div> : null}
                  </div>

                  <div className='form-group'>
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" id='email' className='form-control' name='email' onBlur={fmFormik.handleBlur}  onChange={fmFormik.handleChange} value={fmFormik.values.email} />
                      {fmFormik.touched.email &&  fmFormik.errors.email ? <div className='text-danger'>{fmFormik.errors.email}</div> : null}
                  </div>

                  <div className='form-group'>
                      <label htmlFor="channel" className="form-label">Channel</label>
                      <input type="text" id='channel' className='form-control' name='channel' onBlur={fmFormik.handleBlur}  onChange={fmFormik.handleChange} value={fmFormik.values.channel} />
                      {fmFormik.touched.channel &&  fmFormik.errors.channel ? <div className='text-danger'>{fmFormik.errors.channel}</div> : null}
                  </div>
                  <div className='mb-3 my-3'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                  </div>
              </form>
          </div>
      </div>
  )
}
