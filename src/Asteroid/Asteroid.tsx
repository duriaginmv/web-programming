import { useContext } from 'react';
import AsteroidStyles from "./Card.module.css";
import dino from "../Images/dino.png";
import SmallAsteroid from "../Images/SmallAsteroid.png";
import MiddleAsteroid from "../Images/MiddleAsteroid.png";
import BigAsteroid from "../Images/BigAsteroid.png";
import { AsteroidsContext, PageContext } from "../App";

export type AsteroidArr = {
  name: string;
  date: string;
  distance: number;
  size: number;
  grade: "опасен" | "не опасен";
};

export const Asteroid = (props: AsteroidArr) => {
  const asteroidsContext = useContext(AsteroidsContext);
  const pageContext = useContext(PageContext);

  const DestroyArray = () => {
    const data = {
      name: props.name,
      date: props.date,
      distance: props.distance,
      size: props.size,
      grade: props.grade,
    };
    asteroidsContext.dispatch({
      payload: { ...asteroidsContext.state, destroy: [data] },
      type: "Destroy",
    });
  };

  return (
    <div className={AsteroidStyles.position}>
      <div
        className={
          props.grade === "не опасен"
            ? CardStyles.cardGreen
            : CardStyles.cardRed
        }
      >
        <img className={AsteroidStyles.dino} src={dino} alt="Динозавр" />
        {props.size < 300 ? (
          <img
            className={AsteroidStyles.SmallAsteroid}
            src={SmallAsteroid}
            alt="Маленький астероид"
          />
        ) : props.size < 600 ? (
          <img
            className={AsteroidStyles.MiddleAsteroid}
            src={MiddleAsteroid}
            alt="Средний астероид"
          />
        ) : (
          <img
            className={AsteroidStyles.BigAsteroid}
            src={BigAsteroid}
            alt="Большой астероид"
          />
        )}
        <label className={AsteroidStyles.name}>{props.name}</label>
        <label className={AsteroidStyles.description}>
          <label className={AsteroidStyles.date}>
            Дата..........................
            {props.date}
          </label>
          <label className={AsteroidStyles.size}>
            Размер...................................
            {props.size.toFixed(2)} м
          </label>
          {pageContext.state.units === 0 ? (
            <label className={AsteroidStyles.distance}>
              Расстояние.................
              {props.distance.toFixed(2)} км
            </label>
          ) : (
            <label className={AsteroidStyles.distance}>
              Расстояние.................
              {(props.distance / 384400).toFixed(2)} лд
            </label>
          )}
        </label>
        <label className={AsteroidStyles.rate11}>Оценка:</label>
        <label
          className={
            props.grade === "не опасен"
              ? AsteroidStyles.rate1Green
              : AsteroidStyles.rate1Red
          }
        >
          {props.grade}
        </label>
        <div className={AsteroidStyles.button}>
          <button className={AsteroidStyles.destroy} onClick={DestroyArray}>
            На уничтожение
          </button>
        </div>
      </div>
    </div>
  );
};