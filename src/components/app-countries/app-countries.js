import './app-countries.css';
import { useCountriesService } from '../services/CountriesService.js';
import { useState, useEffect } from 'react';
import RandomCountry from '../random-country/random-country';
import CountriesList from '../countries-list/countries-list';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';

const AppCountries = function () {

    const [country, setCountry] = useState(null);
    const {loading, error, getAllCountries, getRandomCountry, clearError} = useCountriesService();

    useEffect(() => {
        updateCountry();
        const timerId = setInterval(updateCountry, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    const onCountryLoaded = (country) => {
        setCountry(country);
    }

    const updateCountry = () => {
        clearError();
        const id = Math.floor(Math.random() * (249));
        getRandomCountry(id)
            .then(onCountryLoaded);
    }

    return (
        <main className="countries_block">
            
            <section className="random_country_block">
                <ErrorBoundary>
                    <RandomCountry/>
                </ErrorBoundary>
            </section>

            <section className="country_list_block">
                <ErrorBoundary>
                    <CountriesList/>
                </ErrorBoundary>
            </section>
            
            <section className="country_facts_container">
                
            </section>
        </main>
    )
}

export default AppCountries;
