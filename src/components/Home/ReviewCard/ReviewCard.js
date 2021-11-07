import React from 'react';
import './ReviewCard.css';

const ReviewCard = (props) => {
    const { review, img, name, designation } = props.review;
    return (
        <div className="col-md-4">
            <div className="review p-4">{review}</div>
            <div class="arrow-down ms-4"></div>
            <div className="d-flex reviewer my-4 ms-2">
                <img src={img} alt=""/>
                <div className="ms-3">
                    <h6>{name}</h6>
                    <small>{designation}</small>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;