// in mainlayout, whatever page we r on is gonna come through outlet
// used in parent route element(mainlayout here), allowing nested ui to showup when  child routes are rendered

// if we want to have some components always in everypage, we include them in the layout like here, its navbar 
//  the reason for setting taostify in the main layout was that it could be used anywhere
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar'
const MainLayout = ()=>{
    return (
        <>
        <Navbar />
        <Outlet />  
        <ToastContainer />
    </>
    )
}
export default MainLayout