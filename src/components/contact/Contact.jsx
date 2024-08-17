import React, { useState } from 'react'
import img1 from  '../../img/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg'
import '../contact/contact.css'
import { Formik , useFormik} from 'formik';
import axios from 'axios';
export const Contact = () => {
    const formik = useFormik({

        initialValues:
        {
            name: '',
            lastname: '',
            email: '',
            telephone: '',
            message: '',
        },  
            onSubmit: values => {
                console.log(values)
                const [data , setdata] = useState([]);
                setdata(values) 
            },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Your name is Required';
            }
            if (!values.lastname) {
                errors.lastname = 'Your lastname is Required';
            }
            if (!values.telephone) {
                errors.telephone = 'Your phone number is Required';
            }
            if (!values.message) {
                errors.message = 'Your message is Required';
            }

            if (!values.email) {
                errors.email = 'Your email is Required'
            }
            else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }
    })
    return (
        <>
        <div className='contact'>
            <h1>تواصل معنا </h1>
            <div className='con'>
            <form action="" method='post' onSubmit={formik.handleSubmit}>
                <input type="text" name='name' id='fname' placeholder='الاسم الاول ' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <p className='error'>{formik.errors.name}</p> :  null }
                <input type="text" name='lastname' id='fname' placeholder='الاسم الثانى' onChange={formik.handleChange} value={formik.values.lastname} />
                {formik.errors.lastname ? <p className='error'>{formik.errors.lastname}</p> :  null }
                <input type="email" name="email" id="email" placeholder='البريد الألكترونى ' onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <p className='error'>{formik.errors.email}</p> :  null }
                <input type="number" name="telephone" id="phone" placeholder='رقم الهاتف ' onChange={formik.handleChange} value={formik.values.telephone} />
                {formik.errors.telephone ? <p className='error'>{formik.errors.telephone}</p> :  null }
                <textarea name="message" id="message" placeholder='اكتب رسالتك ' onChange={formik.handleChange} value={formik.values.message}  ></textarea>
                {formik.errors.message ? <p className='error'>{formik.errors.message}</p> :  null }
                <input  className='btn' type="submit" name='submit' value="إرسال"  />
            </form>
            <div className='im'>
            <img src={img1} alt="" srcSet={img1} />
            </div>
            </div>
        </div>
        </>
    )
}
