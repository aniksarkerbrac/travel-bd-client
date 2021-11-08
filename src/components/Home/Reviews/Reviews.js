import React from 'react';
import img from '../../../images/wilson.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const testimonialData = [
        {
            review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
            img: img,
            name: 'Fahim Abrar',
            designation: 'Vlogger'
        },
        {
            review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
            img: img,
            name: 'Nadir Mustakim',
            designation: 'Traveler'
        },
        {
            review: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
            img: img,
            name: 'Siam Ahmed',
            designation: 'Photographer'
        }
    ]
    return (
        <section className="testimonial my-5">
            <div className="text-center">
                <h6 style={{ color: '#ffce3e' }}>TESTIMONIAL</h6>
                <h2>What They Say</h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">
                    {
                        testimonialData.map(data => <ReviewCard review={data}></ReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;