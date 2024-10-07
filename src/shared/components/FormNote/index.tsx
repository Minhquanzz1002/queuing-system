import React from 'react';
import {IconAsterisk} from "@assets/icons";
import {Flex} from "antd";

type FormNoteProps = {
    style?: React.CSSProperties;
}

const FormNote = ({style}: FormNoteProps) => {
    return (
        <Flex align="center" gap="small" className="form-note" style={style}>
            <IconAsterisk/>
            <span>Là trường thông tin bắt buộc</span>
        </Flex>
    );
};

export default FormNote;