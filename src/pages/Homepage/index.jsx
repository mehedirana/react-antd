import React from 'react'
import { Button, Space, Typography } from "antd";
import { button, buttonSection, container, subTitle, titleOne, titleSection, titleTwo } from './struct';
import { useDispatch } from 'react-redux';
import { setRole } from '../../store/role/roleAction';
import { useNavigate } from "react-router-dom"

const { Title } = Typography

const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onStudentClick = () => {
        dispatch(setRole('student'))
        navigate('/login')
    }
    const onTeacherClick = () => {
        dispatch(setRole('teacher'))
        navigate('/login')
    }

    return (
        <div {...container}>
            <Space {...titleSection}>
                <Title {...titleOne}>LAB</Title>
                <Title {...titleTwo}>MASTER</Title>
            </Space>
            <Title {...subTitle} level={3}>Are you a Student or Teacher ?</Title>
            <Space {...buttonSection}>
                <Button
                    onClick={() => onStudentClick()}
                    {...button}>
                    Student
                </Button>
                <Button
                    onClick={() => onTeacherClick()}
                    {...button}>
                    Teacher
                </Button>
            </Space>

        </div>
    )
}

export default HomePage