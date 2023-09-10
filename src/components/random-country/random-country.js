import { useCountriesService } from '../services/CountriesService.js';
import { useState, useEffect } from 'react';

const RandomCountry = () => {

    const [country, setCountry] = useState(null);
    const {loading, error, getAllCountries, getRandomCountry, clearError} = useCountriesService();

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
        console.log(`Вызывается хук цикла`);
    }, [])

    const errorMess = error ? <div>Упс, ошибочка вышла...</div> : null;
    const loadingMess = loading ? <div>Идет загрузка...</div> : null;
    const content = !(loading || error || !country) ? <Country country={country}/> : null;

    return (
        <div className='random_country_container'>
            {errorMess}
            {loadingMess}
            {content}
            <button onClick={updateCountry}>Обновить</button>
        </div>
    )

}

const Country = ({country}) => {
    const {name, capital, flag, languages, population} = country;
    return (
        <ul>
            <li>
                Имя: {name}
            </li>
            <li>
                Столица: {capital}
            </li>
            <li>
                Население: {population}
            </li>
        </ul>
    )
}

export default RandomCountry;