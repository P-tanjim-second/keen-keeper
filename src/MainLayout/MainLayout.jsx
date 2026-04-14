import React from 'react';
import Navbar from '../Component/Sheared/Navbar/Navbar';
import Footer from '../Component/Sheared/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="font-['Geist']">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;