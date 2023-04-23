import React from 'react';
import NavigationBar from '../../Pages/Home/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default LogInLayout;