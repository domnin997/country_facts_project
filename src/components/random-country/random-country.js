import './random-country.css';
import { useCountriesService } from '../services/CountriesService.js';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner';

const RandomCountry = () => {

    const [country, setCountry] = useState(null);
    const {getRandomCountry, loading, error, clearError} = useCountriesService();

    const onCountryLoaded = (country) => {
        setCountry(country);
    }

    const updateCountry = () => {
        clearError();
        const id = Math.floor(Math.random() * (249));
        getRandomCountry(id)
            .then(onCountryLoaded);
    }
    
    useEffect(() => {
            updateCountry();
    }, [])

    const errorMess = error ? <div> Произошла ошибка загрузки </div> : null;
    const loadingMess = loading ? <Spinner/> : null;
    const content = !(loading || error || !country) ? <Country country={country}/> : null;
    
    return (
        <div className='random_country_container'>
            <div className='country_wrapper'>
                {errorMess}
                {loadingMess}
                {content}
            </div>

            <button className="country_update" onClick={updateCountry}>
                Обновить
            </button>
        </div>
    )
}

const Country = ({country}) => {
    const {name, capital, flag, languages, population} = country;
    return (
        <>
        <div className='country_name'>
            Country name: {name}
        </div>
        
        <div className='country_flag'>
            <img src={flag} alt='flag' width='100px' height='100px'></img>
            <p>Country flag</p>
        </div>
        
        <div className='country_facts_wrapper'>
            <ul className='country_facts'>
                <li>
                    Capital is {capital}
                </li>
                <li>
                    Languages: {languages}
                </li>
                <li>
                    Total populaion: {population}
                </li>
            </ul>
        </div>
        </>
    )
}

export default RandomCountry;