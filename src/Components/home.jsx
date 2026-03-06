import React from 'react';
import NavbarComponent from './navbar';
import HomeBodyComponent from './homeBody';
import FooterComponent from './footer';

const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <HomeBodyComponent/>
            <FooterComponent/>
        </div>
    )
};

export default Home;