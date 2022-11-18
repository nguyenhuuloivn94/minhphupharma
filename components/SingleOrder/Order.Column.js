import { Button, Input, Select, Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import color from "theme/color";

const OrderColumns = () => {
  const columns = [
    {
      title: "#",
      key: "key",
      width: "5%",
      render: (_, row, index) => index + 1,
    },
    {
      title: "Tên hàng",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      width: "25%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Đơn vị",
      dataIndex: "age",
      sorter: (a, b) => a.age.length - b.age.length,
      width: "15%",
      key: "age",
      render: () => {
        return (
          <Select
            defaultValue="lucy"
            // style={{ width: 120 }}
            options={[
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        );
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      width: "15%",
      key: "address",
      render: () => {
        return <Input />;
      },
    },
    {
      title: "Giá bán",
      dataIndex: "unitPrice",
      sorter: (a, b) => a.address.length - b.address.length,
      width: "15%",
      key: "address",
      render: () => {
        return <Tag style={{ padding: 4 }}>199955</Tag>;
      },
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      sorter: (a, b) => a.address.length - b.address.length,
      width: "15%",
      key: "address",
      render: () => {
        return (
          <div style={{ fontWeight: "bold", color: color.tuna }}>1.231.323</div>
        );
      },
    },
    {
      title: "",
      width: "10%",
      key: "action",
      render: () => {
        return (
          <Button
            type="text"
            icon={<CloseOutlined style={{ color: color.red }} />}
          ></Button>
        );
      },
    },
  ];
  return columns;
};

export default OrderColumns;
