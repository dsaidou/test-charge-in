import { Box, IconButton, Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';``
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const UserActions = () => {

    return(
    <Box>

        <Tooltip title='Edit'>
            <IconButton>
                <EditIcon sx={{color:'rgba(48, 67, 153, 1)'}}/>
            </IconButton>
        </Tooltip>

        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon sx={{color:'rgba(48, 67, 153, 1)'}}/>
            </IconButton>
        </Tooltip>

        <Tooltip title='See more'>
            <IconButton>
                <MoreVertIcon sx={{color:'rgba(48, 67, 153, 1)'}}/>
            </IconButton>
        </Tooltip>

    </Box>
  )
}
