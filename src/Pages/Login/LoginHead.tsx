import LoginHeadStyles from './LoginHead.module.css';
import { Link } from 'react-router-dom';
import React, { memo } from 'react';

export const LoginHead = memo(() => {
    return (
        <>
            <div
                className={
                    LoginHeadStyles.position
                }
            >
                <label
                    className={
                        LoginHeadStyles.title
                    }
                >
                    ARMAGGEDON V
                </label>
                <label
                    className={
                        LoginHeadStyles.description
                    }
                >
                    Сервис мониторинга и
                    уничтожения астероидов,
                    опасно подлетающих к
                    Земле.
                </label>
                <div
                    className={
                        LoginHeadStyles.choice
                    }
                >
                    <Link
                        to="/destroy"
                        className={
                            LoginHeadStyles.destruction
                        }
                    >
                        Уничтожение
                    </Link>
                    <Link
                        to="/"
                        className={
                            LoginHeadStyles.destruction
                        }
                    >
                        Астероиды
                    </Link>
                </div>
                <div
                    className={
                        LoginHeadStyles.rectangle
                    }
                />
            </div>
        </>
    );
});
