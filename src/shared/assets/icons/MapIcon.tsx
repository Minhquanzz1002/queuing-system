import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";
import {SizeProps} from "@assets/icons/interface";

type ICustomIconProps = GetProps<typeof Icon> & SizeProps;

const Svg = ({width = 30, height = 31}: SizeProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 31" fill="none">
        <path
            d="M26.65 6.81287L19.15 4.31287H19.0625C19.0043 4.30703 18.9457 4.30703 18.8875 4.31287H18.6H18.4375H18.35L11.25 6.75037L4.15 4.31287C3.96202 4.25089 3.76201 4.23443 3.56642 4.26485C3.37084 4.29528 3.18527 4.37172 3.025 4.48787C2.86345 4.60289 2.73159 4.7547 2.6403 4.93076C2.54901 5.10681 2.50092 5.30206 2.5 5.50037V23.0004C2.49933 23.2624 2.58103 23.5181 2.73356 23.7312C2.88609 23.9443 3.10173 24.104 3.35 24.1879L10.85 26.6879C11.1018 26.77 11.3732 26.77 11.625 26.6879V26.6879L18.75 24.3129L25.85 26.7504C25.9827 26.7684 26.1173 26.7684 26.25 26.7504C26.5114 26.7541 26.7665 26.6705 26.975 26.5129C27.1366 26.3979 27.2684 26.246 27.3597 26.07C27.451 25.8939 27.4991 25.6987 27.5 25.5004V8.00037C27.5007 7.73832 27.419 7.48268 27.2665 7.26959C27.1139 7.0565 26.8983 6.89673 26.65 6.81287V6.81287ZM10 23.7629L5 22.1004V7.23787L10 8.90037V23.7629ZM17.5 22.1004L12.5 23.7629V8.90037L17.5 7.23787V22.1004ZM25 23.7629L20 22.1004V7.23787L25 8.90037V23.7629Z"
            fill="currentColor"/>
    </svg>
);

const MapIcon = ({height, width, ...props}: Partial<ICustomIconProps>) => <Icon {...props} component={() => <Svg
    height={height} width={width}/>}/>;
export default MapIcon;