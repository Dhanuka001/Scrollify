import { Avatar } from '@material-ui/core'
import React from 'react'
import AvatarImage from '../../Assets/avatar.png';

const StoryCircle = () => {
  return (
    <div>
         <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
        sx={{width:"5rem" , height:"5rem"}}
         src={AvatarImage}  className='flex flex-col items-center mr-4 cursor-pointer'
         >
          
         </Avatar>
         <p>Dhanuka</p>
        </div>
    </div>
  )
}

export default StoryCircle
