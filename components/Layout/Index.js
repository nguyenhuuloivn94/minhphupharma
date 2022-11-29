import { FloatButton, Layout } from "antd";
import React, { useEffect, useRef } from "react";
import SideBar from "./SideBar";
import color from "theme/color";
import useWindowSize from "hook/useWindowSize";
import HeaderBar from "./HeaderBar";
import DrawerSider from "./DrawerSider";
import Sign from "./../Authorization/Sign";

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

  return (
    <Sign>
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <HeaderBar
            onOpenDrawSider={openDrawSider}
            onCloseDrawSider={closeDrawSider}
            smallScreen={size.smallScreen}
          />
          <Layout
            style={{
              marginLeft: size.smallScreen ? 0 : 200,
            }}
          >
            <SideBar smallScreen={size.smallScreen} />
            <Content
              style={{
                margin: "24px 16px 0",
                overflow: "initial",
                backgroundColor: color.bgContent,
              }}
            >
              {children}
            </Content>
          </Layout>
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

        <DrawerSider ref={drawerSiderRef} />
        <FloatButton.BackTop />
      </div>
    </Sign>
  );
};

export default LayoutComponent;
