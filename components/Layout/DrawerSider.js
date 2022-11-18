import { Drawer, Menu, notification } from "antd";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import fontSize from "theme/fontSize";
import color from "theme/color";
import { useRouter } from "next/router";
import {
  DatabaseOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  MedicineBoxOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addSelectedKey, addOpenKey } from "store/reducer/sider.reducer";

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
  },
  {
    key: "3",
    route: "/manage-drug-order",
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

const DrawerSider = ({}, ref) => {
  const dispatch = useDispatch();
  const siderPicker = useSelector((state) => state.reducers.sider);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useImperativeHandle(ref, () => ({
    show: () => showDrawer(),
    hide: () => onClose(),
  }));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSelectMenu = (e) => {
    const { key } = e;
    const route = routesData.find((r) => r.key === key)?.route;
    if (route) {
      setSelectedKey([key]);
      router.push(route);
      onClose();
    } else {
      notification.error({ message: "Menu chưa được thiết lập", duration: 1 });
    }
  };

  const goDashBoard = () => {
    onClose();
    setSelectedKey([]);
    setOpenKey([]);
    router.replace("/dashboard");
  };

  const setSelectedKey = (v) => {
    dispatch(addSelectedKey(v));
  };

  const setOpenKey = (v) => {
    if (v) {
      dispatch(addOpenKey(v));
    }
  };

  return (
    <Drawer
      title={
        <div
          style={{
            fontSize: fontSize.medium,
            color: color.navyBlue,
            padding: 16,
            cursor: "pointer",
            width: "fit-content",
          }}
          onClick={goDashBoard}
        >
          Minh Phú Pharmacy
        </div>
      }
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      getContainer={false}
      style={{
        position: "absolute",
      }}
      headerStyle={{ padding: 0 }}
      bodyStyle={{ padding: 0 }}
    >
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
    </Drawer>
  );
};
export default forwardRef(DrawerSider);
