import NotificationsIcon from '@mui/icons-material/Notifications';
import { nanoid } from 'nanoid'
import { useState } from 'react';

export default function HeaderProfil() {
    const [mainUser] = useState({
        name: 'Prénom',
        lastName: 'Nom',
        username: 'P',
        id: nanoid()
      })

    
  return (
    <>
    <div className='header-homepage'>
    
    <div className="content-header">
      <p>Bonjour, <strong>{mainUser.name} {mainUser.lastName}</strong> </p>
      <div className="notification-container">
        <NotificationsIcon
       sx={{
        fontSize: '1.5em',
        color: '#AFB2B6',
        position:'absolute'
      }}/>
      <div className='notification-circle'>1</div>
      </div>

      <div className='profil'>
        {mainUser.username}
      </div>
    </div>

    </div>
    <hr />
    </>
  )
}
