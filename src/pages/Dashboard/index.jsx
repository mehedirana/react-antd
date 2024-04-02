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
        // <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        //     <Space direction='vertical' style={{}}  >
        //         <Text {...header}>Upcoming LAB Class</Text>
        //         <Card style={{ background: '#E3F5FF', padding:'30px', minWidth:400 }}>
        //             <Space direction='vertical' >
        //                 <Text>Attendance</Text>
        //                 <br/>
        //                 <div style={{justifyContent:'space-between', display:'flex'}}>
        //                     <Text>2.9K</Text>
        //                     <Space direction='vertical'>
        //                         <Text>27%</Text>
        //                         <Text>Last Month</Text>
        //                     </Space>
        //                 </div>
        //             </Space>
        //         </Card>
        //     </Space>
        //     <Space direction='vertical' style={{}}>
        //         <Text {...header}>LAB Discussion</Text>
        //         <Card style={{ background: '#E3F5FF' }}>
        //             B
        //         </Card>
        //     </Space>
        // </div>
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