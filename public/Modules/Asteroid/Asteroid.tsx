import { useContext } from 'react';
import styles from './Asteroid.module.css';
import dino from '../../PNG/Dino.png';
import SmallAsteroid from '../../PNG/SmallAsteroid.png';
import MiddleAsteroid from '../../PNG/MiddleAsteroid.png';
import BigAsteroid from '../../PNG/BigAsteroid.png';
import { context } from '../../App';

export type Asteroid = {
    name: string;
    date: string;
    distance: number;
    size: number;
    grade: 'опасен' | 'не опасен';
};

export function Ast(props: Asteroid) {
    const { state, dispatch } = useContext(context);

    function DestroyArray() {
        const data = {
            name: props.name,
            date: props.date,
            distance: props.distance,
            size: props.size,
            grade: props.grade,
        };
        dispatch({
            payload: { ...state, destroy: [data] },
            type: 'Destroy',
        });
    }

    return (
        <div className={styles.position}>
            <div
                className={
                    props.grade === 'не опасен'
                        ? styles.cardGreen
                        : styles.cardRed
                }
            >
                <img
                    className={styles.dino}
                    src={dino}
                    alt="Динозавр"
                />
                {props.size < 300 ? (
                    <img
                        className={styles.asteroid1}
                        src={SmallAsteroid}
                        alt="Маленький астероид"
                    />
                ) : props.size < 600 ? (
                    <img
                        className={styles.asteroid2}
                        src={MiddleAsteroid}
                        alt="Средний астероид"
                    />
                ) : (
                    <img
                        className={styles.asteroid3}
                        src={BigAsteroid}
                        alt="Большой астероид"
                    />
                )}
                <label className={styles.name}>{props.name}</label>
                <label className={styles.description}>
                    <label className={styles.date}>
                        Дата..........................
                        {props.date}
                    </label>
                    <label className={styles.size}>
                        Размер...................................
                        {props.size.toFixed(2)} м
                    </label>
                    {state.units === 0 ? (
                        <label className={styles.distance}>
                            Расстояние.................
                            {props.distance.toFixed(2)} км
                        </label>
                    ) : (
                        <label className={styles.distance}>
                            Расстояние.................
                            {(props.distance / 384400).toFixed(2)} лд
                        </label>
                    )}
                </label>
                <label className={styles.rate11}>Оценка:</label>
                <label
                    className={
                        props.grade === 'не опасен'
                            ? styles.rate1Green
                            : styles.rate1Red
                    }
                >
                    {props.grade}
                </label>
                <div className={styles.button}>
                    <button
                        className={styles.destroy}
                        onClick={DestroyArray}
                    >
                        На уничтожение
                    </button>
                </div>
            </div>
        </div>
    );
}
