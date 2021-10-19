import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useFetch();
    return (
        <div id='services'>
            <h1 className='mt-5'>Our Services</h1>
            <div className='underline mb-5 mx-auto'></div>
            <div className="row mx-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;