import React from 'react'
import { Table } from 'antd';
import { table } from './struct';
import { TableCol } from './getTableCol';

const data = [
    {
        key: '1',
        id_number: 2001,
        publisher_name: 'Ronok',
        topic: 'Machine learning',
        date: '7th-9th August',
    },
    {
        key: '2',
        id_number: 2002,
        publisher_name: 'Mahir',
        topic: 'Artificial Intelligence',
        date: '7th-9th August',
    },
    {
        key: '3',
        id_number: 2003,
        publisher_name: 'Tony',
        topic: 'EEE',
        date: '7th-9th August',
    },
];

const ResourceTable = () => {
    const columns = [
        ...TableCol()
    ];

    return (
        <Table {...table} columns={columns} dataSource={data} />
    )
}

export default ResourceTable