import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Route, Routes, useLocation} from "react-router-dom"
import Middlepart from '../../Components/Middlepart';
import Sidebar from '../../Components/Sidebar';
import Reels from '../../Components/Reels/Reels';
import CreateReelsForm from '../../Components/Reels/CreateReelsForm';
import Profile from '../Profile/Profile';
import HomeRight from '../../Components/HomeRight/HomeRight';

function HomePage() {
  const location=useLocation();
  return (
    <div className='px-20'>
      <Grid container spacing={0}>

        <Grid item xs={0} lg={3}>

          <div className='sticky top-0'>
            
            <Sidebar/>

          </div>

        </Grid>

        <Grid lg={location.pathname==="/"?6:9} item className='px-5 flex justify-center' xs={12}>

        <Routes>
          <Route path="/" element={<Middlepart/>}></Route>
          <Route path="/reels" element={<Reels/>}></Route>
          <Route path="/create-reels" element={<CreateReelsForm/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>


        </Routes>

        </Grid>

        <Grid item lg={3} className='relative'>
          <div className='sticky top-0 w-full'>

            <HomeRight/>

          </div>
        </Grid>

      </Grid>
      
    </div>
  )
}

export default HomePage
