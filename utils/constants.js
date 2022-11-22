import {
  DatabaseOutlined,
  FolderOpenOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  MedicineBoxOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

export function menuRouterConfig() {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

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

  return menuData;
}

export function routerConfig() {
  const routesData = [
    {
      key: "1",
      route: "/single-order",
      sub: "sub1",
    },
    {
      key: "3",
      route: "/drug-order-management",
      sub: "",
    },
    {
      key: "4",
      route: "/drug-inventory-management",
      sub: "",
    },
  ];
  return routesData;
}
