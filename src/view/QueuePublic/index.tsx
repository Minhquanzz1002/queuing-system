import React, {useEffect, useState} from 'react';
import {Flex, Form, Typography} from "antd";
import Card from "@shared/components/Card";
import Select from "@shared/components/Select";
import {Service} from "@modules/services/interface";
import {useSingleAsync} from "@shared/hook/useAsync";
import {getServices} from "@modules/services/repository";
import ModalAddQueue from "@view/Queue/Add/components/ModalAddQueue";

const KioskQueueAddPage = () => {
    const [form] = Form.useForm();
    const [isShowQueueInfo, setIsShowQueueInfo] = useState<boolean>(false);
    const [services, setServices] = useState<Service[]>([]);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const loadServices = useSingleAsync(getServices);

    useEffect(() => {
        loadServices.execute('ACTIVE').then(setServices).catch(() => setServices([]));
    }, []);

    const handleSubmit = (values: { service: string }) => {
        const service = services.find(service => service.id === values.service);
        if (service) {
            setSelectedService(service);
            setIsShowQueueInfo(true);
        }
    };

    return (
        <div>
            <div style={{paddingLeft: '2.4rem', paddingRight: '2.4rem', marginTop: '6rem'}}>
                <Typography.Title level={3} style={{marginBottom: '1.6rem'}}>Quản lý cấp số</Typography.Title>
                <Card>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <Flex justify="center" align="center" vertical gap="middle">
                            <Typography.Title level={3}
                                              style={{marginBottom: '1.6rem', marginTop: '6.8rem', color: '#0A0A0E'}}>CẤP
                                SỐ
                                MỚI</Typography.Title>

                            <div
                                style={{fontSize: '2rem', fontWeight: 700, textAlign: 'center'}}>Dịch
                                vụ khách hàng lựa chọn
                            </div>

                            <Form.Item name="service" required rules={[
                                {required: true, message: "Vui lòng chọn dịch vụ"}
                            ]}>
                                <Select style={{width: '40rem'}}
                                        placeholder="Chọn dịch vụ"
                                >
                                    {
                                        services.map((service: Service) => (
                                            <Select.Option key={service.id}>{service.name}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>

                            <Flex justify="center" gap="large">
                                <ModalAddQueue textOk="Xác nhận" source="Kiosk"  isShow={isShowQueueInfo} setIsShow={setIsShowQueueInfo}
                                               service={selectedService}/>
                            </Flex>
                        </Flex>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default KioskQueueAddPage;