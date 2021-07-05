import React from 'react'
import style from './City.module.css'


const City = (props) => {
    return <h2 className={style.city}>
        {props.city}
    </h2>
}

export default City