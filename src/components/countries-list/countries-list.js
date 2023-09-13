import "./countries-list.css";
import { useState, useEffect } from 'react';
import { useCountriesService } from '../services/CountriesService';
import Spinner from '../spinner/spinner';

function CountriesList () {

    const [countriesList, setCountriesList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(3);
    const {loading, error, clearError, getAllCountries} = useCountriesService();

    const onListLoaded = (newCountries) => {
        setCountriesList(countriesList => [...countriesList, ...newCountries]);
    }

    const updateCountryList = () => {
        clearError();    
            getAllCountries(startIndex, endIndex)
                .then(data => {onListLoaded(data)});
                    setStartIndex(startIndex+3);
                    setEndIndex(endIndex+3);
    }

    useEffect (() => {updateCountryList()}, [])

    function RenderItems (arr) {
        return  arr.map((item, i) => {
            return (
                <div className="countries_list_item" key={i}>
                    <img src={item.flag} alt='flag' width='100px' height='100px'></img>
                    <div> {item.name} </div>
                </div>
            )
        }) 
    }
    
    
    const errorMess = error ? <div> Произошла ошибка загрузки </div> : null;
    const loadingMess = loading ? <Spinner/> : null;    

    const content = RenderItems(countriesList);

    return (
        <>
            <div className='countries_list_wrapper'>
                {errorMess}
                {loadingMess}
                {content}
            </div>
            <div className="button_container">
                <button className="load_more" onClick={updateCountryList}> 
                    Показать больше
                </button>
            </div>
        </>
    )    
}

export default CountriesList;