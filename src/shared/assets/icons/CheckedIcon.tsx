import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>;

const Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
            d="M15.5917 6.00834C15.5142 5.93023 15.422 5.86824 15.3205 5.82593C15.2189 5.78362 15.11 5.76184 15 5.76184C14.89 5.76184 14.7811 5.78362 14.6795 5.82593C14.578 5.86824 14.4858 5.93023 14.4083 6.00834L8.2 12.225L5.59167 9.60834C5.51123 9.53064 5.41628 9.46955 5.31224 9.42854C5.20819 9.38754 5.09709 9.36743 4.98527 9.36937C4.87345 9.3713 4.76311 9.39524 4.66055 9.43982C4.55798 9.4844 4.4652 9.54874 4.3875 9.62917C4.3098 9.70961 4.24871 9.80456 4.2077 9.9086C4.1667 10.0127 4.14659 10.1238 4.14853 10.2356C4.15046 10.3474 4.1744 10.4577 4.21898 10.5603C4.26356 10.6629 4.3279 10.7556 4.40833 10.8333L7.60834 14.0333C7.6858 14.1114 7.77797 14.1734 7.87952 14.2157C7.98107 14.2581 8.08999 14.2798 8.2 14.2798C8.31001 14.2798 8.41893 14.2581 8.52048 14.2157C8.62203 14.1734 8.7142 14.1114 8.79167 14.0333L15.5917 7.23334C15.6763 7.1553 15.7438 7.06059 15.7899 6.95518C15.8361 6.84976 15.8599 6.73592 15.8599 6.62084C15.8599 6.50575 15.8361 6.39192 15.7899 6.2865C15.7438 6.18108 15.6763 6.08637 15.5917 6.00834Z"
            fill="white"/>
    </svg>
);

const CheckedIcon = ({...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <Svg/>}/>;
export default CheckedIcon;