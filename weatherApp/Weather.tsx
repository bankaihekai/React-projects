import { useState, useEffect, useContext } from "react";
import Details from "./Details";
import Map from "./Map";
import { IoSearch, IoHeartOutline, IoHeartSharp  } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Weather.css";
import { StatusContext } from "./main";

function Weather() {
  const { cityName } = useParams();
  const [city, setCity] = useState(cityName || "Cebu");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const apiKey = "00f97fff1e478cc0eaa4df038c6f69a6";
  const navigate = useNavigate();
  const [heartCount, setHeartCount] = useState(()=>{
    const storedHeartCount = localStorage.getItem("heartCount");
    return storedHeartCount ? parseInt(storedHeartCount, 10) : 0;
  });
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [logStatus, setLogStatus] = useContext(StatusContext);
  console.log(logStatus);
  useEffect(() => {
    const fetch_API_Data = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          setError(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        setLongitude(data.coord.lon);
        setLatitude(data.coord.lat);
        setWeatherData(data);
        setError("");
      } catch (error) {
        setError("Place not Found!");
        setWeatherData(null);
      }
    };

    fetch_API_Data();
  }, [city]);

  const searchLocation_Hanlder = (e: any) => {
    const newPlace = e.target.elements.search.value;
    e.preventDefault();
    setCity(newPlace);
    navigate(`/weather/${encodeURIComponent(newPlace)}`);
  };

  const likeHeart = () => {
    const newHeartCount = heartCount === 0 ? 1 : 0; 
    setHeartCount(newHeartCount);
    localStorage.setItem("heartCount", newHeartCount.toString());
    if(newHeartCount==1){
        setShowPlusOne(true); // Show "+1" message
        setTimeout(() => setShowPlusOne(false), 1000);
    }
    
  };

  return (
    <>
      <div className="py-1 d-flex justify-content-between">
        <Link to="/" className="btn btn-primary m-2">
          Go back
        </Link>
        <form
          onSubmit={searchLocation_Hanlder}
          className="d-flex justify-content-center align-items-center w-75"
        >
          <label htmlFor="search">Search:&nbsp;</label>
          <input type="search" id="search" name="search" />
          <button type="submit" className="btn btn-primary btn-sm">
            <IoSearch />
          </button>
        </form>
        <div className="m-2 d-flex align-items-center">
          <button className="border-0 bg-transparent" onClick={likeHeart}>
            {heartCount <= 0 ? <IoHeartOutline className="fs-5" /> : <IoHeartSharp className="fs-5" style={{ color: '#FF69B4'}}/>}
          </button>
          {showPlusOne && <div className="plus-one">+1</div>} {/* "+1" message */}
        </div>
      </div>
      {weatherData ? (
        <>
          <Details placeDetails={weatherData} />
          <Map latitude={latitude} longitude={longitude} />
        </>
      ) : (
        <div className="d-flex justify-content-center text-danger fw-bold">
          {error}
        </div>
      )}
    </>
  );
}

export default Weather;
