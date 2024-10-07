import React from 'react';
import {Col, Flex, Modal, Row, Typography} from "antd";
import "./styles.scss";
import {formatDateTime} from "@helper/functions";
import {CloseOutlined} from "@ant-design/icons";
import {Queue} from "@modules/queue/interface";

type ModalQueueInfoProps = {
    isShow: boolean;
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    queue: Queue;
};

const ModalQueueInfo = ({isShow, setIsShow, queue} : ModalQueueInfoProps) => {
    const footer = (
        <Row>
            <Col flex="auto">
                <Flex vertical>
                    <Typography.Text style={{textAlign: 'start'}}>Thời gian cấp:</Typography.Text>
                    <Typography.Text style={{textAlign: 'start'}}>Hạn sử dụng:</Typography.Text>
                </Flex>
            </Col>
            <Col flex="auto">
                <Flex vertical>
                    <Typography.Text>{formatDateTime(queue.issueTime)}</Typography.Text>
                    <Typography.Text>{formatDateTime(queue.expiryDate)}</Typography.Text>
                </Flex>
            </Col>
        </Row>
    );

    return (
        <Modal open={isShow} onCancel={() => setIsShow(false)} className="modal-queue-info" footer={footer} closeIcon={<CloseOutlined style={{fontSize: '150%'}}/>}>
            <Flex vertical justify="center" align="center" gap="middle">
                <div className="modal-queue-info__ticket-number-label">Số thứ tự được cấp</div>
                <div className="modal-queue-info__ticket-number">{queue.serialNumber}</div>
                <div className="modal-queue-info__service-info">
                    DV: {queue.service.name} <strong>(tại quầy số 1)</strong>
                </div>
            </Flex>
        </Modal>
    );
};

export default ModalQueueInfo;