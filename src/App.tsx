import Login from './pages/Login'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from 'react-router-dom'
import Homepage from './pages/pages-admin/Homepage'
import Maisons from './pages/pages-admin/Maisons'
import Validation from './components/Validation'
import ProfilPage from './pages/pages-admin/ProfilPage'

export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route element={<Layout/>}>
      <Route  path='/' element={<Login/>}/>
      <Route element={<Validation/>}>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/Maisons' element={<Maisons/>}/>
        <Route path='/Maisons/ProfilPage/:id' element={<ProfilPage/>}/>
        <Route path='/Appartement' element={<Maisons/>}/>
        <Route path='/Etudes' element={<Maisons/>}/>

        <Route path='/CEO & Admins' element={<Homepage/>}/>
        <Route path='/Project Managers' element={<Homepage/>}/>
        <Route path='/Installateurs' element={<Homepage/>}/>
        <Route path='/Client B2C' element={<Homepage/>}/>

        <Route path='/Bornes' element={<Homepage/>}/>
        <Route path='/Vehicules' element={<Homepage/>}/>
        <Route path='/Accessoires' element={<Homepage/>}/>
        <Route path='/Objectifs' element={<Homepage/>}/>
      </Route>
     </Route>
    ))
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}
const Layout = ()=>{
  return(
     <>
    <Outlet/>
    </>
  )
}
 