import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoords, getWeatherForecast } from "../../api/geolocation";
import style from "./Search.module.css";
import SearchInput from "./SearchInput/SearchInput";

const Search = () => {
  const dispatch = useDispatch();
  const newCity = useSelector((state) => state.main.newCity);

  async function getWheatherForecastHandler() {
    let { geo_lat, geo_lon } = await dispatch(getCoords(newCity));
    dispatch(getWeatherForecast(geo_lat, geo_lon));
  }
  return (
    <div className={style.searchBlock}>
      <SearchInput />
      <button className={style.btn} onClick={getWheatherForecastHandler}>
        показать
      </button>
    </div>
  );
};

export default Search;
