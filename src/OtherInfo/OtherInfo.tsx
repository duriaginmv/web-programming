import OtherInfoStyles from "./OtherInfoStyles.module.css";
import React, { memo } from "react";

export const End = memo(() => {
  return (
    <div className={OtherInfoStyles.position}>
      <label className={OtherInfoStyles.otherinfo}>
        2021 © Все права и планета защищены
      </label>
    </div>
  );
});