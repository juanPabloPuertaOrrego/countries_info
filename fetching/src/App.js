import React, {useState, useEffect} from 'react';
import CountrieView from './components/CountrieView';
import OneCountrieView from './components/OneCountrieView';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp=>resp.json())
    .then(json=>setCountries(json))
  }, []);

  const handleSearch=(e)=>{    
    const newData=countries.filter((item)=>{
      const itemData=item.name.common.toUpperCase()
      const textata=e.target.value.toUpperCase()
      return itemData.indexOf(textata)>-1
    })
    setFoundCountries(newData)       
  }


  return (
    <div>
    <div>
      find countrie<input type={'text'} onChange={handleSearch}/>
    </div>  
    {(()=>{
      if(foundCountries.length===0 ||foundCountries.length===countries.length ){
        return(        countries.map(
        countrie=>
        <CountrieView 
        key={countrie.name.common}
        nameCountrie={countrie.name.common}
        button = {false}
        />)

    )
      }
      if(foundCountries.length>10){
        return <p>Too many matches, specify another filter</p>
      }

      if(foundCountries.length>1 & foundCountries.length<=10){
        return(
        foundCountries.map(
        countrie=>
        <CountrieView 
        key = {countrie.name.common}
        nameCountrie = {countrie.name.common}
        oficialName = {countrie.name.official}
        languages = {countrie.languages}
        coatOfArms={countrie.coatOfArms.png}
        button = {true}        
        />
        )  

    )
      }
      if(foundCountries.length===1){
        return(           
        foundCountries.map(
        countrie=>        
        <OneCountrieView 
        key = {countrie.name.common}
        nameCountrie = {countrie.name.common}
        oficialName = {countrie.name.official}
        languages = {countrie.languages}
        coatOfArms={countrie.coatOfArms.png}
        />)
    )
      }
    })()}         
    </div>
  );
}

export default App;
