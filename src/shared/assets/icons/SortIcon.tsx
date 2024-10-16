import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";
import {SizeProps} from "@assets/icons/interface";

type ICustomIconProps = GetProps<typeof Icon> & SizeProps;

const Svg = ({width = 12, height = 13}: SizeProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 13" fill="none">
        <path
            d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z"
            fill="white"/>
        <path
            d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z"
            fill="white"/>
    </svg>
);

const SortIcon = ({height, width, ...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <Svg
    height={height} width={width}/>}/>;
export default SortIcon;