import { Button, Stack } from '@mui/material';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Dashboard() {
    const [trimestre, setTrimestre] = useState([
        {name:'1er trimestre', id: nanoid()}, 
        {name:'2ème trimestre', id: nanoid()}, 
        {name:'3ème trimestre', id: nanoid()}, 
        {name:'Année 2023', id: nanoid()}
    ])
  return (
    <div className="dashboard">
      <div className="top-dashboard">
        <h1>Objectif de <strong>Charge-in</strong></h1>

        <Stack direction={{xs:'column', sm:'column', md:'row'}} ml={{ xs: 0, sm:0,md: 4}} spacing={2} sx={{height:'80%'}}>
          {trimestre.map((item)=>{
              return(
                  <Button variant='contained' size='small' 
                  sx={{'&:hover':{background:'linear-gradient( to right, #4BD2CA, #369C96 95%)', color: '#FFFFFF'}, padding:1}}>
                      {item.name}</Button>
              )
          })}
        </Stack>
      </div>
      
      <Stack width='100%' direction={{xs:'column', sm:'column', md:'row'}}justifyContent='space-between'my={{ xs:1, sm:2, md:2 }} mt={{ xs:10, sm:10, md:1 }}>
        <ProgressBar/>
      </Stack>
  </div>
  )
}
