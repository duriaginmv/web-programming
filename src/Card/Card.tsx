import { useContext } from 'react';
import CardStyles from './Card.module.css';
import dino from '../PNG/Dino.png';
import smallAsteroid from '../PNG/SmallAsteroid.png';
import middleAsteroid from '../PNG/MiddleAsteroid.png';
import bigAsteroid from '../PNG/BigAsteroid.png';
import {
    AsteroidsContext,
    PageContext,
} from '../App';

export type Asteroid = {
    name: string;
    date: string;
    distance: number;
    size: number;
    grade: 'опасен' | 'не опасен';
};

export const Card = (props: Asteroid) => {
    const asteroidsContext = useContext(
        AsteroidsContext
    );
    const pageContext =
        useContext(PageContext);

    const DestroyArray = () => {
        const data = {
            name: props.name,
            date: props.date,
            distance: props.distance,
            size: props.size,
            grade: props.grade,
        };
        asteroidsContext.dispatch({
            payload: {
                ...asteroidsContext.state,
                destroy: [data],
            },
            type: 'Destroy',
        });
    };

    return (
        <div className={CardStyles.position}>
            <div
                className={
                    props.grade ===
                    'не опасен'
                        ? CardStyles.cardGreen
                        : CardStyles.cardRed
                }
            >
                <img
                    className={
                        CardStyles.dino
                    }
                    src={dino}
                    alt="Динозавр"
                />
                {props.size < 300 ? (
                    <img
                        className={
                            CardStyles.asteroid1
                        }
                        src={smallAsteroid}
                        alt="Маленький астероид"
                    />
                ) : props.size < 600 ? (
                    <img
                        className={
                            CardStyles.asteroid2
                        }
                        src={middleAsteroid}
                        alt="Средний астероид"
                    />
                ) : (
                    <img
                        className={
                            CardStyles.asteroid3
                        }
                        src={bigAsteroid}
                        alt="Большой астероид"
                    />
                )}
                <label
                    className={
                        CardStyles.name
                    }
                >
                    {props.name}
                </label>
                <label
                    className={
                        CardStyles.description
                    }
                >
                    <label
                        className={
                            CardStyles.date
                        }
                    >
                        Дата..........................
                        {props.date}
                    </label>
                    <label
                        className={
                            CardStyles.size
                        }
                    >
                        Размер...................................
                        {props.size.toFixed(
                            2
                        )}{' '}
                        м
                    </label>
                    {pageContext.state
                        .units === 0 ? (
                        <label
                            className={
                                CardStyles.distance
                            }
                        >
                            Расстояние.................
                            {props.distance.toFixed(
                                2
                            )}{' '}
                            км
                        </label>
                    ) : (
                        <label
                            className={
                                CardStyles.distance
                            }
                        >
                            Расстояние.................
                            {(
                                props.distance /
                                384400
                            ).toFixed(
                                2
                            )}{' '}
                            лд
                        </label>
                    )}
                </label>
                <label
                    className={
                        CardStyles.rate
                    }
                >
                    Оценка:
                </label>
                <label
                    className={
                        props.grade ===
                        'не опасен'
                            ? CardStyles.rateGreen
                            : CardStyles.rateRed
                    }
                >
                    {props.grade}
                </label>
                <div
                    className={
                        CardStyles.button
                    }
                >
                    <button
                        className={
                            CardStyles.destroy
                        }
                        onClick={
                            DestroyArray
                        }
                    >
                        На уничтожение
                    </button>
                </div>
            </div>
        </div>
    );
};
