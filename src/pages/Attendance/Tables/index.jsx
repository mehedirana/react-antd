import React from 'react'
import { TableCol } from './getTableCol';
import { table } from './struct';
import { Table, Popconfirm, Flex } from 'antd';

const data = [
    {
        key: '1',
        id: 20021,
        name: 'John Brown',
        department: 'CSE',
        date: '23 jul,2023',
        tags: ['Active'],
    },
    {
        key: '2',
        id: 20022,
        name: 'John Brown',
        department: 'CSE',
        date: '23 jul,2023',
        tags: ['Active'],
    },
    {
        key: '3',
        id: 20023,
        name: 'John Brown',
        department: 'CSE',
        date: '23 jul,2023',
        tags: ['Pending'],
    },
];

const AttendanceTable = () => {

    const handleDelete = (row) => {
        console.log(row);
    }
    const handleEdit = (row) => {
        console.log(row);
    }

    const columns = [
        ...TableCol(),
        {
            title: 'Action',
            dataIndex: 'operation',
            render: (_, record) => (
                <Flex gap={10}>
                    <Popconfirm
                        title="Sure to Edit?"
                        onConfirm={() => handleEdit(record.key)}
                    >
                        <a>Edit</a>
                    </Popconfirm>
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.key)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Flex>
            )
        }
    ];

    return (
        <Table {...table} columns={columns} dataSource={data} />
    )
}

export default AttendanceTable