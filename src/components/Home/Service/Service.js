import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, image, description } = service;

    const url = `/service/${id}`;

    return (
        <div className='col-md-4 col-sm-6  col-12 pt-3 mb-5 service'>
            <div className='mx-3'>
                <div>
                    <img style={{ height: "310px" }} className='w-100 rounded-3' src={image} alt="" />
                </div>
                <h1>{name}</h1>
                <p>{description.slice(0, 100)}</p>
                <Link to={url}>
                    <button className="btn btn-primary">See Details</button>
                </Link>
            </div>

        </div>
    );
};

export default Service;