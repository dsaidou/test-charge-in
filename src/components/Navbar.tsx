import { NavLink, NavLink as RouterLink} from "react-router-dom"
import Logo from '/logo.svg'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import NavItem from "./NavItem";
import'./Navbar.css';
import { useState } from "react";
import { IconButton, Link } from "@mui/material";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav>
      
      <Link component={RouterLink} to='/' className='nav-top'sx={{ display:{xs:'none', sm:'none', md:'inline-block'}}}>
         <img src={Logo} alt="Charge-in logo" />
      </Link>

      <div className="nav-container">

        <div className={ isActive ? "link-visible setActive" : 'link-visible'} onClick={()=>{setIsActive(!isActive)}}>
            <IconButton component={NavLink} to={'/Homepage'} sx={{p:0}}>
              <SpaceDashboardOutlinedIcon style={{color:'#FFFFFF'}}/>
            </IconButton>

            <Link  component={RouterLink} 
            sx={{ display:{xs:'none', sm:'none', md:'inline-block'}, textDecoration: 'none'}}
            to ='/Homepage'>Accueil</Link>
        </div>

        <NavItem/>

      </div>
    </nav>
  )
}
