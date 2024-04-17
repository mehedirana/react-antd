import React from 'react'
import { Table } from 'antd';
import { TableCol } from './getTableCol';

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

const AttendanceTable = () => {
    const columns = [
        ...TableCol()
    ];

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default AttendanceTable