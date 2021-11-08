import React from 'react';
import appStore from '../../../images/appStore.svg'

const AppStore = () => {
    return (
        <section className="text-center my-5 py-5">
            <h1 style={{color: '#098342', fontWeight: 'bold', fontSize:'30px',fontFamily:'Irish Grover, cursive'}}>travel-BD</h1>
            <h2 className="my-4">TravelBd is here to help you <br/> to reach your destination</h2>
            <p className="mb-5">Travel, improve your mind and body health,<br/> boost productivity, keep up with the latest<br/> trends and much more with just one app</p>
            <img href="#" src={appStore} alt=""></img>
        </section>
    );
};

export default AppStore;