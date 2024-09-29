import React, {useState} from 'react';
import {Checkbox, CheckboxProps, Col, Flex, Form, Input, Row, Typography} from "antd";
import {IconAsterisk} from "@assets/icons";
import Card from "@shared/components/Card";

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const FormRole = () => {
    const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list: string[]) => {
        setCheckedList(list);
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    return (
        <Row gutter={[24, 0]}>
            <Col span={12}>
                <Form.Item label="Tên vai trò:" name="name" required
                           rules={[
                               {required: true, message: 'Vui lòng nhập tên vai trò'}
                           ]}
                >
                    <Input placeholder="Nhập mã thiết bị" size="large" autoFocus/>
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={4} placeholder="Nhập mô tả" size="large"/>
                </Form.Item>

                <Flex align="center" gap="small"
                      style={{fontSize: '1.4rem', lineHeight: '2.1rem', color: '#7E7D88'}}>
                    <IconAsterisk/>
                    <span>Là trường thông tin bắt buộc</span>
                </Flex>
            </Col>
            <Col span={12}>
                <Form.Item label="Phân quyền theo chức năng" required>
                    <Card style={{background: '#FFF2E7', minHeight: 'unset', borderRadius: '0.8rem'}}>
                        <Typography.Title level={4}>Nhóm chức năng A</Typography.Title>
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            Check all
                        </Checkbox>
                        <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
                    </Card>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default FormRole;