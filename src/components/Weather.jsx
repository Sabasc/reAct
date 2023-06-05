 import React,{useEffect, useState} from 'react'

 //da148b6efdc30e16713be4913c319962
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//https://api.weatherapi.com/v1/current.json?key=d0df78ade2f04cd1ab845939232405&q=${target}
 const Weather = () => {
    const [apiData,   setApiData] = useState()
    const [search, setSearch] = useState("")
//London
    useEffect(() =>{
        const fetchData = async() =>{
            const res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=da148b6efdc30e16713be4913c319962&units=metric`);
            const data = await res.json()
            console.log(data);
            if(res.ok){
                setApiData(data)
            }
        } 
        fetchData()
    }, [search]);
   return (

     <div className='box'>
<h1>Weather <span>App</span></h1>
<input type="text " name='search' placeholder='search city' onChange={(e) => setSearch(e.target.value)}vaule={search}/>

{apiData? <div className='element'>
    <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"} alt="weather" />
    <p><span>Temp: </span>{apiData.main.temp}</p>
    <p><span>Name: </span>{apiData.name}</p>
    <p><span>Country: </span>{apiData.sys.country}</p>
    </div>
    :<h1>No Data Found</h1>}
    
</div>)}
 
 export default Weather
 






 {/* {apiData? <div className='element'>
    <p><span>Temp:</span>{apiData.main.temp}</p>
    <p><span>Name:</span>{apiData.name}</p>
    <p><span>Country:</span>{apiData.sys.county}</p>
    </div>
    <h1>No Data Found</h1>}
     </div> */}