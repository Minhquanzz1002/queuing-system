import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";
import {SizeProps} from "@assets/icons/interface";

type ICustomIconProps = GetProps<typeof Icon> & SizeProps;

const LayerSvg = ({width = 20, height = 20}: SizeProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#clip0_2710_3362)">
            <path d="M1.66666 14.167L10 18.3337L18.3333 14.167" stroke="currentColor" strokeWidth="1.66667"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.66666 10L10 14.1667L18.3333 10" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M10 1.66699L1.66666 5.83366L10 10.0003L18.3333 5.83366L10 1.66699Z" stroke="currentColor"
                  strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_2710_3362">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const LayerIcon = ({height, width,...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <LayerSvg height={height} width={width}/>}/>;
export default LayerIcon;