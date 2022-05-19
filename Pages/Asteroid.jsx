import React, { useContext } from 'react';
import HeadCSS from './Head.module.css';
import OtherInfoCSS from './OtherInfo.module.css';
import { Link } from 'react-router-dom';
import { Asteroid } from '../Modules/Asteroid/Asteroid';
import { context } from '../App';

export function Asteroids() {
    const { state, dispatch } = useContext(context);

    function ShowOnlyDanger(event) {
        dispatch({
            payload: event.target.checked ? true : false,
            type: 'Show',
        });
    }

    function MoonToKm(event) {
        dispatch({
            payload: 0,
            type: 'Distance',
        });
    }

    function KmToMoon(event) {
        dispatch({
            payload: 1,
            type: 'Distance',
        });
    }

    return (
        <div>
            <div className={HeadCSS.center}>
                <label className={HeadCSS.title}>ARMAGGEDON V</label>
                <label className={HeadCSS.description}>
                    Сервис мониторинга и уничтожения астероидов,
                    опасно подлетающих к Земле.
                </label>
                <div className={HeadCSS.choice}>
                    <label className={HeadCSS.asteroids}>
                        Астероиды
                    </label>
                    <Link
                        to="/destroy"
                        className={HeadCSS.destruction}
                    >
                        Уничтожение
                    </Link>
                </div>
                <div className={HeadCSS.rectangle}></div>
                <input
                    className={HeadCSS.check}
                    type="checkbox"
                    onChange={ShowOnlyDanger}
                />
                <label className={HeadCSS.danger}>
                    Показать только опасные
                </label>
                <label className={HeadCSS.distance}>
                    Расстояние
                    <button
                        className={
                            state.distanceMode === 0
                                ? HeadCSS.km
                                : HeadCSS.moon
                        }
                        onClick={MoonToKm}
                    >
                        в километрах
                    </button>
                    ,
                    <button
                        className={
                            state.distanceMode === 0
                                ? HeadCSS.moon
                                : HeadCSS.km
                        }
                        onClick={KmToMoon}
                    >
                        в дистанциях до луны
                    </button>
                </label>
            </div>
            {state.show === false
                ? state.array.map((item) => (
                      <Asteroid
                          name={item.name}
                          date={item.date}
                          distance={item.distance}
                          size={item.size}
                          danger={item.danger}
                          distanceMode={state.distanceMode}
                      />
                  ))
                : state.array.map((item) => (
                      <>
                          {item.danger === 'опасен' ? (
                              <Asteroid
                                  name={item.name}
                                  date={item.date}
                                  distance={item.distance}
                                  size={item.size}
                                  danger={item.danger}
                                  distanceMode={state.distanceMode}
                              />
                          ) : (
                              ''
                          )}
                      </>
                  ))}
            <div className={OtherInfoCSS.otherinfo}>
                <label className={OtherInfoCSS.otherinfo}>
                    2021 © Все права и планета защищены
                </label>
            </div>
        </div>
    );
}
