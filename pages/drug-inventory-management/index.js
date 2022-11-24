import { Card, Typography, Table, Input, Select, Row, Col, Button } from "antd";
import DrugInventoryColumn from "components/DrugInventoryManagement/DrugInventoryColumn";
import { FileExcelOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import ImportExceModal from "components/Common/ImportExceModal";
import { useState } from "react";

const { Title } = Typography;

export default function DrugOrderManagement() {
  const [isShowImportExceModal, setIsShowImportExceModal] = useState(false);
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
      pathname: "/drug-inventory-management/detail",
      query: { oid: id },
    });
  };

  const handleChange = () => {};

  return (
    <div>
      <Title level={3}>Quản lý kho thuốc</Title>
      <Card>
        <div style={{ marginBottom: 12, fontWeight: "500" }}>
          Chọn loại phiếu
        </div>
        <Select
          defaultValue="all"
          style={{ marginBottom: 32, width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: "all",
              label: "Tất cả",
            },
            {
              value: "import",
              label: "Nhập kho",
            },
            {
              value: "export",
              label: "Xuất kho",
            },
          ]}
        />

        <Row>
          <Col xs={24} sm={12}>
            <div style={{ marginBottom: 12, fontWeight: "500" }}>
              Danh sách hàng trong kho
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div
              style={{
                marginBottom: 32,
                fontWeight: "500",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className="button-export-excel"
                style={{
                  backgroundColor: "#82b54b",
                  borderRadius: 5,
                  color: "white",
                  marginRight: 12,
                }}
                icon={<FileExcelOutlined />}
                onClick={() => setIsShowImportExceModal(true)}
              >
                Import Excel
              </Button>
              <Button
                style={{
                  backgroundColor: "#0665d0",
                  borderRadius: 5,
                  color: "white",
                  marginRight: 12,
                }}
                icon={<PlusOutlined />}
              >
                Nhập/Xuất Kho
              </Button>
            </div>
          </Col>
        </Row>
        <div
          style={{
            marginBottom: 12,
            fontWeight: "500",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Input style={{ width: 200 }} placeholder="Tên thuốc, số lô, ..." />
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
          columns={DrugInventoryColumn({
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

      <ImportExceModal
        closeImportExceModal={() => setIsShowImportExceModal(false)}
        isShowImportExceModal={isShowImportExceModal}
      />
    </div>
  );
}
