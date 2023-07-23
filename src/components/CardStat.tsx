import PersonIcon from '@mui/icons-material/Person';
import PieChartIcon from '@mui/icons-material/PieChart';
import FolderIcon from '@mui/icons-material/Folder';
import PowerIcon from '@mui/icons-material/Power';
import GroupIcon from '@mui/icons-material/Group';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './CardStat.css'
import { Box, Grid } from '@mui/material';
export default function CardStat() {
    const [yearStat, setYearstat] = useState([
        {name:'Installateurs partenaires inscrits', icon:<PersonIcon sx={{color:'#369C96'}}/>, count:78, percentage:2, value:false, id:nanoid()},
        {name:'Abonnements en cours', icon:<PieChartIcon sx={{color:'#369C96'}}/>, count:261, percentage:2, subTitle:"Nombre d'abonnements", subCount:22, value: false, id:nanoid()},
        {name:'Devis réalisés', icon:<FolderIcon  sx={{color:'#369C96'}}/>, count:105, percentage:2,subCount1:'##',subCount2:'##', value: false, id:nanoid()},
        {name:'Points de charge', icon:<PowerIcon  sx={{color:'#369C96'}}/>, count:450, percentage:18, subCount1:'##',subCount2:'##', value:true,  id:nanoid()},
        {name:'Points de charge supervisés', icon:<GroupIcon  sx={{color:'#369C96'}}/>, count:432, percentage:18, subCount1:'##',subCount2:'##', value:true,  id:nanoid()},
        {name:'Taux de conversion', icon:<ChangeCircleIcon  sx={{color:'#369C96'}}/>, count:78, percentage:2, subCount1:'##',subCount2:'##', value:false,  id:nanoid()},
        {name:"Chiffre d'affaires", icon:<AttachMoneyIcon  sx={{color:'#369C96'}}/>, count:26100, percentage:6, subCount1:12000, subCount2: 22045, value:false,  id:nanoid()},
    ]

    )
  return (
   yearStat.map((item)=>{
    return(

        <Grid item xs={6} sm={2} md={2} spacing={{ xs: 2, md: 4 }} m={2} p={2} sx={{fontSize:'small', width:'100%'}}className='card-container'key={item.id}>

            <div className="top-card">
                {item.icon}
                <p>{item.name}</p>
            </div>

            <div className="bottom-card">
                <p>{item.subTitle}</p>
                <div className="number-container">
                    <h1>{item.count}<small>HT</small></h1>
                    
                    <p id={item.value ? 'positive'  :'negative'}><KeyboardArrowDownIcon className={item.value ? 'icon-positive'  :'icon-negative'} />{item.percentage}%</p>
                </div>

                {item.subCount1 && item.subCount2 !== '' ? 
                <div className="more-container">
                    <h3>B2C</h3>
                    {(typeof item.subCount1 )=== 'number'? <p>{item.subCount1} € HT</p> : <p>##</p>}
                    <h3>B2B</h3>
                    {(typeof item.subCount2 )=== 'number'? <p>{item.subCount2} € HT</p> : <p>##</p>}
                </div> : null}
            </div>
       
        </Grid>
    )
   })
  )
}
