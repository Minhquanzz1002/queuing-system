import React from 'react';
import {Breadcrumb} from "antd";

const Dashboard = () => {
    return (
        <div>
            <Breadcrumb
                items={[{title: 'Dashboard'}]}
            />
        </div>
    );
};

export default Dashboard;