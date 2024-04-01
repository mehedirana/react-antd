import React from 'react'
import { Layout, Menu, Flex,  Input, Avatar } from 'antd';
import { headerStruct, layoutStruct, siderStruct } from './struct';
import { BrandHeadline, BrandLogo } from '../../components/Brand';
import * as AntdIcons from '@ant-design/icons';

const { Header, Sider } = Layout;
const { Search } = Input;

const { header } = headerStruct;

const CustomLayout = () => {

    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label
        };
    };

    const items = [
        getItem('Dashboard', '/home', <AntdIcons.ProductOutlined />),
        getItem('Resource Store', '/store', <AntdIcons.UsergroupAddOutlined />),
        getItem('Attendance', '/attendance', <AntdIcons.MailOutlined />),
        getItem('Problem Discussion', '/discussion', <AntdIcons.AccountBookOutlined />),
        getItem('Settings', '/settings', <AntdIcons.SettingOutlined />),
    ];



    const handleClickOnMenuItem = (e) => {
        console.log(e);
    }

    return (
        <Layout {...layoutStruct}>
            <Header style={{ background: '#FFF' }}>
                <Flex {...header}>
                    <BrandHeadline />
                        <Search
                            placeholder="Search Anything...."
                            // onSearch={onSearch} 
                            style={{ width: '50%' }}
                        />
                        <Avatar size={50} icon={<AntdIcons.UserOutlined />} />
                </Flex>
            </Header>
            <Layout>
                <Sider {...siderStruct}>
                    <BrandLogo />

                    <Menu
                        mode="inline"
                        items={items}
                        onClick={handleClickOnMenuItem}
                    />
                </Sider>
            </Layout>
        </Layout>
    )
}

export default CustomLayout