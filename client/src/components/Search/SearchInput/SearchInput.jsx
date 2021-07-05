import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewCity } from '../../../reducers/mainReducer'
import style from './SearchInput.module.css'

const SearchInput = () => {
   let newCity = useSelector(state=>state.main.newCity)
   let dispatch = useDispatch()

    return <div className={style.searchInputBlock}>
    {/* <input
      type="text"
      name="name"
      className={style.searchInput}
      id="nme"
      required
      autoComplete="off"
      value={newCity}
      onChange={(e) => {
        dispatch(setNewCity(e.target.value))
      }}
    />
    <label htmlFor="nme" className={style.searchLabel}>
      <span>Введите город</span>
    </label> */}
    <input type="text" className={style.searchInput} required value={newCity} autoComplete="off" placeholder="Введите город" onChange={(e) => {
       dispatch(setNewCity(e.target.value))
      }}/>
  </div>
}

export default SearchInput