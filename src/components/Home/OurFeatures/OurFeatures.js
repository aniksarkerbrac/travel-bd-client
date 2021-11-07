import React from 'react';
import OurFeature from '../OurFeature/OurFeature';

const OurFeatures = () => {
    const fakeFeatures =[
        { 
            number: '1M+',
            name: 'Active Users',
            description: 'Join our worldwide community and travel'
        },
        {
            number: '100+',
            name: 'Travel Complete',
            description: 'Join our worldwide community and travel'
        },
        {
            number: '24/7',
            name: 'User Support',
            description: 'Join our worldwide community and travel'
        }
    ]
    return (
        <section className="features my-5">
            <div className="text-center">
                <h6 style={{ color: '#ffce3e' }}>OUR FEATURES</h6>
                <h2>Why We Are The Best?</h2>
                <div className="d-flex flex-column justify-content-center ">
                    {
                        fakeFeatures.map(feature => <OurFeature feature={feature}></OurFeature>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;