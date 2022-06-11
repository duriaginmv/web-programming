import ToolBarStyles from './ToolBar.module.css';
import React, { useContext } from 'react';
import { PageContext } from '../App';

export const ViewBar = () => {
    const { state, dispatch } =
        useContext(PageContext);

    function Show(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        dispatch({
            payload: {
                ...state,
                show: event.target.checked,
            },
            type: 'Show',
        });
    }

    function Km() {
        dispatch({
            payload: { ...state, units: 0 },
            type: 'Units',
        });
    }

    function Moon() {
        dispatch({
            payload: { ...state, units: 1 },
            type: 'Units',
        });
    }

    return (
        <>
            <input
                className={
                    ToolBarStyles.check
                }
                type="checkbox"
                onChange={Show}
            />
            <label
                className={
                    ToolBarStyles.danger
                }
            >
                Показать только опасные
            </label>
            <label
                className={
                    ToolBarStyles.dist
                }
            >
                Расстояние
                <button
                    className={
                        state.units === 0
                            ? ToolBarStyles.km
                            : ToolBarStyles.moon
                    }
                    onClick={Km}
                >
                    в километрах
                </button>
                ,
                <button
                    className={
                        state.units === 0
                            ? ToolBarStyles.moon
                            : ToolBarStyles.km
                    }
                    onClick={Moon}
                >
                    в дистанциях до луны
                </button>
            </label>
        </>
    );
};
