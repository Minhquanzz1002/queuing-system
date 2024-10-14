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
            <div className="kiosk-setting">
                <Flex align="center" justify="space-between" className="kiosk-setting__header">
                    <div>
                        <img src={logo} alt="LOGO" className="kiosk-setting__logo" loading="eager" />
                    </div>
                    <div>
                        <ButtonLogout text="Log out" logout={() => {
                        }}/>
                    </div>
                </Flex>
                <Flex justify="center">
                    <Typography.Title level={3}>Cài đặt thiết bị KIO_01</Typography.Title>
                </Flex>
                <Flex vertical justify="start" className="kiosk-setting__content" >
                    <Flex vertical gap="middle">
                        <div className="kiosk-setting__form-label">Các lựa chọn hiển thị:</div>
                        <Select mode="multiple" placeholder="Chọn số thứ tự" className="w-100">
                            <Select.Option key='all'>Tất cả</Select.Option>
                        </Select>
                    </Flex>
                </Flex>
            </div>
            <ActionButton style={{top: '22%'}}>
                <ActionButton.Item icon={<IconSquarePlus/>}>Cài đặt</ActionButton.Item>
            </ActionButton>
        </>
    );
};

export default CounterSettingPage;