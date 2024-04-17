import React from 'react';
import { Space, Tag } from 'antd';

export const TableCol =()=>{
 return [
    {
        title: 'Student ID',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
      },
    {
        title: 'Student Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
      },
      {
        title: 'Approval Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 6 ? 'geekblue' : 'green';
              if (tag === 'Pending') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
    //   {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //       <Space size="middle">
    //         <a href='/'>Edit {record?.a}</a>
    //         <a href='/'>Delete</a>
    //       </Space>
    //     ),
    //   }
 ]   
}