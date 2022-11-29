import { Button, Space, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import color from "theme/color";
import { formatMoney, formatDateWithDayjs } from "utils/helperCenter";

const DrugSampleColumn = ({
  openUpdateSingleOrderModal = () => {},
  goDetail = () => {},
}) => {
  const columns = [
    {
      title: "#",
      key: "key",
      width: 30,
      render: (_, row, index) => index + 1,
    },
    {
      title: "Tên mẫu thuốc",
      dataIndex: "name",
      key: "name",
      width: 80,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mã mẫu thuốc",
      dataIndex: "age",
      width: 80,
      key: "age",
      //   render: () => {
      //     return <></>;
      //   },
    },
    {
      title: "Cửa hàng",
      dataIndex: "address",
      width: 80,
      key: "address",
      //   render: () => {
      //     return <></>;
      //   },
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
      width: 40,
      key: "action",
      fixed: "right",
      render: () => {
        return (
          <Space style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              type="primary"
              onClick={() => goDetail("123")}
              style={{ backgroundColor: "blue", borderColor: "blue" }}
              icon={<EditOutlined style={{ color: "white" }} />}
              title="Xem chi tiết"
            ></Button>
            <Button
              type="primary"
              style={{ backgroundColor: "red", borderColor: "red" }}
              icon={<DeleteOutlined style={{ color: "white" }} />}
              title="Xem chi tiết"
            ></Button>
          </Space>
        );
      },
    },
  ];
  return columns;
};

export default DrugSampleColumn;
