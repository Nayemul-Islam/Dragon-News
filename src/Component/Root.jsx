import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className= " w-3/4 mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;