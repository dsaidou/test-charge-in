import { useState } from 'react'
import './Homepage.css'
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import { Box, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardStat from '../../components/CardStat';

import BtnContainer from '../../components/BtnContainer';
import Dashboard from '../../components/Dashboard';
import HeaderProfil from './HeaderProfil';

export default function Homepage() {
  const [inputValue, setInputvalue] = useState('Cette année');



  const handleChange = (e : SelectChangeEvent)=>{
    setInputvalue(e.target.value)
  }


  return (
    <>   
      <section>

        <HeaderProfil/>

        <main className='main-homepage'>
          <div className="top-main">
              <BoltSharpIcon
              fontSize='large'
              sx={{color:'#369C96'}}
              />
              <h1>Tableau de bord</h1>
          </div>
            
          <Dashboard/>
          <Box width='100%'>
            <div className="top-statistic">
                <h1> Statistiques de <strong>Charge-in</strong></h1>
                  <Select 
                IconComponent={() => (
                  <ExpandMoreIcon sx={{color: '#FFFFFF',cursor:'pointer', border:'#000000'}}/>)}
                disableUnderline
                variant='standard'
                defaultValue={'Cette année'}
                onChange={handleChange}
                sx={{
                  color:'#FFFFFF',
                  fontSize:'small',
                  width: 'fit-content',
                  background:'linear-gradient( to right bottom, #4BD2CA 0%, #369C96 100%)',
                  p:1,
                  borderRadius: '8px',
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  fontFamily: 'chivo',
                  height:'max-content',
                  m:0
                }}
                >
                  <MenuItem value={'Cette année'}> Cette année</MenuItem>
                  <MenuItem value={'30 derniers jours'}> 30 derniers jours</MenuItem>
                  <MenuItem value={'Mois de juin'}> Mois de juin</MenuItem>
                  <MenuItem value={'6 derniers mois'}> 6 derniers mois</MenuItem>
                  <MenuItem value={'30 derniers mois'}> 30 derniers mois</MenuItem>
                </Select>
                
              </div>

              <Box sx={{height:'auto'}}>

                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm:6,md: 10}} p={6}>
                  <CardStat/>
                </Grid>
                
              </Box>

              <BtnContainer/>
          </Box>


          </main>


      </section>
    </>
    
  )
}

