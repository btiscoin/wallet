import React from 'react';
import { Route } from 'react-router-dom';  

const FullLayout = ({ children }) => (
    <div>
        {children}
    </div>
);


const FullLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} element={
            <FullLayout>
                <Component />
            </FullLayout>
        } />
    )
};

export default FullLayoutRoute;

