import React from 'react'
import { Flex, Typography, Button, Input } from 'antd'
import * as AntdIcons from '@ant-design/icons';
import { button } from './struct'
import AttendanceTable from './Tables';

const { Search } = Input;

const Attendance = ({ menu }) => {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <Flex style={{ justifyContent: 'flex-end', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
        <Search size="large" placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Button
          {...button}
          // size='large'
          icon={<AntdIcons.PlusOutlined />}
        >Add Student</Button>
      </Flex>
      <br />
      <br />
      <AttendanceTable />
    </div>
  )
}

export default Attendance