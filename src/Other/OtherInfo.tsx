import OtherInfoStyles from './OtherInfo.module.css';
import React, { memo } from 'react';

export const OtherInfo = memo(() => {
    return (
        <div
            className={
                OtherInfoStyles.position
            }
        >
            <label
                className={
                    OtherInfoStyles.otherinfo
                }
            >
                2022 © Все права и планета
                защищены
            </label>
        </div>
    );
});
