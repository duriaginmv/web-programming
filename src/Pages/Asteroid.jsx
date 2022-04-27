import React, { useState, useEffect} from 'react';
import HeadCSS from './Head.module.css'
import OtherInfoCSS from './OtherInfo.module.css'
import {Link} from "react-router-dom";
import {Asteroid} from "../Modules/Asteroid/Asteroid";
import {URL, AsteroidsArray} from "../API";

export function Asteroids () {

    const [dangAsteroids,setDangAsteroids]=useState({
        astArray : [],
        distanceMode : 0,
        show : false
    });

    useEffect(() => {
        fetch(URL())
            .then((response) => response.json())
            .then((data) => {setDangAsteroids({...dangAsteroids,arr: AsteroidsArray(data)})})
            .catch((error)=>console.log(error))
    },[]);

    function ShowOnlyDanger (event) {
        setDangAsteroids
        ({
            ...dangAsteroids,
            show: event.target.checked
        })
    }

    function MoonToKm (event) {
        setDangAsteroids
        ({
            ...dangAsteroids,
            distance: 0
        });
    }

    function KmToMoon (event) {
        setDangAsteroids
        ({
            ...dangAsteroids,
            distance: 1
        });
    }

    return (
        <div>
            <div className={HeadCSS.center}>
                <label className={HeadCSS.title}>ARMAGGEDON V</label>
                <label className={HeadCSS.description}>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                </label>
                <div className={HeadCSS.choice}>
                    <label className={HeadCSS.asteroids}>Астероиды</label>
                    <Link to="/destroy" className={HeadCSS.destruction}>Уничтожение</Link>
                </div>
                <div className={HeadCSS.rectangle}></div>
                <input className={HeadCSS.check} type="checkbox" onChange={ShowOnlyDanger}/>
                <label className={HeadCSS.danger}>Показать только опасные</label>
                <label className={HeadCSS.distance}>
                    Расстояние&nbsp;&nbsp;
                    <button className={dangAsteroids.distance===0 ? "km" : "moon"} onClick={MoonToKm}>в километрах</button> &nbsp;&nbsp;
                    <button className={dangAsteroids.distance===0 ? "moon" : "km"} onClick={KmToMoon}>в дистанциях до луны</button>
                </label>
            </div>
            {dangAsteroids.show === false ?
                (dangAsteroids.astArray.map((item) =>
                    <Asteroid name={item.name} date={item.date} distance={item.distance} size={item.size} danger={item.danger} distanceMode={dangAsteroids.distance}/>))
                :
                (dangAsteroids.astArray.map((item) =>
                    <>
                        {item.danger==="опасен" ?
                            <Asteroid name={item.name} date={item.date} distance={item.distance} size={item.size} danger={item.danger} distanceMode={dangAsteroids.distance}/>:""}
                    </>))
            }
            <label className={OtherInfoCSS.otherinfo}>2022 © Все права и планета защищены</label>
        </div>
    );
}