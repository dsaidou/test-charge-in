import { Box, Button, Container, Grid } from '@mui/material';
import './Maisons.css';
import UserDataGrid from '../../components/UserDataGrid';
import HeaderProfil from './HeaderProfil';
import HomeIcon from '@mui/icons-material/Home';

export default function Maisons() {
  return (
    <> 
    <section>
      <HeaderProfil/>

      <Box display='flex'>
        
        <Grid container spacing={1} columns={{ xs: 2, sm:6, md: 4}} p={3}>

          <Grid item xs={2} sm={2} md={2} p={1} display='flex' alignItems='center'>
            <HomeIcon sx={{mr:2, color:'rgba(54, 156, 150, 1)'}}/>
            <h1 id='title-maisonpage'>Maisons</h1>
          </Grid> 

          <Grid item sm={4}md={2} display='flex' alignItems='center' justifyContent='end'>
            <Button variant='contained' size='small' sx={{'&:hover':{bgcolor:'rgba(54, 156, 150, 0.9)'}, bgcolor:'#369C96', mr:1, padding:1, fontSize:'0.75em'}}>
              Ajouter un utilisateur
            </Button>
            <Button variant='contained' size='small' sx={{'&:hover':{bgcolor:'rgba(169, 68, 66, 0.9)'},bgcolor:'#A94442', padding:1, fontSize:'0.75em'}}>
              Supprimer un utilisateur
            </Button>
          </Grid> 
      </Grid>

      </Box>
 
      <Container>
        <UserDataGrid/>
      </Container>

    </section>
  </>
  )
}
