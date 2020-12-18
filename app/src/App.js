import { useState } from 'react';

import './App.css';

const API = 'http://localhost:8000/locations?q='

function App() {
  const [locations, setLocations] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div className='App'>
      <h2>Location Search App</h2>
      <div>
        <input 
          placeholder='Search here...'
          className='search-input' 
          onKeyUp={async (e) => {
            if (e.target.value && e.target.value.length > 1) {
              try {
                const res = await (await fetch(`${API}${e.target.value}`)).json()
                if (res.success) {
                  setLocations(res.data.sort((a, b) => {
                    if (a.name > b.name) {
                      return 1
                    } else if (a.name < b.name) {
                      return -1
                    }
                    return 0
                  }))
                  setErrorMessage('')
                } else {
                  setLocations([])
                  setErrorMessage(res.message)
                }
              } catch (e) {
                setLocations([])
                setErrorMessage(e.message)
              }
            } else {
              setLocations([])
              setErrorMessage('')
            }
          }} 
        />
        {
          errorMessage &&
          <p className='error-message'>{errorMessage}</p>
        }
        <div className='location-list'>
          {
            locations.map((loc, index) => (
              <p key={index}>
                {loc.name} 
                <span className='coordinate'>({loc.latitude}, {loc.longitude})</span>
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
