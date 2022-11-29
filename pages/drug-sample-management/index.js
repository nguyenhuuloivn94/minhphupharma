import { Card, Typography, Table, Input, Button } from "antd";
import DrugSampleColumn from "components/DrugSampleManagement/DrugSampleColumn";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  ScanOutlined,
  PlusOutlined,
  SaveOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

export default function DrugSampleManagement() {
  const router = useRouter();

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

  const goToDetail = (id) => {
    router.push({
      pathname: "/drug-order-management/detail",
      query: { oid: id },
    });
  };

  return (
    <div>
      <Title level={3}>Quản lý đơn thuốc mẫu</Title>
      <Card>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5}>Danh sách mẫu thuốc</Title>
          <Button icon={<PlusOutlined />} type="primary">
            Tạo mới mẫu thuốc
          </Button>
        </div>
        <div style={{ textAlign: "right", marginBottom: 24 }}>
          <Input
            style={{ width: 300 }}
            allowClear
            placeholder={"Tên đơn thuốc"}
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
          columns={DrugSampleColumn({
            openUpdateSingleOrderModal: () => {
              setShowUpdateSingleOrderModal(true);
            },
            goDetail: (id) => {
              goToDetail(id);
            },
          })}
          onChange={(e) => {
            console.log("🚀 - ManageDrugOrder - e", e);
            return;
          }}
        />
      </Card>
    </div>
  );
}
