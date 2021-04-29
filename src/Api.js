import React, { useState, useEffect } from 'react';
import './index.css';


function Api() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hero, setHero] = useState();
  const [heroSecond, setHeroSecond] = useState();
  const [heroThird, setHeroThird] = useState();
  const [errorSecond, setErrorSecond] = useState(false);
  const [isLoadedSecond, setIsLoadedSecond] = useState(false);
  const [isLoadedThird, setIsLoadedThird] = useState(false);


useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&apikey=d17a3df73cdaec92353defd812dafec6',  {mode: 'cors'})
  .then(response => response.json())
  .then(data => 
    {
        setHero(data);
        console.log(hero.data.results[0].name);
        setIsLoaded(true);
       
    })
    .catch(err => {
        setError(true);
        setIsLoaded(true);
    });
}, []); 

useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=d17a3df73cdaec92353defd812dafec6',  {mode: 'cors'})
  .then(response => response.json())
  .then(data => 
    {
        setHeroSecond(data);
        console.log(hero.data.results[0].name);
        setIsLoadedSecond(true);
       
    })
    .catch(err => {
        setErrorSecond(true);
        setIsLoadedSecond(true);
    });
}, []); 

useEffect(() => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?name=Hulk&apikey=d17a3df73cdaec92353defd812dafec6',  {mode: 'cors'})
  .then(response => response.json())
  .then(data => 
    {
        setHeroThird(data);
        console.log(hero.data.results[0].name);
        setIsLoadedThird(true);
       
    })
    .catch(err => {
        setError(true);
        setIsLoadedThird(true);
    });
}, []); 



    return (
        
    <div className="api"> 
   
    
    <div className="thought"> {  isLoaded ? hero.data.results[0].description : error} </div>
    <div className="thought"> {  isLoadedSecond ? heroSecond.data.results[0].description : errorSecond} </div>
    <div className="thought"> {  isLoadedThird ? heroThird.data.results[0].description : error} </div>
    



    </div>
    );
  }


export default Api;
