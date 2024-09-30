import React, {useMemo, useState} from 'react';
import {CaretDownOutlined, CaretUpOutlined} from "@ant-design/icons";
import {Select as SelectAntd, SelectProps as SelectAntdProps} from "antd";

const Select = (props: SelectAntdProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const suffixIcon = useMemo(() => (
        isOpen ? <CaretUpOutlined style={{color: '#FF7506'}}/> : <CaretDownOutlined style={{color: '#FF7506'}}/>
    ), [isOpen]);

    return (
        <SelectAntd size="large"
                    suffixIcon={suffixIcon}
                    {...props}
                    onDropdownVisibleChange={(open) => setIsOpen(open)}
        />
    );
};

Select.Option = SelectAntd.Option;

export default Select;