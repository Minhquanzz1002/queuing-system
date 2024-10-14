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
            <div className="numbering-center-setting">
                <Flex align="center" justify="space-between" className="numbering-center-setting__header">
                    <div>
                        <img src={logo} alt="LOGO" className="numbering-center-setting__logo"/>
                    </div>
                    <div>
                        <ButtonLogout text="Log out" logout={() => {
                        }}/>
                    </div>
                </Flex>
                <Flex justify="center">
                    <Typography.Title level={3}>Cài đặt thiết bị MHQ_01</Typography.Title>
                </Flex>
                <Flex className="numbering-center-setting__content" justify="center" align="start">
                    <Flex justify="center" vertical style={{width: '40rem'}} gap="large">
                        <div className="numbering-center-setting__form-title">
                            Thông tin hiển thị
                        </div>
                        <Flex justify="center" gap="middle" vertical className="numbering-center-setting__form-item">
                            <div className="numbering-center-setting__form-label">Số thứ tự vào quầy</div>
                            <Select placeholder="Chọn số thứ tự vào quầy">
                                <Select.Option key='all'>Tất cả</Select.Option>
                            </Select>
                        </Flex>
                        <div className="numbering-center-setting__form-label">Nguồn thông tin</div>
                        <Select mode="multiple" placeholder="Chọn nguồn thông tin">
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