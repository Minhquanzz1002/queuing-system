import "./styles.scss";
import React from 'react';
import {Flex} from "antd";
import Select from "@shared/components/Select";
import Card from "@shared/components/Card";
import AreaChartStatistics from "@view/Dashboard/components/AreaChartStatistics";

const CardChart = () => {
    return (
        <Card style={{borderRadius: '1.2rem'}} className="card-chart">
            <Flex justify="space-between">
                <div>
                    <div className="card-chart__title">Bảng thống kê theo tuần</div>
                    <div className="card-chart__subtitle">Tháng 11/2021</div>
                </div>
                <Flex align="center" gap="small">
                    <span className="card-chart__select-label">Xem theo</span>
                    <Select style={{width: '10rem'}} defaultValue={'1'}>
                        <Select.Option value="1">Ngày</Select.Option>
                        <Select.Option value="2">Tuần</Select.Option>
                        <Select.Option value="3">Tháng</Select.Option>
                    </Select>
                </Flex>
            </Flex>
            <div className="card-chart__content">
                <div style={{position: 'absolute', inset: 0}}>
                    <AreaChartStatistics/>
                </div>
            </div>
        </Card>
    );
};

export default CardChart;