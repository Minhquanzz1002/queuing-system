import React from 'react';
import {Button, ButtonProps} from "antd";

const ButtonLink = (props: ButtonProps) => {
    const {children, style, ...rest} = props;
    return (
        <Button type="link"
                style={{textDecorationLine: 'underline', paddingInline: 0, fontSize: '1.4rem', ...style}} {...rest}>
            {children}
        </Button>
    );
};

export default ButtonLink;