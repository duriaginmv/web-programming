import React, { useContext } from 'react';
import { AsteroidsContext } from '../../App';
import { OtherInfo } from '../../Other/OtherInfo';
import { AsteroidsHead } from './AsteroidsHead';
import { CardList } from '../../Card/CardList';

export const Asteroids = () => {
    document.title = 'Астероиды';

    const { state, dispatch } = useContext(
        AsteroidsContext
    );

    return (
        <>
            <AsteroidsHead />
            <CardList list={state.arr} />
            <OtherInfo />
        </>
    );
};
