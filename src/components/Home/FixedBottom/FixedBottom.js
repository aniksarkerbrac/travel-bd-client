import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const FixedBottom = () => {
    return (
        <section style={{backgroundColor: '#ffce3e'}} className="fixed-bottom p-3 d-flex justify-content-around align-items-center">
            <div>
                <h1 style={{color: '#098342', fontWeight: 'bold', fontSize:'30px',fontFamily:'Irish Grover, cursive'}}>travel-BD</h1>
                <FontAwesomeIcon className="mx-1" icon={faStar} />
                <FontAwesomeIcon className="mx-1" icon={faStar} />
                <FontAwesomeIcon className="mx-1" icon={faStar} />
                <FontAwesomeIcon className="mx-1" icon={faStar} />
                <FontAwesomeIcon className="mx-1" icon={faStar} />
            </div>
            <div>
                <button style={{ backgroundColor: 'black',color: 'white',borderRadius:'20px'}} className="btn px-5">Install Now</button>
            </div>
        </section>
    );
};

export default FixedBottom;