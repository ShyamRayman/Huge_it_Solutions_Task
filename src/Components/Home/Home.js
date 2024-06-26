import "./Home.css";
import { useState, useEffect } from "react";
import React from "react";


const Home = () => {
  const [weather, setWeather] = useState([]);
  const [filterWeather, setFilterWeather] = useState([]);

  const apiKey = "421007e667beaae11970e23e20c91ad5";

  const cities = [
    { city: "London", country: "uk" },
    { city: "Paris", country: "fr" },
    { city: "New York", country: "us" },
    { city: "Tokyo", country: "jp" },
    { city: "Berlin", country: "de" },
    { city: "Madrid", country: "es" },
    { city: "Rome", country: "it" },
    { city: "Sydney", country: "au" },
    { city: "Moscow", country: "ru" },
    { city: "Toronto", country: "ca" },
    { city: "Beijing", country: "cn" },
    { city: "São Paulo", country: "br" },
    { city: "Mexico City", country: "mx" },
    { city: "Mumbai", country: "in" },
    { city: "Cairo", country: "eg" },
    { city: "Buenos Aires", country: "ar" },
    { city: "Istanbul", country: "tr" },
    { city: "Cape Town", country: "za" },
    { city: "Seoul", country: "kr" },
    { city: "Bangkok", country: "th" },
    { city: "Lagos", country: "ng" },
    { city: "Jakarta", country: "id" },
    { city: "Lima", country: "pe" },
    { city: "Dubai", country: "ae" },
    { city: "Vienna", country: "at" },
    { city: "Kuala Lumpur", country: "my" },
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        cities.map(async ({ city, country }) => {
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
          );
          if (response.ok) {
            return response.json();
          } else {
            return null;
          }
        })
      );

      setWeather(data.filter((item) => item !== null));
      setFilterWeather(data.filter((item) => item !== null));
    };

    fetchWeatherData();
  }, []);

  const handleSearchChange = (e) => {
    const searchweather = e.target.value.toLowerCase();
    const filteredWeathers = weather.filter((cityname) =>
      cityname.name.toLowerCase().includes(searchweather)
    );
    setFilterWeather(filteredWeathers);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search by city name"
        onChange={handleSearchChange}
      />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>wind speed</th>
              <th>longitude</th>
              <th>latitude</th>
              <th>temp</th>
              <th>feels Like</th>
              <th>temp_min</th>
              <th>temp_max</th>
              <th>Pressure</th>
              <th>humdity</th>
            </tr>
          </thead>
          <tbody>
            {filterWeather &&
              filterWeather.map((datas, index) => {
                return (
                  <tr key={index}>
                    <td>{datas.name}</td>
                    <td>{datas.sys.country}</td>
                    <td>{datas.wind.speed}</td>
                    <td>{datas.coord.lon}</td>
                    <td>{datas.coord.lat}</td>
                    <td>{datas.main.temp}</td>
                    <td>{datas.main.feels_like}</td>
                    <td>{datas.main.temp_min}</td>
                    <td>{datas.main.temp_max}</td>
                    <td>{datas.main.pressure}</td>
                    <td>{datas.main.humidity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
