import { BackTop, Button, Layout } from "antd";
import React, { useEffect, useRef } from "react";
import SideBar from "./SideBar";
import color from "theme/color";
import useWindowSize from "hook/useWindowSize";
import HeaderBar from "./HeaderBar";
import DrawerSider from "./DrawerSider";
import { CaretUpOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
  const drawerSiderRef = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    if (size.smallScreen) {
    } else {
      drawerSiderRef.current?.hide();
    }
  }, [size.smallScreen]);

  const openDrawSider = () => {
    drawerSiderRef.current?.show();
  };

  const closeDrawSider = () => {
    drawerSiderRef.current?.hide();
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar smallScreen={size.smallScreen} />
        <Layout
          style={{
            marginLeft: size.smallScreen ? 0 : 200,
          }}
        >
          <HeaderBar
            onOpenDrawSider={openDrawSider}
            onCloseDrawSider={closeDrawSider}
            smallScreen={size.smallScreen}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
              backgroundColor: color.bgContent,
            }}
          >
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

      <DrawerSider ref={drawerSiderRef} />
      <BackTop>
        <Button
          shape="circle"
          style={{ background: "rgba(0,0,0,0.3)", border: "none" }}
          icon={<CaretUpOutlined style={{ color: "rgba(0,0,0,0.5)" }} />}
        ></Button>
      </BackTop>
    </div>
  );
};

export default LayoutComponent;
