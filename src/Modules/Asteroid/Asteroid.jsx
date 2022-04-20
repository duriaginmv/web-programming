import './Asteroid.css'
import smallAsteroid from '../../PNG/SmallAsteroid.png'
import middleAsteroid from '../../PNG/MiddleAsteroid.png'
import bigAsteroid from '../../PNG/BigAsteroid.png'
import dino from '../../PNG/Dino.png'

export function Asteroid (props) {
    return (
        <div className="center">
            <div className={props.danger==="не опасен"?"cardGreen":"cardRed"}>
                <img className="dino" src={dino} alt="Динозавр"/>
                {props.size<300?
                    <img id="smallAsteroid" src={smallAsteroid} alt="Маленький астероид"/>
                    :props.size<600?
                        <img id="middleAsteroid" src={middleAsteroid} alt="Средний астероид"/>
                        :
                        <img id="bigAsteroid" src={bigAsteroid} alt="Большой астероид"/>
                }
                <label className="name">{props.name}</label>
                <label className="description">
                    <label className="date">Дата................{props.date}</label>
                    <label className="size">Размер...................................{props.size} м</label>
                    {props.distanceMode === 0 ?
                        <label className="distance">
                            Расстояние.................{props.distance} км
                        </label>
                        :
                        <label className="distance">
                            Расстояние.................{(props.distance/384000).toFixed(2)} лун (в шт)
                        </label>
                    }
                </label>
                <label id="rate">Оценка:</label>
                <label className={props.danger==="не опасен" ? "rateGreen" : "rateRed"}>
                    {props.danger}
                </label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
}