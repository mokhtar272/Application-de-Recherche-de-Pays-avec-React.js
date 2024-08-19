import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Affiche = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8001/countries/')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                const foundCountry = data.find(c => c.alpha2Code === id);
                setCountry(foundCountry);
            })
            .catch(error => {
                setError(error);
            });
    }, [id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <div className='aff'>
    <div className='btn'>
        <Link to="/"><button className='bt'>Back</button></Link>
    </div>
    <div className='contenaire'>
        <div className="iimg">
            <img src={country.flags.png} alt={`Flag of ${country.name}`} />
        </div>
        <div className="par1">
            <div className="p1">
                <h3>{country.name}</h3>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Population:</span> {country.region}</p>
                <p><span>Population:</span>{country.population}</p>
                <p><span>Population:</span> {country.region}</p>
            </div>
            <div className="p2">
                <p><span>Population:</span> {country.population}</p>
                <p><span>Population:</span> {country.region}</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Affiche;
