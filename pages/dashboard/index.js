import { Card, Col, Row, Space } from "antd";
import ChartSample from "components/Chart/sample";
import color from "theme/color";
import fontSize from "theme/fontSize";

const highlightInfo = [
  {
    id: 1,
    title: "Doanh số",
    value: "703",
    color: "#0665d0",
  },
  {
    id: 2,
    title: "Tăng trưởng",
    value: "25%",
    color: "#82b54b",
  },
  {
    id: 3,
    title: "Đơn theo ngày",
    value: "120",
    color: "#0665d0",
  },
  {
    id: 4,
    title: "Doanh thu",
    value: "120.000.000 vnd",
    color: "#0665d0",
  },
];

export default function DashBoard() {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {highlightInfo?.map((item, index) => (
          <Col key={index} xs={12} xl={6}>
            <Card hoverable>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    color: item.color,
                    fontSize: fontSize.extraXLarge,
                    fontWeight: "bold",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    color: color.lightGrayishBlue,
                    fontSize: fontSize.medium,
                  }}
                >
                  {item.title}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Card style={{ margin: "16px 0px" }}>
        <div style={{ fontSize: fontSize.medium, fontWeight: "bold" }}>
          Doanh thu
        </div>
        <ChartSample />
      </Card>
      <Row gutter={[8, 8]}>
        <Col xs={24} xl={12}>
          <Card>
            <h3>750</h3>
            <div>Pending Orders</div>
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <Card>
            <h3>750</h3>
            <div>Pending Orders</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
