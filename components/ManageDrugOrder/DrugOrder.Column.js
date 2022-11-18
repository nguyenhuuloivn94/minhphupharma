import { Button, Tag, } from "antd";
import { EditOutlined } from "@ant-design/icons";
import color from "theme/color";
import { formatMoney, formatDateWithMoment } from "utils/helperCenter";

const OrderColumns = () => {
  const columns = [
    {
      title: "STT",
      key: "key",
      width: 30,
      render: (_, row, index) => index + 1,
    },
    {
      title: "Nhân viên",
      dataIndex: "name",
      key: "name",
      width: 80,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "age",
      width: 80,
      key: "age",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Số chứng từ",
      dataIndex: "address",
      width: 80,
      key: "address",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Loại đơn hàng",
      dataIndex: "unitPrice",
      width: 50,
      key: "address",
      render: () => {
        return <div>lẻ</div>;
      },
    },
    {
      title: "Giá trị đơn hàng(VNĐ)",
      dataIndex: "total",
      sorter: (a, b) => a.address.length - b.address.length,
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Số tiền chiết khấu(VNĐ)",
      dataIndex: "total",
      sorter: (a, b) => a.address.length - b.address.length,
      width: 80,
      key: "address",
      render: () => {
        return <div style={{ color: color.tuna }}>{formatMoney(12312323)}</div>;
      },
    },
    {
      title: "Trạng thái",
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
      title: "Ngày tạo",
      dataIndex: "total",
      width: 80,
      key: "address",
      render: () => {
        return (
          <div style={{ color: color.tuna }}>
            {formatDateWithMoment(new Date(), "hh:mm DD/MM/YYYY")}
          </div>
        );
      },
    },
    {
      title: "",
      width: 30,
      key: "action",
      render: () => {
        return <Button type="ghost" icon={<EditOutlined />}></Button>;
      },
    },
  ];
  return columns;
};

export default OrderColumns;
