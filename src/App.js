import {React, useState} from 'react'
import Axios from 'axios'
import './index.css'
import axios from 'axios'

function App() {


  const [data, setData] = useState({})
  
  const [location, setLocation] = useState('')

  const [weather, setWeather ] = useState([])

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7b23c6c1b79886f16b744523d1292e2a`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
  document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@4x.png";
      })
      setLocation('')
    }
  }

  
  return (
    
    <div className="App"> 
      <div className='infoContainer'>
        <div className='Top'>
            <div className='location'>
            <input id="searchBar "type="text" placeholder='Digite a locslizacao' 
            value={location}
            onKeyPress={searchLocation}
            onChange={event => setLocation(event.target.value)} 
            />
          </div>
          <div className='tempAtMoment'>
            <p>{data.name}</p>
            <img id="icon" src = "" alt =""></img>
            <div className="temperature">
              {data.main ? <h1>{data.main.temp}</h1>: null}
              {data.main ? <p>{data.weather[0].main}</p>: null}
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='howItFeels'>
          {data.main ? <p>{data.main.feels_like}</p>: null}
            <p className="teste">Sensacao termica</p>
          </div> 
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}</p>: null}
          <p className="teste">dsa</p>
          </div>
          <div className='windVel'> 
          {data.main ? <p>{data.wind.speed}</p>: null}
          <p className="teste">velocidade do vento</p>
          </div>
        </div>
      </div>
    </div>
  );
  }


export default App

