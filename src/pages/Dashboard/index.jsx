import React from 'react'
import { Card, Flex, Space, Typography, Row, Col, Calendar, theme, Avatar } from 'antd';
import { header, title } from './struct';

const { Text } = Typography



const Dashboard = () => {
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: '100%',
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    console.log('called');

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card title="Upcoming LAB Class" bordered={false}>
                    Card content
                    <div style={wrapperStyle}>
                        <Calendar fullscreen={false} onPanelChange={(e) => onPanelChange(e)} />
                    </div>
                </Card>
                <br/>
                <Card style={{ width: '100%', backgroundColor:'#E3F5FF' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <br/>
                <Card style={{ width: '100%', backgroundColor:'#E5ECF6' }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="LAB Discussion" bordered={false}>
                    <Flex style={{ gap: 10 }}>
                        <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large" gap={4}>
                            dp
                        </Avatar>
                        <Flex vertical>
                            <Text>Sara Ali</Text>
                            <Text>Dept Head of CSE</Text>
                        </Flex>
                    </Flex>
                    <br />
                    <Text {...title}>What is an ER diagram, and what are its types/uses?</Text>
                    <br />
                </Card>
            </Col>
        </Row>
    )
}

export default Dashboard