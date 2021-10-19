import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const SingleService = () => {
    const { serviceId } = useParams();
    const [services] = useFetch();

    const selectedService = services.find(service => service.id === +serviceId);
    return (
        <div className='w-50 mx-auto my-5'>
            <div>
                <div>
                    <img className='w-100' src={selectedService?.image} alt="" />
                </div>
                <h1>{selectedService?.name}</h1>
                <p>{selectedService?.description}</p>
                <h2>Pay: $ {selectedService?.price}</h2>
                <Link to='/home'>
                    <button className="btn btn-regular">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;