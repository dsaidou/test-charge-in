import '../index.css'
// const validation = (values: { mail: string; password: any; })=> {
//     let errors: {mail: string; password: string} = {
//         mail: "",
//         password: ""
//     };

//     // if(!values.mail){
//     //     errors.mail = 'Email required.';
//     // }else if(!/\S+@\S+\.\S+/.test(values.mail)){
//     //     errors.mail ='Email invalid.'
//     // }
//     // if(!values.password){
//     //     errors.password = 'Password is required'
//     // } else if(values.password.length < 5){
//     //     errors.password ='Password must be more than 5 caracters.'
//     // }
//     // console.log(values.mail)
    
//     return errors;
// }
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Validation = ()=>{
    let auth = {token: true}

      if(auth.token === true){
        return(
          <Root/>
        )
      }  
}

const Root = ()=>{
    return(
       <>
       <div className="base">
        <Navbar/>
        <Outlet/>
       </div>
      
      </>
    )
   
} 

export default Validation;