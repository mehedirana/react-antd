import { FloatButton } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";


export const layoutStruct = {
  style: { minHeight: "100vh" },
  flexDirection: 'column'
};

export const siderStruct = {
  theme: "light",
  breakpoint: "lg",
  collapsedWidth: "0",
  width: 300,
  trigger: <FloatButton type="primary" icon={<UnorderedListOutlined />} />,
  reverseArrow: true,
};

export const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

export const headerStruct = {
  header: {
    wrap: "wrap",
    gap: "middle",
    justify: "space-between",
    align: "center",
    backgroundColor: '#4096ff',
    style:{
      marginTop:'7px'
    }
  },
  actions: {
    gap: "middle",
    wrap: "wrap",
  },
};

export const contentStruct = {
  style: {
    margin: "24px 24px",
    minHeight: 280,
  },
};