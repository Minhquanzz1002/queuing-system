import React from "react";
import {GetProps} from "antd";
import Icon from "@ant-design/icons";

type ICustomIconProps = GetProps<typeof Icon>

const Svg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M6.80101 3.52148C6.70155 3.52148 6.60617 3.56099 6.53584 3.63132C6.46552 3.70165 6.42601 3.79703 6.42601 3.89648L6.42601 8.24124L4.81651 6.63098C4.78164 6.59612 4.74025 6.56846 4.6947 6.54959C4.64914 6.53072 4.60032 6.52101 4.55101 6.52101C4.5017 6.52101 4.45288 6.53072 4.40732 6.54959C4.36177 6.56846 4.32038 6.59612 4.28551 6.63098C4.25064 6.66585 4.22299 6.70724 4.20412 6.7528C4.18525 6.79835 4.17554 6.84718 4.17554 6.89648C4.17554 6.94579 4.18525 6.99462 4.20412 7.04017C4.22299 7.08573 4.25064 7.12712 4.28551 7.16198L6.53551 9.41198C6.57034 9.44691 6.61173 9.47461 6.65728 9.49352C6.70284 9.51242 6.75168 9.52216 6.80101 9.52216C6.85034 9.52216 6.89918 9.51242 6.94474 9.49352C6.99029 9.47461 7.03168 9.44691 7.06651 9.41198L9.31651 7.16198C9.35138 7.12712 9.37903 7.08573 9.3979 7.04017C9.41677 6.99462 9.42648 6.94579 9.42648 6.89648C9.42648 6.84718 9.41677 6.79835 9.3979 6.7528C9.37903 6.70724 9.35138 6.66585 9.31651 6.63098C9.24609 6.56057 9.15059 6.52101 9.05101 6.52101C9.0017 6.52101 8.95288 6.53072 8.90732 6.54959C8.86177 6.56846 8.82038 6.59612 8.78551 6.63098L7.17601 8.24123L7.17601 3.89648C7.17601 3.79703 7.1365 3.70165 7.06617 3.63132C6.99585 3.56099 6.90047 3.52148 6.80101 3.52148Z"
              fill="currentColor"/>
    </svg>
);

const ArrowDownShortIcon = (props: Partial<ICustomIconProps>) => <Icon {...props} component={Svg}/>;
export default ArrowDownShortIcon;