import { Box, Button, Grid } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
export default function BtnContainer() {
  const [callToAction] = useState([
    {name:'un installateur', color:true, id: nanoid(), action:true},
    {name:'une étude', color:false, id: nanoid(), action:true},
    {name:'une borne', color:true, id: nanoid(), action:true},
    {name:'un véhicule', color:false, id: nanoid(), action:true},
    {name:'un accessoire', color:true, id: nanoid(), action:true},
    {name:'un objectif', color:false, id: nanoid(), action:true},
  ])


  return (
    <>
    <Box sx={{height:'auto'}} p={4}>

      <h1 id='btn-container'>Actions <p>rapides</p></h1>

      <Grid container spacing={2} columns={{ xs: 8, sm:8,md: 9}} mt={3} width='100%'>
      {callToAction.map((item)=>{
          return(
          <Grid key={item.id}
          item 
          xs={8}  
          sm={4} md={3} spacing={2}>
            <Button variant='contained' size='small'   fullWidth sx={{ padding:1, bgcolor: item.color ? '#304399' : '#369C96', '&:hover':{bgcolor:item.color ? 'rgba(48, 67, 153, 0.9)':'rgba(54, 156, 150, 0.9)'} }}>Ajouter {item.name}</Button></Grid> 
        )})}
      </Grid>

    </Box>
    </>
  
  )
}
