import Logo from '/logo.svg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

interface errorType {
  mail:string,
  password: string
}

function Login() {
  const [isHidden, setIsHidden] = useState(true);
  const [values, setvalues] = useState({mail: '', password: ''});
  const [isSubmit, setIsSubmit] = useState(true);
  const [errors, setErrors] = useState< errorType>({ mail : '', password:''});
  
  const navigate = useNavigate()

  const handleChange = (event: any )=>{
    setvalues({...values, [event.target.name] : event.target.values,})
  };

  const handleSubmit = (event: any )=>{
    event.preventDefault();
    setIsSubmit(true);
    console.log(isSubmit)

    if(isSubmit){
      navigate('/Homepage')
    }
    

  };

  return (
    <>
      <header className='header-login'>
        <button className="link">
            <ChevronLeftIcon style={{color:'#369C96', cursor:'pointer'}}/>
            <a href="#">Retour vers la page d'acceuil</a>
        </button>
        <img src={Logo} alt="Charge-in logo" />

      </header>
      <main className='main-login'>
        <div className="form-container">
        <div className="header-form">
          <h1>Se connecter</h1>
          <LoginIcon style={{color:'#369C96'}}/>
        </div>
        <p>Entrez vos identifiants pour accéder à votre espace personnel.</p>
        <form action="">
          <div className="wrapper">
            <label htmlFor="mail">Adresse mail</label>
            <input type="mail" 
            placeholder='adresse@mail.com'
            name='mail' 
            value ={values.mail}
            onChange={()=>{handleChange(event)}}/>
            {errors.mail && <p className='error'>{errors.mail}</p>}
          </div>

          <div className="wrapper">
            <label htmlFor="password">Mot de passe</label>
            <div className="input-container">
              <input 
              type={isHidden ? "password" : 'text' }
              placeholder='******' 
              value ={values.password}
              name='password'
              onChange={()=>{handleChange(event)}}
              id='password'/>
            <IconButton size='small' style={{transform: 'translateY(-0.2em)'}}onClick={()=>{setIsHidden(!isHidden)}}> {isHidden ? 
             <VisibilityIcon style={{fontSize:'0.9em'}} /> :
             <VisibilityOffIcon style={{fontSize:'0.9em'}}/>
              } 
            </IconButton>
            {errors.password && <p className='error'>{errors.password}</p>}
            </div>
          </div>
          <div className="form-options">
          <label htmlFor="checkbox">
            <Checkbox defaultChecked size='small' style={{color:'#304399', transform:'translateY(-0.1em)'}}/>
            Se souvenir de moi
          </label>
            
            <a href="#">Mot de passe oublié ?</a>
          </div>
        </form>
        <button type='submit' onClick={()=>{handleSubmit(event)}}>Se connecter</button>
      </div>
      </main>

      
    </>
  )
}

export default Login;
