import { Button, Space, Tag } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import color from "theme/color";
import { formatMoney, formatDateWithDayjs } from "utils/helperCenter";

const OrderColumns = ({
  openUpdateSingleOrderModal = () => {},
  goDetail = () => {},
}) => {
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
            {formatDateWithDayjs(new Date(), "hh:mm DD/MM/YYYY")}
          </div>
        );
      },
    },
    {
      title: "",
      width: 60,
      key: "action",
      fixed: "right",
      render: () => {
        return (
          <Space style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              type="text"
              shape="round"
              onClick={() => goDetail("123")}
              icon={<EyeOutlined style={{ color: "blue" }} />}
              title="Xem chi tiết"
            ></Button>
            <Button
              shape="round"
              onClick={() => openUpdateSingleOrderModal()}
              type="text"
              icon={<EditOutlined style={{ color: "green" }} />}
              title="Cập nhật đơn hàng"
            ></Button>
          </Space>
        );
      },
    },
  ];
  return columns;
};

export default OrderColumns;
