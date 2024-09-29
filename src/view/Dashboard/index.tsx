import React from 'react';
import {Flex, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import Breadcrumb from "@shared/components/Breadcrumb";

const Dashboard = () => {
    return (
        <div>
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Dashboard'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '10.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Bản đồ cấp số</Typography.Title>

            </div>
        </div>
    );
};

export default Dashboard;