import {FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import './Register.css';
import { useNavigate } from 'react-router-dom';


const initialValues ={firstName:"", lastName:"",email:"",password:"" ,gender:""}
const validationSchema ={email:Yup.string().email("Invalid email").required("Email is required"),
     password:Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")}

function Register() {
    const [gender,setGender] = useState("");
    
    const handleSubmit = (values) => {
      values.gender = gender;	
        console.log("handle submit",values);
    }

    const navigate = useNavigate();

    const handleChange = (event) =>{
      setGender(event.target.value);
    }
  return (
    <>
    <Formik 
    onSubmit={handleSubmit} 
    //validationSchema={validationSchema} 
    initialValues={initialValues}
    >
      <Form className="space-y-5">

        <div className="space-y-5">
        <div>
                <Field 
                as={TextField} 
                name="firstName" 
                placeholder="First Name" 
                type="firstName" 
                variant="outlined" 
                fullWidth
                />
                <ErrorMessage 
                name="firstName"  
                component={"div"} 
                className="text-red-500"
                />
            </div>

            <div>
                <Field 
                as={TextField} 
                name="lastName"  
                placeholder="Last Name"  
                type="lastName"  
                variant="outlined" 
                fullWidth
                />
                <ErrorMessage 
                name="lastName" 
                component={"div"} 
                className="text-red-500"
                />
            </div>
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
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
                <ErrorMessage 
                      name="gender" 
                      component={"div"} 
                      className="text-red-500"
                      />
            </RadioGroup>


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
            Register
        </Button>
      </Form>
    </Formik>

    <div className="flex gap-2 item-center justify-center pt-5">
      <p className="pt-1">if you have an account ?</p>
      <Button onClick={()=>navigate("/login")}>Login</Button>
    </div>
    </>
  )
}

export default Register
