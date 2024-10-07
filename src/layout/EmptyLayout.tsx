import React from 'react';
import {Outlet} from 'react-router-dom';

const EmptyLayout: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default EmptyLayout;