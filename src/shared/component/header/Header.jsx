import React from 'react';
import TopHeader from './component/TopHeader';
import MiddleHeader from './component/MiddleHeader';
import Nav from './component/Nav';

const Header = () => {
    return (
        <div>
           <TopHeader></TopHeader>
           <MiddleHeader></MiddleHeader>
           <Nav></Nav>
        </div>
    );
};

export default Header;