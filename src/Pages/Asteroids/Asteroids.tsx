import React, { useContext } from "react";
import { AsteroidsContext } from "../App";
import { OtherInfo } from "../../OtherInfo/OtherInfo";
import { AsteroidsHead } from "./AsteroidsHeader";
import { AsteroidList } from "../../Asteroid/AsteroidList";

export const Asteroids = () => {
  document.title = "Астероиды";

  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <>
      <AsteroidsHead />
      <AsteroidList list={state.arr} />
      <OtherInfo />
    </>
  );
};