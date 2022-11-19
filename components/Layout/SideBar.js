import { Layout, Menu, notification } from "antd";
import {
  DatabaseOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  MedicineBoxOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import fontSize from "theme/fontSize";
import color from "theme/color";
import { useRouter } from "next/router";
import Styles from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedKey, addOpenKey } from "store/reducer/sider.reducer";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const routesData = [
  {
    key: "1",
    route: "/single-order",
    sub: "sub1",
  },
  {
    key: "3",
    route: "/manage-drug-order",
    sub: "",
  },
];

const menuData = [
  getItem("Bán thuốc", "sub1", <ShoppingCartOutlined />, [
    getItem("Đơn lẻ", "1"),
    getItem("Theo mẫu", "2"),
  ]),
  getItem("Quản lý đơn hàng", "3", <FolderOpenOutlined />),
  getItem("Quản lý kho", "4", <DatabaseOutlined />),
  getItem("Đơn thuốc mẫu", "5", <FileTextOutlined />),
  getItem("Quản lý thuốc", "sub2", <MedicineBoxOutlined />, [
    getItem("Danh mục", "6"),
    getItem("Nhóm thuốc", "7"),
    getItem("Đơn vị", "8"),
  ]),
  getItem("Quản lý tài khoản", "9", <SolutionOutlined />),
];

const SiderBar = ({ smallScreen }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const siderPicker = useSelector((state) => state.reducers.sider);

  useEffect(() => {
    const path = router?.pathname;
    const currentRoute = routesData.find((r) => r.route === path);
    const key = currentRoute?.key;
    const sub = currentRoute?.sub;

    if (key) {
      setSelectedKey([key]);
      setOpenKey([sub]);
    }
  }, []);

  const handleSelectMenu = (e) => {
    const { key } = e;
    const route = routesData.find((r) => r.key === key)?.route;
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
          items={menuData}
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
