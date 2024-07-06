import sampleImage from '../../Assets/scrollify.jpg'
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import React from 'react'
import { Card } from '@material-ui/core';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

function Authentication() {
  return (
    <div>
      
      <Grid container>
        <Grid className ='h-screen overflow-hidden' item xs={7}>
            <img className='h-screen w-full' src={sampleImage} alt="sample  for login page" />
        </Grid>
        <Grid item xs={5}>

            <div className='px-20 flex flex-col justify-center h-full'>
                <Card className='card p-8'>
                    <div className='flex flex-col items-center mb-5 space-y-1'>
                       <h1 className='log text-center font-bold text-2xl text-sky-500'>Scrollify</h1> 
                       <p className='text-center text-sm w-[70&] font-sans'>Endless Scrolls, Infinite Connections</p>
                    </div>

                    <Routes>
                      <Route path='/' element={<Login/>}></Route>
                      <Route path='/login' element={<Login/>}></Route>
                      <Route path='/register' element={<Register/>}></Route>
                    </Routes>

                </Card>

            </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Authentication
