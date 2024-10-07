import {Rule} from 'antd/lib/form';

export const phoneRules: Rule[] = [
    {required: true, message: 'Vui lòng nhập số điện thoại'},
    {
        pattern: /^0([35789])[0-9]{8}$/,
        message: 'Số điện thoại không hợp lệ'
    }
];

export const personalNameRules: Rule[] = [
    {required: true, message: 'Vui lòng nhập họ tên'},
    () => ({
        validator(_, value) {
            if (!value || value.trim().length > 3) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Họ tên không hợp lệ. Tối thiểu 3 ký tự'));
        }
    })
];

export const passwordRules: Rule[] = [
    {required: true, message: 'Vui lòng nhập mật khẩu'},
    {min: 8, message: 'Mật khẩu phải có ít nhất 8 ký tự'},
    {
        pattern: /^\S*$/,
        message: 'Mật khẩu không được chứa khoảng trắng'
    }
];

export const repeatPasswordRules: Rule[] = [
    {required: true, message: 'Vui lòng nhập mật khẩu'},
    ({getFieldValue}) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Mật khẩu không khớp'));
        }
    })
];