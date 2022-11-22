import { Layout, Menu, notification } from "antd";
import React, { useEffect, useState } from "react";
import fontSize from "theme/fontSize";
import color from "theme/color";
import { useRouter } from "next/router";
import Styles from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedKey, addOpenKey } from "store/reducer/sider.reducer";
import { menuRouterConfig, routerConfig } from "utils/constants";

const { Sider } = Layout;

const SiderBar = ({ smallScreen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const siderPicker = useSelector((state) => state.reducers.sider);

  useEffect(() => {
    const path = router?.pathname;
    const currentRoute = routerConfig().find((r) => r.route === path);
    const key = currentRoute?.key;
    const sub = currentRoute?.sub;

    if (key) {
      setSelectedKey([key]);
      setOpenKey([sub]);
    }
  }, []);

  const handleSelectMenu = (e) => {
    const { key } = e;
    const route = routerConfig().find((r) => r.key === key)?.route;
    if (route) {
      setSelectedKey([key]);
      router.push(route);
    } else {
      notification.error({ message: "Menu chưa được thiết lập", duration: 1 });
    }
  };

  const goDashBoard = () => {
    setSelectedKey([]);
    setOpenKey([]);
    router.replace("/dashboard");
  };

  const setSelectedKey = (v) => {
    dispatch(addSelectedKey(v));
  };

  const setOpenKey = (v) => {
    console.log("🚀 - setOpenKey - v", v)
    if (v) {
      dispatch(addOpenKey(v));
    }
  };

  return (
    <Sider
      theme={"light"}
      breakpoint="xl"
      collapsedWidth="0"
      trigger={null}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1010,
      }}
    >
      <div
        className={Styles.name_branch}
        style={{
          fontSize: fontSize.medium,
          color: color.navyBlue,
        }}
        onClick={goDashBoard}
      >
        Minh Phú Pharmacy
      </div>
      {!smallScreen ? (
        <Menu
          mode="inline"
          selectedKeys={siderPicker?.selectedKey}
          openKeys={siderPicker?.openKey}
          style={{
            height: "100%",
          }}
          items={menuRouterConfig()}
          onSelect={handleSelectMenu}
          onOpenChange={(e) => {
            setOpenKey(e);
          }}
        />
      ) : null}
    </Sider>
  );
};

export default SiderBar;
