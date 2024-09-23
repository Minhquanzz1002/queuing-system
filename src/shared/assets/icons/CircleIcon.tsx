import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
        <circle cx="4" cy="4.5" r="4" fill="currentColor"/>
    </svg>
);

const CircleIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={Svg}/>;
export default CircleIcon;