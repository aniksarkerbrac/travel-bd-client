import React from 'react';
import AppStore from '../AppStore/AppStore';
import FixedBottom from '../FixedBottom/FixedBottom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurFeatures from '../OurFeatures/OurFeatures';
import Reviews from '../Reviews/Reviews';
import TourPackage from '../TourPackage/TourPackage';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurFeatures></OurFeatures>
            <TourPackage></TourPackage>
            <Reviews></Reviews>
            <AppStore></AppStore>
            <Footer></Footer>
            <FixedBottom></FixedBottom>
        </div>
    );
};

export default Home;