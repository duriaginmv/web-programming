import styles from'./Asteroid.module.css'
import smallAsteroid from '../../PNG/SmallAsteroid.png'
import middleAsteroid from '../../PNG/MiddleAsteroid.png'
import bigAsteroid from '../../PNG/BigAsteroid.png'
import dino from '../../PNG/Dino.png'

export function Asteroid (props) {
    return (
        <div className={styles.center}>
            <div className={props.danger==="не опасен"?"cardGreen":"cardRed"}>
                <img className={styles.dino} src={dino} alt="Динозавр"/>
                {props.size<300?
                    <img className={styles.smallAsteroid} src={smallAsteroid} alt="Маленький астероид"/>
                    :props.size<600?
                        <img className={styles.middleAsteroid} src={middleAsteroid} alt="Средний астероид"/>
                        :
                        <img className={styles.bigAsteroid} src={bigAsteroid} alt="Большой астероид"/>
                }
                <label className={styles.name}>{props.name}</label>
                <label className={styles.description}>
                    <label className={styles.date}>Дата................{props.date}</label>
                    <label className={styles.size}>Размер...................................{props.size} м</label>
                    {props.distanceMode === 0 ?
                        <label className={styles.distance}>
                            Расстояние.................{props.distance} км
                        </label>
                        :
                        <label className={styles.distance}>
                            Расстояние.................{(props.distance/384000).toFixed(2)} лун (в шт)
                        </label>
                    }
                </label>
                <label className={styles.rate}>Оценка:</label>
                <label className={props.danger==="не опасен" ? styles.rateGreen : styles.rateRed}>
                    {props.danger}
                </label>
                <div className={styles.button}>
                    <button className={styles.destroy}>На уничтожение</button>
                </div>
            </div>
        </div>
    );
}