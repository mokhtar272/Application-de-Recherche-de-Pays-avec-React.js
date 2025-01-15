import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './index.css';

const Affiche = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://restcountries.com/v3.1/all')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok ' + res.statusText);
                }
                return res.json();
            })
            .then(data => {
                const foundCountry = data.countries.find(c => c.alpha2Code === id);
                setCountry(foundCountry);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [id]);

    if (error) {
        return (
            <div className="error-container">
                <div className="error-card">
                    <div className="error-icon">❌</div>
                    <h2>Erreur</h2>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
                <p>Chargement en cours...</p>
            </div>
        );
    }

    if (!country) {
        return (
            <div className="not-found-container">
                <h2>Pays non trouvé</h2>
                <Link to="/" className="back-link">Retourner à la liste</Link>
            </div>
        );
    }

    return (
        <div className="country-page">
            <div className="navigation-bar">
                <Link to="/" className="back-button">
                    <span className="back-arrow">←</span>
                    <span>Retour</span>
                </Link>
            </div>

            <div className="country-card">
                <div className="flag-section">
                    <img 
                        src={country.flags.png} 
                        alt={`Drapeau de ${country.name}`} 
                        className="flag"
                    />
                </div>

                <div className="details-section">
                    <h1 className="country-title">{country.name}</h1>
                    
                    <div className="info-grid">
                        <div className="info-item">
                            <div className="info-label">Population</div>
                            <div className="info-value">{new Intl.NumberFormat().format(country.population)}</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Région</div>
                            <div className="info-value">{country.region}</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Capitale</div>
                            <div className="info-value">{country.capital}</div>
                        </div>
                        <div className="info-item">
                            <div className="info-label">Sous-région</div>
                            <div className="info-value">{country.subregion}</div>
                        </div>
                        <div className="info-item full-width">
                            <div className="info-label">Langues</div>
                            <div className="info-value languages">
                                {country.languages ? 
                                    country.languages.map(lang => (
                                        <span key={lang.name} className="language-tag">
                                            {lang.name}
                                        </span>
                                    )) : 
                                    'N/A'
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiche;