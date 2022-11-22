import { Card, Typography, Table, Input } from "antd";
const { Title } = Typography;
import DrugOrderDetailColumn from "components/DrugOrderManagement/DrugOrderDetailColumn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function DrugOrderDetail() {
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const orderId = router?.query?.oid;
    setOrderId(orderId);
  }, [router?.query?.oid]);

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
      {/* <Title level={3}>Quản lý đơn hàng thuốc</Title> */}
      <Card>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5}>{`Đơn hàng ${orderId}`}</Title>
          <Input
            style={{ width: 300 }}
            placeholder={"Tên thuốc, mã thuốc, nhà cung cấp"}
          />
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
          columns={DrugOrderDetailColumn()}
          onChange={(e) => {
            console.log("🚀 - ManageDrugOrder - e", e);
            return;
          }}
        />
      </Card>
    </div>
  );
}
