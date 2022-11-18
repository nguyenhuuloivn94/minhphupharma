import { Layout } from "antd";
import React, { useEffect, useRef } from "react";
import SideBar from "./SideBar";
import color from "theme/color";
import useWindowSize from "hook/useWindowSize";
import HeaderBar from "./HeaderBar";
import DrawerSider from "./DrawerSider";

const { Content, Footer } = Layout;

export default ({ children }) => {
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
    </div>
  );
};
