import React, { useContext } from "react";
import { DestroyHeader } from "./DestroyHead/DestroyHead";
import { OtherInfo } from "../../OtherInfo/OtherInfo";
import { AsteroidsContext } from "../App";
import { AsteroidList } from "../../Asteroid/AsteroidList";

export const Destroy = () => {
  document.title = "Уничтожение";

  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <>
      <DestroyHeader />
      <AsteroidList list={state.destroy} />
      <OtherInfo />
    </>
  );
};