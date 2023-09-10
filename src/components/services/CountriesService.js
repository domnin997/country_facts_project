import { useHttp } from "../../hooks/http.hook";

export const useCountriesService = () => {
    const {loading, request, error,clearError} = useHttp();

    const _apiBase = 'https://restcountries.com/v3.1/';

    const getAllCountries = async () => {
        const res = await request(`${_apiBase}all`);
        return res;
        // .forEach((country) => {console.log(country.name.common)})
    }

    const getRandomCountry = async (id) => {
        const res = await request(`${_apiBase}all`);
        return _transformCountry(res[id]);
    }

    const _transformCountry = (country) => {
        return {
            name: country.name.common,
            capital: country.capital[0],
            flag: country.flags.svg,
            languages: country.languages,
            population: country.population,
        }
    }

    return {loading, error, getAllCountries, getRandomCountry, clearError};
}
