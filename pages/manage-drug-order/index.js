import { Card, Typography, Table, Input } from "antd";
const { Title } = Typography;
import DrugOrderColumn from "components/ManageDrugOrder/DrugOrder.column";

export default function ManageDrugOrder() {
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
  ];

  return (
    <div>
      <Title level={3}>Quản lý đơn hàng thuốc</Title>
      <Card>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5}>Quản lý đơn hàng thuốc</Title>
          <Input style={{ width: 300 }} placeholder={"Mã đơn hàng, tên dược"} />
        </div>
        <Table
          style={{ margingTop: 12 }}
          showSorterTooltip={false}
          pagination={{
            showSizeChanger: true,
            current: 1,
            pageSize: 10,
          }}
          scroll={{
            x: 1500,
            y: 300,
          }}
          dataSource={dataSource}
          columns={DrugOrderColumn()}
          onChange={(e) => {
            console.log("🚀 - ManageDrugOrder - e", e);
            return;
          }}
        />
      </Card>
    </div>
  );
}
