import React, {useEffect} from 'react';

const OneCountrieView = (props) => {    
    const{
        nameCountrie,
        oficialName,
        languages,
        coatOfArms
        } = props

    const api_key= process.env.REACT_APP_API_KEY
    const urlWeather= `https://api.weatherstack.com/current?access_key=${api_key}&query=${nameCountrie}`

    useEffect(() => {
        fetch(urlWeather)
        .then(resp=>resp.json())
        .then(json => console.log(json))
    }, [urlWeather]);

    return (
        <div>
            <h3>{nameCountrie}</h3>     
            <p>official Name: {oficialName}</p>
            {(()=>{
                if(languages===undefined || languages===null){
                    return <p>No data languages</p>
                }
                return(
                    Object.values(languages).map(language=>
                    <li key={language}>{language}</li>
                    )
                )
            })()}  
            <img 
            src={coatOfArms} 
            alt=''
            width={100}
            height={100}    
            />

            </div>
    );
}

export default OneCountrieView;
