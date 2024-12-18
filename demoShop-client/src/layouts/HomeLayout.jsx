import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import BottomUser from '../components/BottomUser';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RecentProducts from '../components/RecentProducts';
import SportsCategory from '../components/SportsCategory';
import Testimonial from '../components/Testimonial';

const HomeLayout = () => {
  const { equipments, popular, testimonials, category } = useLoaderData();

  // Light And Dark Mode Settings
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  //
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | EquiSports</title>
      </Helmet>
      <header className='sticky top-0 z-[999]'>
        <Header toggleTheme={toggleTheme} theme={theme}/>
      </header>
      <main>
        <Hero />
        <RecentProducts equipments={equipments} topSlogan="Our Shop" title="New Arrivals" />
        <AboutUs />
        <RecentProducts equipments={popular} topSlogan="Best Seller" title="Popular Gears" />
        <Testimonial testimonials={testimonials} topSlogan="Customer Satisfaction" title="Top Reviews" />
        <SportsCategory equipments={popular} topSlogan="Sports Gallery" title="Sports Category" category={category} />
        <GetInTouch />
      </main>
      <footer>
        <Footer />
      </footer>
      <section className='display sticky bottom-0 z-[999] lg:hidden md:hidden'>
        <BottomUser toggleTheme={toggleTheme} theme={theme} />
      </section>
    </HelmetProvider>
  );
};

export default HomeLayout;
