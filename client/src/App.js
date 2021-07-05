import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { userLocation, getCoords, getWeatherForecast } from "./components/api/geolocation";
import { setNewCity } from "./components/reducers/mainReducer";

function App() {
  let city = useSelector((state) => state.main.city);
  let newCity = useSelector(state=> state.main.newCity)
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getCoords('Пушкин'))
  },[])

  useEffect(() => {
     dispatch(userLocation())
  },[]);

  useEffect(()=>{
    dispatch(getWeatherForecast('57.8194415', '28.3317198'))
  },[])

  function func(e){
    dispatch(setNewCity(e.target.value))
  }

  return <div>
    <input type='text' onChange={func}/>    {city}  {newCity}
    </div>;
}

export default App;
