import React from 'react'
import navigationMenu from './SidebarNavigation';
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material';
import AvatarImage from '../../Assets/avatar.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className='card h-screen flex-col justify-between py-5'>
      <div className='space-y-8 pl-5'>
        <div className=''>
          <span className='logo font-bold text-xl'>Scrollify</span>
        </div>

        <div className='space-y-6'>
          {navigationMenu.map((item) => <div className='flex space-x-3 items-center'>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>)}
        </div>

      </div>

      <div>
        <Divider/>
      </div>

      <div className="pl-5 flex items-center justify-between pt-5">
        <div className='flex items-center space-x-3'>

          <Avatar src={AvatarImage}/>
            <div>
              <p className='font-bold'>Dhanuka</p>
              <p className='opacity-70'>@dhanuka</p>

            </div>

            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

        </div>
      </div>
      
    </Card>
  )
}

export default Sidebar;