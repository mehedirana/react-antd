import React from 'react'
import { Button, Space, Typography } from "antd";
import { button, buttonSection, container, subTitle, titleOne, titleSection, titleTwo } from './struct';

const { Title } = Typography

const HomePage = () => {
    return (
        <div {...container}>
            <Space {...titleSection}>
                <Title {...titleOne}>LAB</Title>
                <Title {...titleTwo}>MASTER</Title>
            </Space>
            <Title {...subTitle} level={3}>Are you a Student or Teacher ?</Title>
            <Space {...buttonSection}>
                <Button {...button} type="primary">Student</Button>
                <Button {...button} type="primary">Teacher</Button>
            </Space>

        </div>
    )
}

export default HomePage