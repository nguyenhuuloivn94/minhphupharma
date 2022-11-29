import { Button, Space, Tag } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import color from "theme/color";
import { formatMoney, formatDateWithDayjs } from "utils/helperCenter";

const ImportExportInventoryColumn = () => {
  const columns = [
    {
      title: "#",
      key: "key",
      width: 30,
      render: (_, row, index) => index + 1,
    },
    {
      title: "Tên thuốc",
      dataIndex: "name",
      key: "name",
      width: 100,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
      width: 80,
      key: "age",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Đơn giá",
      dataIndex: "unitPrice",
      width: 80,
      key: "address",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Số lượng",
      dataIndex: "quant",
      width: 50,
      key: "address",
      render: () => {
        return <div>lẻ</div>;
      },
    },
    {
      title: "Hạn dùng",
      dataIndex: "total",
      sorter: (a, b) => a.address.length - b.address.length,
      width: 80,
      key: "address",
      render: () => {
        return (
          <div style={{ color: color.tuna }}>
            {formatDateWithDayjs((new Date(), "hh:mm DD/MM/YYYY"))}
          </div>
        );
      },
    },
    {
      title: "Số lô",
      dataIndex: "lotNumber",
      sorter: (a, b) => a.address.length - b.address.length,
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Chiết khấu",
      dataIndex: "discount",
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
      title: "Total",
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

export default ImportExportInventoryColumn;
