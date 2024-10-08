import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";
import {SizeProps} from "@assets/icons/interface";

type ICustomIconProps = GetProps<typeof Icon>

const Svg = ({width = 22, height = 19}: SizeProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 19" fill="none">
        <path
            d="M21 7.18601C21 9.06092 19.9887 10.7464 18.3785 11.9193C18.3228 11.9583 18.2921 12.0251 18.2893 12.092L18.2197 13.9168C18.2113 14.1619 17.9411 14.304 17.7349 14.1731L16.1888 13.2008C16.1888 13.2008 16.1888 13.2008 16.186 13.2008C16.0968 13.1423 15.9882 13.1256 15.8879 13.1562C14.9685 13.4431 13.9684 13.6019 12.9209 13.6019C12.907 13.6019 12.893 13.6019 12.8791 13.6019C12.907 13.4181 12.9209 13.2314 12.9209 13.042C12.9209 10.426 10.252 8.30594 6.95906 8.30594C6.28209 8.30594 5.63297 8.39509 5.02564 8.55946C4.90306 8.1165 4.83899 7.65404 4.83899 7.18044C4.83899 3.63398 8.45509 0.761719 12.9181 0.761719C17.3839 0.767291 21 3.64234 21 7.18601Z"
            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
        <path
            d="M5.02842 8.56445C2.68547 9.20242 1 10.9687 1 13.047C1 14.4288 1.74662 15.6741 2.93342 16.5405C2.97521 16.5711 2.99749 16.6185 3.00028 16.6686L3.05042 18.0142C3.056 18.1953 3.25658 18.2984 3.40981 18.2037L4.55203 17.4849C4.56038 17.4793 4.57153 17.471 4.57989 17.4654C4.62167 17.432 4.67739 17.4208 4.72754 17.4376C5.41844 17.6604 6.17064 17.783 6.96183 17.783C10.0152 17.783 12.5336 15.9582 12.8819 13.6069"
            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
);

const ChatIcon = ({height, width,...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <Svg width={width} height={height}/>}/>;
export default ChatIcon;