import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="header-main">
            <div className="header-content d-flex flex-column justify-content-center align-content-center text-white text-center">
                <h6 className="p-2">WELCOME TO TRAVEL BD</h6>
                <h1 style={{fontFamily:'Mochiy Pop P One'}}>Explore New Bangladesh <br /> With Us</h1>
                <p className="py-2">Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor</p>
                <a href="#" className="button-style px-5">Book A Tour</a>     
            </div>
        </main>
    );
};

export default HeaderMain;