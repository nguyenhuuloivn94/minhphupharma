import { Popover, Layout, Button, Row, Col, Space } from "antd";
import React from "react";
import color from "theme/color";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

const content = (
  <div>
    <Button>Rđasadsadasda sdsaB</Button>
  </div>
);

export default (props) => {
  return (
    <Header className="header-bar" style={{ backgroundColor: color.bg }}>
      <Row>
        <Col span={22}></Col>
        <Col span={2}>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Popover
              placement="bottomRight"
              // title={text}
              content={content}
              trigger="click"
            >
              <Button>RB</Button>
            </Popover>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};
