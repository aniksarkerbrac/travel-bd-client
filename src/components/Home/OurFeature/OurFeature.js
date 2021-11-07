import React from 'react';

const OurFeature = (props) => {
    const { number, name, description } = props.feature;
    const splitedNumber = number.split('');
    const numStyle = {
        backgroundColor: '#098342',
        padding: '2px',
        margin: '4px',
        fontSize: '80px',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '10px',
        width: '100px'
    }
    return (
        <div className="text-center mt-5 mb-3">
            <div className="d-flex justify-content-center mb-3">
                {
                    splitedNumber.map(num => <div style={ numStyle }>{num}</div>
                    )
                }
            </div>
            <h3>{name}</h3>
            <p className="text-muted">{description}</p>
        </div>
    );
};

export default OurFeature;