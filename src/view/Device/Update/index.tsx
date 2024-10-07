import React, {useEffect, useState} from 'react';
import {Button, Flex, Form, message, Spin, Typography} from "antd";
import TopBar from "@shared/components/TopBar";
import "./styles.scss";
import {Link, useNavigate, useParams} from "react-router-dom";
import Breadcrumb from "@shared/components/Breadcrumb";
import {Device} from "@modules/devices/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getDeviceByCode, updateDevice} from "@modules/devices/repository";
import NotFound from "@shared/components/NotFound";
import FormDevice from "@view/Device/components/FormDevice";

const DeviceUpdatePage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {code} = useParams<{ code: string }>();
    const [device, setDevice] = useState<Device | null>(null);
    const loadDevice = useSingleAsync(getDeviceByCode);
    const updateDeviceCall = useSingleAsync(updateDevice);

    const handleSubmitUpdate = (values: Omit<Device, 'id' | 'status' | 'connected'>) => {
        try {
            updateDeviceCall.execute(device?.id, values);
            message.success("Cập nhật thiết bị thành công", 5);
            navigate("/admin/thiet-bi");
        } catch (error) {
            console.error(error);
            message.error('Đã có lỗi xảy ra. Hãy thử lại sau', 5);
        }
    };

    useEffect(() => {
        if (code) {
            loadDevice.execute(code).then(setDevice).catch(() => setDevice(null));
        }
    }, [code]);

    if (loadDevice.status === "loading") {
        return (
            <Flex align="center" justify="center" className="h-100vh">
                <Spin size="large"/>
            </Flex>
        );
    }

    if (!device) {
        return <NotFound/>;
    }

    return (
        <div className="device-detail">
            <Flex style={{padding: '2.4rem'}} align="center" justify="space-between">
                <Breadcrumb
                    items={[
                        {
                            title: 'Thiết bị',
                        },
                        {
                            title: 'Danh sách thiết bị',
                            href: '/admin/thiet-bi'
                        },
                        {
                            title: 'Cập nhật thiết bị'
                        }
                    ]}
                />
                <TopBar/>
            </Flex>

            <div style={{paddingLeft: '2.4rem', paddingRight: '6.4rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý thiết
                    bị</Typography.Title>
                <Form
                    form={form}
                    onFinish={handleSubmitUpdate}
                    layout="vertical"
                    initialValues={{...device, services: device.services.map(service => service.id)}}
                >
                    <FormDevice form={form}/>

                    <Flex justify="center" gap="large">
                        <Link to="/thiet-bi"><Button style={{backgroundColor: '#FFF2E7'}} htmlType="button"
                                                     type="primary"
                                                     size="large" ghost>Hủy bỏ</Button></Link>
                        <Button htmlType="submit" type="primary" size="large">Cập nhật</Button>
                    </Flex>
                </Form>
            </div>
        </div>
    );
};

export default DeviceUpdatePage;