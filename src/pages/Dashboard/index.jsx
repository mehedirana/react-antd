import React from 'react'
import { Card, Flex, Space, Typography, Row, Col, Calendar, theme } from 'antd';
import { header } from './struct';

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
                        <Calendar fullscreen={false} onPanelChange={(e)=>onPanelChange(e)} />
                    </div>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="LAB Discussion" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
}

export default Dashboard