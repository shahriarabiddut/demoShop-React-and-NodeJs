import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { HelmetProvider } from 'react-helmet-async';
import BottomUser from '../components/BottomUser'
import PrivateRoute from '../provider/PrivateRoute';

const UserLayout = () => {
    
    return (
        <PrivateRoute>
        <HelmetProvider>
            <header className='sticky top-0 z-[999]'>
                <Header/>
            </header>
            <main className='py-10'><Outlet></Outlet></main> 
            <footer><Footer/></footer>
            <section className='display sticky bottom-0 z-[999] lg:hidden md:hidden'>
                <BottomUser/>
            </section>
        </HelmetProvider>
        </PrivateRoute>
    );
};

export default UserLayout;