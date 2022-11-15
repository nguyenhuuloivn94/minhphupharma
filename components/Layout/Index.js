import { Layout } from "antd";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import color from "theme/color";
import useWindowSize from "hook/useWindowSize";
import HeaderBar from "./HeaderBar";

const { Content, Footer } = Layout;

export default ({ children }) => {
  const size = useWindowSize();

  useEffect(() => {}, []);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout
          style={{
            marginLeft: size.width < 1200 ? 0 : 200,
          }}
        >
          <HeaderBar />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            {children}
          </Content>
          <Footer
            style={{
              backgroundColor: color.bg,
            }}
          >
            <div style={{ textAlign: "end" }}>
              <span style={{ color: color.navyBlue }}>Minh Phú Pharmacy</span> ©
              2022
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
