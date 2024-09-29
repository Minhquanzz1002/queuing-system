import React from 'react';
import {Button, Flex, Result} from "antd";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <Flex align="center" justify="center" style={{minHeight: '100vh'}}>
            <Result status={404}
                    title="404"
                    subTitle="Đường dẫn không tồn tại"
                    extra={<Link to="/dashboard"><Button type="primary">Back dashboard</Button></Link>}
            />
        </Flex>
    );
};

export default NotFound;