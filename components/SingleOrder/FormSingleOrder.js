import { Card, Col, Input, Row, Switch, Table, Button } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import fontSize from "theme/fontSize";
import SelectPaging from "components/Common/SelectPaging";
import OrderColumns from "./OrderColumn";
import color from "theme/color";
import { formatMoney } from "utils/helperCenter";
import Styles from "./FormSingleOrder.module.css";

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
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const handleChangeSwitch = () => {};

export default function FormSingleOrder() {
  return (
    <div>
      <Card>
        <SelectPaging />
      </Card>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={24} xl={12}>
          <Card>
            <div
              style={{
                fontSize: fontSize.medium,
                color: "#3a3541de",
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              Hoá đơn
            </div>
            <Table
              showSorterTooltip={false}
              dataSource={dataSource}
              scroll={{
                x: '100%',
              }}
              columns={OrderColumns()}
            />
          </Card>
        </Col>
        <Col xs={24} lg={24} xl={12}>
          <Card>
            <div
              style={{
                fontSize: fontSize.medium,
                color: "#3a3541de",
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              Thanh toán
            </div>
            <Card style={{ backgroundColor: color.ghostWhite, border: "none" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className={Styles.title_payment_block}
                  style={{
                    backgroundColor: "#0665d0",
                  }}
                >
                  Tổng phí
                </div>
                <div
                  style={{
                    color: "#0665d0",
                    fontWeight: "500",
                  }}
                >
                  {formatMoney(91000000)} vnđ
                </div>
              </div>
            </Card>
            <Card style={{ border: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className={Styles.title_payment_block}
                  style={{
                    backgroundColor: "#e04f1a",
                  }}
                >
                  Giảm giá
                </div>
                <Input
                  style={{ width: 200 }}
                  addonAfter="VNĐ"
                  defaultValue="mysite"
                />
              </div>
            </Card>
            <Card style={{ backgroundColor: color.ghostWhite, border: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className={Styles.title_payment_block}
                  style={{
                    backgroundColor: "#82b54b",
                  }}
                >
                  Phí thanh toán
                </div>
                <div
                  style={{
                    color: "#82b54b",
                    fontWeight: "500",
                  }}
                >
                  {formatMoney(91000000)} vnđ
                </div>
              </div>
            </Card>
            <Card style={{ border: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className={Styles.title_payment_block}
                  style={{
                    backgroundColor: "#3c90df",
                  }}
                >
                  Khách trả
                </div>
                <div
                  style={{
                    color: "#3c90df",
                    fontWeight: "500",
                  }}
                >
                  {formatMoney(91000000)} vnđ
                </div>
              </div>
            </Card>
            <Card style={{ backgroundColor: color.ghostWhite, border: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className={Styles.title_payment_block}
                  style={{
                    backgroundColor: "#6c757d",
                  }}
                >
                  Tiền phí trả khách
                </div>
                <div
                  style={{
                    color: "#6c757d",
                    fontWeight: "500",
                  }}
                >
                  {formatMoney(91000000)} vnđ
                </div>
              </div>
            </Card>
            <div
              style={{ marginTop: 16, display: "flex", alignItems: "center" }}
            >
              <label style={{ marginRight: 12 }}>Bạn có muốn in hoá đơn?</label>
              <Switch defaultChecked onChange={handleChangeSwitch} />
            </div>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="primary"
                icon={<WalletOutlined />}
                loading={false}
                onClick={() => {}}
                size={"large"}
              >
                Thanh toán
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
