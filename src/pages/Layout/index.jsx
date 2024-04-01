import React, { useEffect } from 'react'
import { Layout, Menu, Flex, Input, Avatar } from 'antd';
import { contentStruct, headerStruct, layoutStruct, siderStruct } from './struct';
import { BrandHeadline, BrandLogo } from '../../components/Brand';
import * as AntdIcons from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../store/menu/menuAction';
import { useLocation, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Store from '../Store';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const { header } = headerStruct;

const CustomLayout = () => {
    const menu = useSelector((e)=> e.menu)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

console.log(menu);
    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label
        };
    };

    const items = [
        getItem('Dashboard', '/dashboard', <AntdIcons.ProductOutlined />),
        getItem('Resource Store', '/resource-store', <AntdIcons.UsergroupAddOutlined />),
        getItem('Attendance', '/attendance', <AntdIcons.MailOutlined />),
        getItem('Problem Discussion', '/problem-discussion', <AntdIcons.AccountBookOutlined />),
        getItem('Settings', '/settings', <AntdIcons.SettingOutlined />),
    ];



    const handleClickOnMenuItem = (e) => {
        navigate(`${e.key}`)
        dispatch(
            selectMenu(
            {
                currentMenu: e.key,
                currentMenuName: e.key.split('/')?.[1]
              }
        ))
    }

    let toRender = null;
    if(menu?.currentMenuName === 'dashboard') toRender = <Dashboard menu={menu}/> 
    else if(menu?.currentMenuName === 'store') toRender = <Store menu={menu}/>
    else if(menu?.currentMenuName === 'store'){}

    //    useEffect(()=>{
    //       dispatch(selectMenu(

    //       ))
    //    },[location])

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
                <Content {...contentStruct}>
                    {toRender}
                </Content>
            </Layout>
        </Layout>
    )
}

export default CustomLayout