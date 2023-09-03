import {React, useState} from 'react'
import Axios from 'axios'

import './index.css'
import axios from 'axios'

function App() {


const [data, setData] = useState({})
  
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7b23c6c1b79886f16b744523d1292e2a`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='locationName'>
        <p>
          {data.name}
        </p>
        </div>      
      <div className='infoContainer'>
        <div className='Top'>
            <div className='location'>
            <input  type="text" placeholder='Digite a locslizacao' 
            value={location}
            onKeyPress={searchLocation}
            onChange={event => setLocation(event.target.value)} 
            />
          </div>
          <div className='tempAtMoment'>
            {data.main ? <h1>{data.main.temp}</h1>: null}
          </div>
          <div className='description'> 
          {data.main ? <p>{data.weather[0].main}</p>: null}

          </div>
        </div>
        <div className='bottom'>
          <div className='howItFeels'>
          {data.main ? <p>{data.main.feels_like}</p>: null}
            <p>Sensacao termica</p>
          </div> 
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}</p>: null}
            <p>umidade</p>
          </div>
          <div className='windVel'>
          {data.main ? <p>{data.wind.speed}</p>: null}
            <p>velocidade do vento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

