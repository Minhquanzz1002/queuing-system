import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
         fill="none">
        <path
            d="M12.3583 9.40833L8.82501 5.875C8.74754 5.79689 8.65538 5.7349 8.55383 5.69259C8.45228 5.65028 8.34336 5.6285 8.23335 5.6285C8.12334 5.6285 8.01442 5.65028 7.91287 5.69259C7.81132 5.7349 7.71915 5.79689 7.64168 5.875C7.48647 6.03114 7.39935 6.24235 7.39935 6.4625C7.39935 6.68266 7.48647 6.89386 7.64168 7.05L10.5917 10L7.64168 12.95C7.48647 13.1061 7.39935 13.3173 7.39935 13.5375C7.39935 13.7577 7.48647 13.9689 7.64168 14.125C7.71955 14.2022 7.81189 14.2633 7.91342 14.3048C8.01496 14.3463 8.12367 14.3673 8.23335 14.3667C8.34302 14.3673 8.45174 14.3463 8.55327 14.3048C8.6548 14.2633 8.74715 14.2022 8.82501 14.125L12.3583 10.5917C12.4365 10.5142 12.4984 10.422 12.5408 10.3205C12.5831 10.2189 12.6048 10.11 12.6048 10C12.6048 9.88999 12.5831 9.78107 12.5408 9.67952C12.4984 9.57797 12.4365 9.4858 12.3583 9.40833Z"
            fill="currentColor"/>
    </svg>
);

const ChevronRightIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={Svg}/>;
export default ChevronRightIcon;