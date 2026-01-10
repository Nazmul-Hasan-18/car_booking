import React from 'react';
import Header from './shared/component/header/Header';
import { Outlet } from 'react-router';
import Footer from './shared/component/footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;