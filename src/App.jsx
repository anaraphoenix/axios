import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
    
      const [pokeApi, setPokeApi] = useState([]);
      useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          console.log(response.data.results);
          setPokeApi(response.data.results);
        })
        .catch((err) => console.log(err));
      }, []);
    return (
    <div className="App">
      <h1>Fetch Pokemon</h1>
      <ul>
            {pokeApi.map((pmon, index) => (
            <li key={index}>{pmon.name}</li>
        ))}
        </ul>
    </div>
  );
}

export default App;
