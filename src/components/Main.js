import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import "../styles/main.css"
import Context from '../Context/Context'
import Header from './Header'
import Content from './Content'
import Search from './Search'
import Weather from './Weather'
import Error from './Error'



function Main () {

    const [weather , setWeather] = useState();

    const [error, setError] = useState();

    // API çağrısı yapan fonksiyon
    const api_call = async (e) =>{
        //sayfanın yeniden yüklenmesini engellemek
        e.preventDefault();

        const location = e.target.elements.location.value

        if(!location) return setError("Please enter the name of the city"), setWeather(null)

        //https://www.weatherapi.com/ sitesinden alınan api_key ve ilgili url
        const API_KEY = "fe52661b7cbb4b5faf7175807232903"
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`

        const request = axios.get(url)

        const response = await request

        // API'den gelen verileri weather state'e set etmek
        setWeather(response.data.forecast.forecastday)

        setError(null)

    }
    console.log(weather)

    // useEffect(()=>{

    //     api_call()

    // },[])

  return (
    <div className='main'>
        <Header />
        <Content>
            <Context.Provider value={{api_call:api_call ,weather:weather, }}>
                <Search />
                { weather &&  
                <Weather /> 
                }
                <Error error={error} />
            </Context.Provider>
        </Content>
    </div>
  )
}

export default Main 