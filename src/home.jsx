import { useState, useEffect } from "react";
import Sr from "./search";
import Cnt from "./cn";

const Home = () => {
    const [cat, setCat] = useState('');
    const [sear, setSear] = useState('');
    const [countries, setCountries] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                if (!Array.isArray(data)) {
                    throw new Error('Invalid data structure');
                }
                setCountries(data);
            })
            .catch(error => {
                setError(error);
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            {error && <div>Error: {error.message}</div>}
            <Sr sear={sear} setSear={setSear} setCat={setCat} />
            {countries && <Cnt countries={countries} sear={sear} setSear={setSear} cat={cat} />}
        </div>
    );
};

export default Home;
