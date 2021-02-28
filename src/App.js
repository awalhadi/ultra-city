import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  })
  return (
    <div className="App">
      <header className="App-header">
       <h1>Noumber of countries: {countries.length}</h1>
       
      </header>
       <div className="country-container">
       {
         countries.map(country => <Country country={country}></Country>)
       }
       </div>
    </div>
  );
}

export default App;
