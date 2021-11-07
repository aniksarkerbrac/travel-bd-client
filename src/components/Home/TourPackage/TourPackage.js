import React from 'react';
import TourPackageCard from '../TourPackageCard/TourPackageCard';
import cox from '../../../images/cox-inani-beach-lead.jpg';
import bandarban from '../../../images/bandarban.jpg';
import sajek from '../../../images/sajekvally.jpg';

const fakedata = [
    {
        title: 'Coxs Bazar Beach',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: cox,
        location: 'chittagong',
        price: '5000',
        days: '5',
        date: 'September 10,2021'
    },
    {
        title: 'Bandarban Bangladesh',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: bandarban,
        location: 'chittagong',
        price: '6000',
        days: '5',
        date: 'September 10,2021'
    },
    {
        title: 'Sajek Vally',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: sajek,
        location: 'chittagong',
        price: '8000',
        days: '5',
        date: 'September 10,2021'
    }
]

const TourPackage = () => {
    return (
        <section style={{backgroundColor: '#FCFAF5'}} className="tour-package my-5 py-5">
            <div className="text-center">
                <h6 style={{ color: '#ffce3e' }}>FEATURED TOUR</h6>
                <h2>Popular Tour Package</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75">
                    {
                        fakedata.map(data => <TourPackageCard package={data}></TourPackageCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default TourPackage;