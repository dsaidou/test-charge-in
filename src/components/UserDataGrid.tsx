import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarFilterButton, GridToolbarQuickFilter} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../main';
import { UserActions } from './UserActions';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { frFR } from '@mui/material/locale';
import { useState } from 'react';

const columns: GridColDef[] = [
  { field: 'lastname', headerName: 'Nom', headerClassName: 'grid-header', flex:1, headerAlign: 'left', align:'left' },
  { field: 'Borne',  headerName: 'Borne choisie', headerClassName: 'grid-header', flex:1, headerAlign: 'center', align:'center'},
  { field: 'Devis', headerName: 'Devis', headerClassName: 'grid-header', flex:1, headerAlign: 'center', align:'center'},
  { field: 'Etape', headerName: 'Etape',  headerClassName: 'grid-header', flex:1, headerAlign: 'center', align:'center'},
  { field: 'id', headerName: 'id', headerClassName: 'grid-header', flex:1, headerAlign: 'center', align:'center'},
  { field: 'actions', headerName: 'Actions', headerClassName: 'grid-header', width:150, headerAlign: 'right', align:'right', renderCell: ()=>( <UserActions/>)},
];


export default function UserDataGrid() {
  const userList = useSelector((state: RootState)=>state.user.value);
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    frFR,
  );

  const CustomToolbar =()=>{
    return(
      <GridToolbarContainer sx={{mx:2, my:1}}>
      <GridToolbarQuickFilter sx={{border:1, borderColor:'#E5E5E5', borderRadius: '8px', color:'#E5E5E5', p:0.5}}/>
      <GridToolbarFilterButton/>
      </GridToolbarContainer>
    )
  }

  const [columnVisibilityModel] = useState({
      id: false,
    });

    

  return (
    <Box sx={{
      '& .grid-header': {
        color: '#8FA2A2', px:3
      },
      px:1
    }}>

    <ThemeProvider theme={theme}>

        <DataGrid editMode='cell' rows={userList} columns={columns} sx={{fontWeight:600, fontFamily: 'Chivo', bgcolor:'#FFFFFF', borderRadius:'16px', width:'100%'}}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      slots={{
        toolbar: CustomToolbar,
      }}
      pageSizeOptions={[5, 10, 25]}
      columnVisibilityModel={columnVisibilityModel}
      />
      
    </ThemeProvider>

    </Box>
  )
}
