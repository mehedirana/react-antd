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
    style:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'#fff',
      minHeight:100,
      flexWrap:'wrap',
      position:'sticky',
      top:0,
      zIndex:999,
      boxShadow: "8px 8px 24px -25px rgba(66, 68, 90, 1)"
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