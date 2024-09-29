import React, {useState} from 'react';
import {imgAvatar} from "@assets/images";
import {CameraOutlined} from "@ant-design/icons";

type AvatarUploadProps = {
    disabled?: boolean;
}

const AvatarUpload = (props: AvatarUploadProps) => {
    const {disabled} = props;
    const [imgUrl, setImgUrl] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgUrl(file);
        }
    };

    return (
        <div className="avatar-box">
            <div className="avatar-box__wrapper">
                <img
                    src={imgUrl ? URL.createObjectURL(imgUrl) : imgAvatar}
                    alt="Avatar"/>
                <div className="avatar-box__btn-upload">
                    <label htmlFor="input-avatar">
                        <CameraOutlined/>
                    </label>
                    <input hidden
                           disabled={disabled}
                           type="file"
                           onChange={handleImageChange}
                           id="input-avatar"
                           accept="image/png, image/jpeg, image/jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarUpload;