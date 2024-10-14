import React from 'react';
import "./styles.scss";
import {Flex, Typography} from "antd";
import ActionButton from "@shared/components/ActionButton";
import {IconSquarePlus} from "@assets/icons";
import ButtonLogout from "@shared/components/ButtonLogout";
import {logo} from "@assets/images";
import Select from "@shared/components/Select";


const CounterSettingPage = () => {
    return (
        <>
            <div className="counter-setting">
                <Flex align="center" justify="space-between" className="counter-setting__header">
                    <div>
                        <img src={logo} alt="LOGO" className="counter-setting__logo"/>
                    </div>
                    <div>
                        <ButtonLogout text="Log out" logout={() => {
                        }}/>
                    </div>
                </Flex>
                <Flex justify="center">
                    <Typography.Title level={3}>Cài đặt thiết bị MHQ_01</Typography.Title>
                </Flex>
                <Flex className="counter-setting__content" justify="center" align="start">
                    <Flex justify="center" vertical style={{width: '40rem'}} gap="large">
                        <Flex justify="center" gap="middle" vertical className="counter-setting__form-item">
                            <div className="counter-setting__form-label">Vị trí thiết bị kết nối</div>
                            <Select placeholder="Chọn vị trí kết nối">
                                <Select.Option key='all'>Tất cả</Select.Option>
                            </Select>
                        </Flex>
                        <div className="counter-setting__form-label">Số thứ tự hiển thị của dịch vụ</div>
                        <Select mode="multiple" placeholder="Chọn số thứ tự">
                            <Select.Option key='all'>Tất cả</Select.Option>

                        </Select>
                    </Flex>
                </Flex>
            </div>
            <ActionButton>
                <ActionButton.Item icon={<IconSquarePlus/>}>Cài đặt</ActionButton.Item>
            </ActionButton>
        </>
    );
};

export default CounterSettingPage;