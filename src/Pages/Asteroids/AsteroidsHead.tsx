import AsteroidsHeadStyles from './AsteroidsHead.module.css';
import { Link } from 'react-router-dom';
import React, { memo } from 'react';

export const AsteroidsHead = memo(() => {
    return (
        <div
            className={
                AsteroidsHeadStyles.position
            }
        >
            <label
                className={
                    AsteroidsHeadStyles.title
                }
            >
                ARMAGGEDON V
            </label>
            <label
                className={
                    AsteroidsHeadStyles.description
                }
            >
                Сервис мониторинга и
                уничтожения астероидов,
                опасно подлетающих к Земле.
            </label>
            <div
                className={
                    AsteroidsHeadStyles.choice
                }
            >
                <label
                    className={
                        AsteroidsHeadStyles.asteroids
                    }
                >
                    Астероиды
                </label>
                <Link
                    to="/destroy"
                    className={
                        AsteroidsHeadStyles.destruction
                    }
                >
                    Уничтожение
                </Link>
            </div>
            <div
                className={
                    AsteroidsHeadStyles.rectangle
                }
            />
        </div>
    );
});
