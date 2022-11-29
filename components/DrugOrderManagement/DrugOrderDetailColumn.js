import { Button, Space, Tag } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import color from "theme/color";
import { formatMoney, formatDateWithDayjs } from "utils/helperCenter";

const OrderDetailColumns = () => {
  const columns = [
    {
      title: "STT",
      key: "key",
      width: 30,
      render: (_, row, index) => index + 1,
    },
    {
      title: "Mã thuốc",
      dataIndex: "name",
      key: "name",
      width: 80,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên thuốc",
      dataIndex: "age",
      width: 80,
      key: "age",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Số lượng",
      sorter: (a, b) => a.address.length - b.address.length,
      dataIndex: "address",
      width: 80,
      key: "address",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Đơn giá (VNĐ)",
      sorter: (a, b) => a.address.length - b.address.length,
      dataIndex: "unitPrice",
      width: 50,
      key: "address",
      render: () => {
        return <div>lẻ</div>;
      },
    },
    {
      title: "Tổng tiền (VNĐ)",
      dataIndex: "total",
      sorter: (a, b) => a.address.length - b.address.length,
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Đơn vị",
      dataIndex: "total",
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "total",
      width: 80,
      key: "address",
      render: () => {
        return (
          <>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </>
        );
      },
    },
    {
      title: "Loại bán",
      dataIndex: "total",
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "total",
      width: 80,
      key: "address",
      render: () => {
        return (
          <div style={{ color: color.tuna }}>
            {formatDateWithDayjs(new Date(), "hh:mm DD/MM/YYYY")}
          </div>
        );
      },
    },
  ];
  return columns;
};

export default OrderDetailColumns;
