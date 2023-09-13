import { useHttp } from "../../hooks/http.hook";


export const useCountriesService = () => {
   
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = 'https://restcountries.com/v3.1/';


    const getAllCountries = async (start, end) => {
        const res = await request(`${_apiBase}all`);
        return res.slice(start, end).map(_transformCountry);
    }

    const getRandomCountry = async (id) => {
        const res = await request(`${_apiBase}all`);
            return _transformCountry(res[id]);
    }

    const _transformCountry = (country, i) => {
        
        let languages;
            if (!country.languages) {
                languages = 'Info not found';
            } else if (Object.values(country.languages).length === 0) {
                languages = 'Information not found';
            } else {
                languages = Object.values(country.languages).join(',');
            }
        
        let capital;
            if (country.capital) {
                capital = country.capital[0];
            } else {
                capital = 'Info not found';
            }
        
        return {
            id: i,
            name: country.name.common,
            capital: capital,
            flag: country.flags.svg,
            languages: languages,
            population: country.population,
        }
    }

    return {loading, error, getAllCountries, getRandomCountry, clearError};
}
