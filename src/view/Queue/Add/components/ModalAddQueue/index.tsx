import React from 'react';
import {Button, Flex, Form, Input, Modal, Typography} from "antd";
import FormNote from "@shared/components/FormNote";
import {personalNameRules, phoneRules} from "@helper/formRules";
import ModalQueueInfo from "@shared/components/ModalQueueInfo";
import {useSingleAsync} from "@shared/hook/useAsync";
import {addQueue} from "@modules/queue/repository";
import {Service} from "@modules/services/interface";
import {Queue} from "@modules/queue/interface";

type ModalAddQueueProps = {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    service: Service | null;
    textOk?: string;
    source?: string;
}

const ModalAddQueue = ({isShow, setIsShow, service, textOk = "In số", source = 'Hệ thống' }: ModalAddQueueProps) => {
    const [form] = Form.useForm();
    const [isShowModalPrintQueue, setIsShowModalPrintQueue] = React.useState(false);
    const addQueueCall = useSingleAsync(addQueue);
    const [queue, setQueue] = React.useState<Queue | null>(null);


    const handleSubmitForm = async (values: any) => {
        if (service) {
            const customer = {
                name: values.name,
                phone: values.phone,
                ...(values.email && {email: values.email})
            };

            await addQueueCall.execute({
                customer,
                service: service,
                issueSource: source
            }).then(res => {
                setQueue(res);
                setIsShow(false);
                setIsShowModalPrintQueue(true);
                form.resetFields();
            }).catch(() => setQueue(null));
        }
    };

    return (
        <>
            <Button htmlType="submit" type="primary" size="large">{textOk}</Button>

            <Modal open={isShow} closable={false} footer={null}
            >
                <Flex justify="center" align="center">
                    <Typography.Title level={3}>Điền thông tin của bạn</Typography.Title>
                </Flex>
                <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
                    <Form.Item label="Họ và tên:" required name="name"
                               rules={personalNameRules}
                    >
                        <Input placeholder="Nhập họ và tên của bạn"/>
                    </Form.Item>
                    <Form.Item label="Số điện thoại:" required name="phone"
                               rules={phoneRules}
                    >
                        <Input placeholder="Nhập số điện thoại của bạn"/>
                    </Form.Item>
                    <Form.Item label="Email:" name="email"
                               rules={[
                                   {type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ'}
                               ]}
                    >
                        <Input placeholder="Nhập email của bạn"/>
                    </Form.Item>

                    <FormNote style={{marginBottom: '4.9rem'}}/>

                    <Flex align="center" justify="center">
                        <Flex justify="center" gap="large">
                            <Button style={{backgroundColor: '#FFF2E7'}}
                                    htmlType="button"
                                    type="primary"
                                    size="large" ghost
                                    onClick={() => {
                                        setIsShow(false);
                                        form.resetFields();
                                    }}
                            >
                                Hủy bỏ
                            </Button>
                            <Button htmlType="submit" type="primary" size="large">Xác nhận</Button>
                        </Flex>
                    </Flex>
                </Form>
            </Modal>
            {
                queue && <ModalQueueInfo isShow={isShowModalPrintQueue} setIsShow={setIsShowModalPrintQueue} queue={queue}/>
            }
        </>
    );
};

export default ModalAddQueue;