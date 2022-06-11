import React, { useContext } from 'react';
import { DestroyHead } from './DestroyHead';
import { OtherInfo } from '../../Other/OtherInfo';
import { AsteroidsContext } from '../../App';
import { CardList } from '../../Card/CardList';

export const Destroy = () => {
    document.title = 'Уничтожение';

    const { state, dispatch } = useContext(
        AsteroidsContext
    );

    return (
        <>
            <DestroyHead />
            <CardList list={state.destroy} />
            <OtherInfo />
        </>
    );
};
