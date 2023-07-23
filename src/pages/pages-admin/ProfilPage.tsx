import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../main";

export default function ProfilPage() {
  const userList = useSelector((state: RootState)=>state.user.value);

  return (
    <Box>
      <h1>profil</h1>
    </Box>
  )
}


