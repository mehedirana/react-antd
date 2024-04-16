import React from 'react'
import { Flex, Typography, Button } from 'antd'
import { header, button } from './struct'
import * as AntdIcons from '@ant-design/icons';
import ResourceTable from './Tables';

const { Text } = Typography

const ResourceStore = ({ menu }) => {
  return (
    <div>
      <Flex style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Text {...header}>Resource List</Text>
        <Button
          {...button}
          icon={<AntdIcons.PlusOutlined />}
        >Add Resource</Button>
      </Flex>
      <br/>
      <br/>
      <ResourceTable />
    </div>
  )
}

export default ResourceStore