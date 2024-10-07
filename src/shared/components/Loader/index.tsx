import React from 'react';
import {Flex, Spin} from "antd";

const Loader = () => {
    return (
        <Flex align="center" justify="center" className="h-100vh">
            <Spin size="large"/>
        </Flex>
    );
};

export default Loader;