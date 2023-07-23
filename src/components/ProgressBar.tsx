import { CircularProgress } from '@mui/material'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function ProgressBar() {
    const [statistic] =useState([
        { name: '50 partenaires', value: 76, state: 'En cours', id:nanoid()},
        { name: '100 installateurs', value: 45, state: 'En cours', id:nanoid()},
        { name: '200 installations', value: 100, state: 'Complété ', id:nanoid()}
    ])
  return (

    statistic.map((item)=>{
        return(
           <div className="progressBar-container">
                <div className="bar-container" key={item.id}>
                    <p>{item.name}</p>
                    <strong>{item.state}</strong>
                </div>
                <div className="progressBar-content">
                    <p>{item.value} %</p>
                    
                    <CircularProgress variant="determinate"  size={80} value={100}  thickness={7} sx={{
                    color:'#1B2655'}}/>

                    <CircularProgress variant="determinate"  size={80} value={item.value}  thickness={7} sx={{
                        position:'absolute',
                        right: 0, 
                        color: ' #4BD2CA'}}/>
                </div>
            
        </div> 
        )
    })
    
  )
}
