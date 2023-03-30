import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'
import "../styles/weather.css"

function Weather() {

   //Weather değişkeninin güncellenmesi
    const { weather } = useContext(Context);
  
    // Hava durumu verilerini ekranda göstermek için oluşturulan döngü
    return (
      <div className="weather-data">
        <h3 className="weather__tagline">
        The 5-day forecast is as follows;
        </h3>
        <div className="weather-cards">
          {weather.map((day) => {
            const { mintemp_c, maxtemp_c, condition } = day.day;
            const date = new Date(day.date);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            
            //Hava durumu verilerini kart formatında görüntüleme
            return (

              <div className="weather-card" key={day.date}>
                <p className="weather-card__date">{formattedDate}</p>
                <img className="weather-card__icon" src={condition.icon} alt="weather icon" />

                <p className="weather-card__mintemp">Min Temperature: {mintemp_c}</p>
                <p className="weather-card__maxtemp">Max Temperature: {maxtemp_c}</p>
                <p className="weather-card__condition">Condition: {condition.text}</p>
               
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Weather 
