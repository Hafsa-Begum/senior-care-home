import { useEffect, useState } from 'react';

const useFetch = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Hafsa-Begum/servicesFakeData/main/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services];
};

export default useFetch;