import React, { useState } from 'react';
import './Head.css'
import './OtherInfo.css'
import {Link} from "react-router-dom";
import {Asteroid} from "../Modules/Asteroid/Asteroid";

export function Asteroids () {

    function AsteroidData (){
        let yearMonth = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
        let EngAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let astData = [];
        let year, name, date, distance, size, danger;
        for(let i = 0; i < 7; i++) {
            year = "20" + (Math.random() * 66 + 10).toFixed(0);
            name = year + ' ' + EngAlph[(Math.random() * 25).toFixed(0)] + EngAlph[(Math.random() * 25).toFixed(0)];
            date = (Math.random() * 27 + 1).toFixed(0) + ' ' + yearMonth[(Math.random() * 12).toFixed(0)] + ' ' + year + " года";
            danger = Math.random() < 0.5 ? "опасен" : "не опасен";
            size = (Math.random() * 1000 + 1).toFixed(0);
            distance = (Math.random() * 9000000 + 1000000).toFixed(0);

            astData.push({
                name: name,
                date: date,
                danger: danger,
                size: size,
                distance: distance
            })
        }
        return astData;
    }

    const [dangAsteroids,setDangAsteroids]=useState({
        data : AsteroidData(),
        distanceMode : 0,
        show : false
    });

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
            <div id="center">
                <label id="title">ARMAGGEDON V</label>
                <label id="description">
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                </label>
                <div id="choice">
                    <label id="asteroids">Астероиды</label>
                    <Link to="/destroy" id="destruction">Уничтожение</Link>
                </div>
                <div id="rectangle"></div>
                <input id="check" type="checkbox" onChange={ShowOnlyDanger}/>
                <label id="danger">Показать только опасные</label>
                <label id="distance">
                    Расстояние&nbsp;&nbsp;
                    <button className={dangAsteroids.distance===0?"km":"moon"} onClick={MoonToKm}>в километрах</button> &nbsp;&nbsp;
                    <button className={dangAsteroids.distance===0?"moon":"km"} onClick={KmToMoon}>в дистанциях до луны</button>
                </label>
            </div>
            {dangAsteroids.show === false ?
                (dangAsteroids.data.map((item) =>
                    <Asteroid name={item.name} date={item.date} distance={item.distance} size={item.size} danger={item.danger} distanceMode={dangAsteroids.distance}/>))
                    :
                (dangAsteroids.data.map((item) =>
                    <>
                        {item.danger==="опасен" ?
                        <Asteroid name={item.name} date={item.date} distance={item.distance} size={item.size} danger={item.danger} distanceMode={dangAsteroids.distance}/>:""}
                    </>))
            }
                <label id="otherinfo">2022 © Все права и планета защищены</label>
        </div>
    );
}