import './index.scss'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header'



function Layout() {
    
    return (
        <div className='layout'>
            <Header/>
            <div className='App'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;