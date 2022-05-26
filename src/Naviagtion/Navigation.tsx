import NavigationStyles from "./Navigation.module.css";
import React, { useContext } from "react";
import { PageContext } from "../App";

export const Navigation = () => {
  const { state, dispatch } = useContext(PageContext);

  function Show(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      payload: { ...state, show: event.target.checked },
      type: "Show",
    });
  }

  function Km() {
    dispatch({
      payload: { ...state, units: 0 },
      type: "Units",
    });
  }

  function Moon() {
    dispatch({
      payload: { ...state, units: 1 },
      type: "Units",
    });
  }

  return (
    <>
      <input className={NavigationStyles.check} type="checkbox" onChange={Show} />
      <label className={NavigationStyles.danger}>Показать только опасные</label>
      <label className={NavigationStyles.dist}>
        Расстояние
        <button
          className={state.units === 0 ? NavigationStyles.km : NavigationStyles.moon}
          onClick={Km}
        >
          в километрах
        </button>
        ,
        <button
          className={state.units === 0 ? NavigationStyles.moon : NavigationStyles.km}
          onClick={Moon}
        >
          в дистанциях до луны
        </button>
      </label>
    </>
  );
};