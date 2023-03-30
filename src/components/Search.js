import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'
import "../styles/search.css"

function Search() {

    // Context API'den api_call fonksiyonunu kullanmak için bağlantı kurmak
    const { api_call } = useContext(Context)

    return (
        <div className="weather-search">
            <form 
            onSubmit={api_call}
            className="weather-search__form">
                <input 
                    name="location" autoComplete="off"
                    placeholder="Please enter location"
                    className="weather-search__input" type="text" />
                <div className="weather-search__submit">
                    <button className="weather-search__button"> > </button>
                </div>
            </form>
        </div>
    )
}

export default Search