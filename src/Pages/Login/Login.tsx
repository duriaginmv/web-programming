import React from 'react';
import { LoginHead } from './LoginHead';
import { LoginForm } from './LoginForm';
import { OtherInfo } from '../../Other/OtherInfo';

export const Login = () => {
    document.title = 'Логин';

    return (
        <>
            <LoginHead />
            <LoginForm />
            <OtherInfo />
        </>
    );
};
