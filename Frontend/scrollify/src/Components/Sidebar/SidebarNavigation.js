import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navigationMenu = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    },

    {
        title:"Reels",
        icon:<ExploreIcon/>,
        path:"/"
    },

    {
        title:"Create Reels",
        icon:<ControlPointIcon/>,
        path:"/"
    },
    {
        title:"Notifications",
        icon:<NotificationsIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/"
    },
    {
        title:"Lists",
        icon:<ListIcon/>,
        path:"/"
    },
    {
        title:"Communities",
        icon:<GroupsIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/"
    },

]

export default navigationMenu;