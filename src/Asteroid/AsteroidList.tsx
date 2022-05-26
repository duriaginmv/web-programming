import { Asteroid, AsteroidArr } from "../Asteroid";
import React, { useReducer } from "react";
import { PageContext } from "../App";
import { PageReducer } from "../Reducers";
import { Navigation } from "../Navigation/Navigation";

type List = {
  list: Asteroid[];
};

export const AsteroidList = (props: List) => {
  const [state, dispatch] = useReducer(PageReducer, {
    show: false,
    units: 0,
  });

  return (
    <PageContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Navigation />
      {!state.show
        ? props.list.map((item: AsteroidArr) => (
            <AsteroidArr
              name={item.name}
              date={item.date}
              distance={item.distance}
              size={item.size}
              grade={item.grade}
            />
          ))
        : props.list.map((item: AsteroidArr) => (
            <>
              {item.grade === "опасен" ? (
                <AsteroidArr
                  name={item.name}
                  date={item.date}
                  distance={item.distance}
                  size={item.size}
                  grade={item.grade}
                />
              ) : (
                ""
              )}
            </>
          ))}
    </PageContext.Provider>
  );
};