import React from 'react';
import './TourPackageCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faCalendarWeek,faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const TourPackageCard = (props) => {
    const { title, description, img, price, location,days, date } = props.package;
    return (
        <div className="col-md-4">
            <div class="style-card card p-2 m-3" style={{ width: '18rem' }}>
                {/* <img src={img} style={{ height: '200px' }} class="card-img-top" alt="..."/> */}
                <div style={{backgroundImage:`url(${img})`,height: '200px',backgroundSize:'cover'}}>
                    <p class="btn price-style m-2">TK {price}/Person</p>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-style">Book Now</a>
                </div>
                <small className="d-flex justify-content-around mt-3">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</p>
                    <p><FontAwesomeIcon icon={faCalendarWeek} /> {date}</p>
                </small>
            </div>
        </div>
    );
};

export default TourPackageCard;