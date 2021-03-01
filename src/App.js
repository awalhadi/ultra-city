import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Country from './components/Country/Country';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Noumber of countries: {countries.length}</h1>
       <Cart cart={cart}></Cart>
      </header>
       <div className="country-container">
       {
         countries.map(country => <Country key={country.alpha3Code} handleAddCountry={handleAddCountry} country={country}></Country>)
       }
       </div>
    </div>
  );
}

export default App;
