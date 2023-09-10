import './app-countries.css';
import { useCountriesService } from '../services/CountriesService.js';
import { useState, useEffect } from 'react';
import RandomCountry from '../random-country/random-country';

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

    // console.log(`State is ${country}`)

    return (
        <main className="countries_block">
            
            <section className="random_country">
                <RandomCountry/> 
            </section>

            <section className="country_list_container">
                Тут контейнер для списка стран
            </section>
            
            <section className="country_facts_container">
                Тут контейнер для фактов
            </section>
        </main>
    )
}

export default AppCountries;
