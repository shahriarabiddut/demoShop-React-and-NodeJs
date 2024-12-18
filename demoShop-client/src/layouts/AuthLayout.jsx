import React, { useContext, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AuthContext } from '../provider/AuthProvider';

const AuthLayout = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        if( user!=null && user?.email){
            navigate(location?.state ? location.state : '/');
        }
        // console.log('Loaded')
    },[user]);
    
    return (
        <HelmetProvider >
            <header className='sticky top-0 z-[999]'>
                <Header/>
            </header>
            <main className='py-10'>
                {user!=null ?<Loading/>:<Outlet/> }
                </main> 
            <Footer/>
        </HelmetProvider>
    );
};

export default AuthLayout;