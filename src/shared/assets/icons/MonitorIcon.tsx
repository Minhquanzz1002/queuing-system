import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";
import {SizeProps} from "@assets/icons/interface";

type ICustomIconProps = GetProps<typeof Icon> & SizeProps;

const MonitorSvg = ({width = 20, height = 20}: SizeProps) => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="vuesax/linear/monitor">
            <g id="monitor">
                <path id="Vector"
                      d="M5.36666 1.66699H14.625C17.5917 1.66699 18.3333 2.40866 18.3333 5.36699V10.642C18.3333 13.6087 17.5917 14.342 14.6333 14.342H5.36666C2.40833 14.3503 1.66666 13.6087 1.66666 10.6503V5.36699C1.66666 2.40866 2.40833 1.66699 5.36666 1.66699Z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_2" d="M10 14.3496V18.3329" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path id="Vector_3" d="M1.66666 10.833H18.3333" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_4" d="M6.25 18.333H13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </g>
    </svg>
);

const MonitorIcon = ({height, width,...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <MonitorSvg height={height} width={width}/>}/>;
export default MonitorIcon;