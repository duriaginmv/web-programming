import React from 'react';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Asteroids } from './Pages/Asteroid';
import { Destroy } from './Pages/Destroy';
import { Login } from './Pages/Login';
import { AsteroidsArray, URL } from './API';

export const context = React.createContext(null);

export function App() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Array':
                return {
                    ...state,
                    array: action.payload,
                };
            case 'Destroy':
                return {
                    ...state,
                    destroy: [...state.destroy, action.payload],
                };
            case 'Show':
                return {
                    ...state,
                    show: action.payload,
                };
            case 'Distance':
                return {
                    ...state,
                    distance: action.payload,
                };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        array: [],
        destroy: [],
        show: false,
        distance: 0,
    });

    useEffect(() => {
        fetch(URL())
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    payload: AsteroidsArray(data),
                    type: 'Array',
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <context.Provider
                value={{
                    state: state,
                    dispatch: dispatch,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Asteroids />} />
                        <Route
                            path="/destroy"
                            element={<Destroy />}
                        />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </context.Provider>
        </>
    );
}
export default App;
