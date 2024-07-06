import {TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"

const initialValues ={email:"",password:""}
const validationSchema ={email:Yup.string().email("Invalid email").required("Email is required"),
     password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")}
function Login() {
    const [formValue,setFormValue] = useState();
    
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log("handle submit",values)
    }
  return (
    <>
    <Formik 
    onSubmit={handleSubmit} 
    //validationSchema={validationSchema} 
    initialValues={initialValues}
    >
      <Form className="space-y-5 ">

        <div className="space-y-5">
            
        <div>
                <Field 
                as={TextField} 
                name="email" 
                placeholder="Email" 
                type="email" 
                variant="outlined" 
                fullWidth
                
                />
                <ErrorMessage 
                name="email" 
                component={"div"} 
                className="text-red-500"
                />
            </div>

            <div>
                <Field 
                as={TextField} 
                name="password" 
                placeholder="Password" 
                type="password" 
                variant="outlined" 
                fullWidth
                />
                <ErrorMessage 
                name="password" 
                component={"div"} 
                className="text-red-500"
                />
            </div>


        </div>

        <Button
            sx={{
                padding: ".8rem 0rem",
                color: '#ffffff',
                backgroundColor: '#2597fa', 
                '&:hover': {
                backgroundColor: '#1788eb', 
                },
            
            }}
            fullWidth
            type="submit"
            variant="contained"
            >
            Login
        </Button>
      </Form>
    </Formik>
    <div className="flex gap-2 item-center justify-center pt-5">
      <p className="pt-1">if you don't have account ?</p>
      <Button onClick={()=>navigate("/register")}>Register</Button>
    </div>
    </>
  )
}

export default Login
