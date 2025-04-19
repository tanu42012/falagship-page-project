import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
       <>
       <Navbar></Navbar>
       <div className=' min-h-[calc(100vh-116px)]'>
       <div className='max-w-screen-2xl mx-auto px-8 md:p-12 lg:p-16 xl:p-24'>
       <Outlet></Outlet>
       </div>
       </div>
       <Footer></Footer>
     
       </>
    );
};

export default MainLayout;