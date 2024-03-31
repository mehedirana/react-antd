import React from 'react'
import { Button, Input, Space, Typography } from "antd";
import * as AntdIcons from '@ant-design/icons';
import { button, buttonTwo, container, subTitle, titleOne, titleSection, titleTwo } from './struct';
const { Title, Text } = Typography

const LoginPage = () => {
    return (
        <div {...container}>
            <Space {...titleSection}>
                <Title {...titleOne}>LAB</Title>
                <Title {...titleTwo}>MASTER</Title>
            </Space>

                <Title {...subTitle} level={3}>Sign in</Title>
            <Space direction="vertical" >
                <Input placeholder="Basic usage" />
                <br />
                <Input placeholder="Basic usage" />
                <br />
                <Space style={{ justifyContent: 'space-between', width: '345px' }}>
                    <Button
                        {...button}
                        icon={<AntdIcons.ArrowRightOutlined />}
                    >LOGIN</Button>
                    <Text>Forgot your password?</Text>
                </Space>
                <br />
                <Button {...buttonTwo} >create new account</Button>
            </Space>
        </div>
    )
}

export default LoginPage