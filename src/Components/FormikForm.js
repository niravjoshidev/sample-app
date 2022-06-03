import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as  Yup from 'yup'

export default function FormikForm() {

    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments:'',
        address:''
    }
    const onSubmit = values => {
        console.log('formdata : ', values.name, ' ', values.email, ' ', values.channel);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
        email: Yup.string().email('invalid email address').required('email is required'),
        channel: Yup.string().required('channel is required').min(5, 'minimum character should enter'),
        address:Yup.string().required('Address is required')
    })

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div className='container my-3'>
                <div className="row">
                    <Form>
                        <div className='form-group'>
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" className='form-control' id='name' name='name' />
                            <ErrorMessage name='name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="text" id='email' className='form-control' name='email' />
                            <ErrorMessage name='email' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="channel" className="form-label">Channel</label>
                            <Field type="text" id='channel' className='form-control' name='channel' />
                            <ErrorMessage name='channel' />

                        </div>

                        <div className='form-group'>
                            <label htmlFor="comments" className="form-label">Comments</label>
                            <Field as='textarea'  id='comments' className='form-control' name='comments' />
                        </div>

                        {/* below fields render using render props method */}
                        <div className='form-group'>
                            <label htmlFor="address" className="form-label">Address</label>
                            <Field name='address'>
                                {
                                    (props) => {
                                        console.log(props);
                                        const { field, form, meta } = props
                                        return (
                                            <>
                                                <input type="text" className='form-control' id="address" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </>
                                        )

                                    }
                                }
                            </Field>
                        </div>

                        <div className='mb-3 my-3'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
  )
}
