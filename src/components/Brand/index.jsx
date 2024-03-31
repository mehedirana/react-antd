import React from 'react'
import { Flex, Space, Image, Typography } from 'antd';
import { logoStruct, headlineStruct } from './struct';

import IUBImg from './images/iub.png';

const { Text, Title } = Typography;
const { logoSection, logo } = logoStruct;
const { headlineSection, headline } = headlineStruct;

export const BrandLogo = () => {
    return (
        <div {...logoSection}>
            <Flex>
                <Space>
                    <Image {...logo} src={IUBImg} />
                    <Text>Independent University, Bangladesh</Text>
                </Space>
            </Flex>
        </div>
    )
}

export const BrandHeadline = () => {
    return (
      <Flex {...headlineSection}>
        <Title {...headline}>LAB MASTER</Title>
      </Flex>
    );
  };