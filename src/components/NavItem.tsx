import { NavLink } from "react-router-dom"
import { nanoid } from 'nanoid'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import PersonOutlinedSharpIcon from '@mui/icons-material/PersonOutlined';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useState } from "react";
import { IconButton } from "@mui/material";

export default function NavItem() {
  const [category, setCategory] = useState([
    {name:'opportunités', id: nanoid(), 
        subcategory: [
            {name: 'Maisons', id: nanoid(), active: false, toggle: true, page1: 'Encours', page2: 'Archive', icon:<HomeOutlinedIcon style={{color:'#FFFFFF'}}/>},
            
            {name: 'Appartement', id: nanoid(), active: false, toggle: true, icon:<ApartmentOutlinedIcon style={{color:'#FFFFFF'}}/> },
            
            {name: 'Etudes', id: nanoid(), active: false, toggle: true, icon:<HomeWorkOutlinedIcon style={{color:'#FFFFFF'}}/>}]},

    {name:'utilisateurs', id: nanoid(),  
        subcategory: [
            {name: 'CEO & Admins', id: nanoid(), active: false, toggle: false, icon:<SecurityOutlinedIcon style={{color:'#FFFFFF'}}/>},

            {name: 'Project Managers', id: nanoid(), active: false, toggle: false, icon:<PersonOutlinedSharpIcon style={{color:'#FFFFFF'}}/> },

            {name: 'Installateurs', id: nanoid(), active: false, toggle: false, icon:<PersonOutlinedSharpIcon style={{color:'#FFFFFF'}}/> },

            {name: 'Client B2C', id: nanoid(), active: false, toggle: false, icon:<PersonOutlinedSharpIcon style={{color:'#FFFFFF'}}/>}]},

    {name:'données', id: nanoid(), 
        subcategory: [
            {name: 'Bornes', id: nanoid(), active: false, toggle: false, icon:<BoltSharpIcon style={{color:'#FFFFFF'}}/> },

            {name: 'Vehicules',id: nanoid(), active: false, toggle: false, icon:<DirectionsCarOutlinedIcon style={{color:'#FFFFFF'}}/> },

            {name: 'Accessoires', id: nanoid(), active: false, toggle: false, icon:<ConstructionOutlinedIcon style={{color:'#FFFFFF'}}/> },

            {name: 'Objectifs', id: nanoid(), active: false, toggle: false, icon:<AssignmentTurnedInOutlinedIcon style={{color:'#FFFFFF'}}/> }]},
  ])

  const handleToggle = (id :string)=>{
    const categoryCopy = [...category];
     categoryCopy.map((current)=> {
  
        current.subcategory.map((currentItem)=>{
         if(currentItem.id === id){
          currentItem.active = !currentItem.active
         }
      })
    })

    setCategory(categoryCopy)
  }

  return (
    category.map((item)=>{ 
      return(

        <div className="link-container" key={item.id}>
          <h2>{item.name}</h2>
          
          {item.subcategory.map((item)=>{
                console.log(item)
            return(
              <div key={item.id}>
                <div className={item.active? "link-visible setActive" : 'link-visible'}  
                onClick = {()=>{handleToggle(item.id)}}>
                  <IconButton component={NavLink} to={`/${item.name}`} sx={{p:0, margin:'0'}}>
                    {item.icon}
                  </IconButton>
                  

                  {item.toggle ? 

                  <>
                  <h1>{item.name}</h1>
                  <IconButton sx={{display:{xs:'none', sm:'none', md:'inline-block'}, p:0}}>
                    <AddOutlinedIcon 
                  style={{color:'#FFFFFF', fontSize: '1em'}}/>
                  </IconButton>
                  </> 
                  : <NavLink className='text-link' to={`/${item.name}`}> {item.name}</NavLink>}

                </div>

                {item.toggle && item.active ?
                <div className="link-toggle" key={nanoid()}>
                  <NavLink to={`/${item.name}`}>En cours</NavLink>
                  <NavLink to ='/Homepage'>Archivés</NavLink>
                </div> : null }

              </div>
            
          )
          })}
          
        </div>)
    })

  )
}
