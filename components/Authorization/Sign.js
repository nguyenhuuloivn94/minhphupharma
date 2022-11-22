import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Item } = Form;

const Sign = ({ children }) => {
  const [form] = Form.useForm();
  const auth = true;

  const handleSubmit = () => {};
  const handleChangeRemember = () => {};

  if (!auth) {
    return (
      <div
        style={{
          backgroundColor: "rgba(5,77,158,.8)",
          minHeight: "100vh",
        }}
      >
        <Row
          style={{
            minHeight: "100vh",
            alignItems: "center",
          }}
        >
          <Col xs={0} sm={0} md={6} xl={8}></Col>
          <Col xs={24} sm={24} md={12} xl={8}>
            <Card
            //   hoverable={true}
              bordered={false}
              bodyStyle={{ cursor: "default", padding: "64px 32px 64px 32px" }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#0665d0",
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: 24,
                }}
              >
                MP Pharmacy
              </div>
              <Form
                style={{ padding: "0% 10%" }}
                form={form}
                onFinish={handleSubmit}
              >
                <Item
                  name="username"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue={""}
                >
                  <Input placeholder="Username" prefix={<UserOutlined />} />
                </Item>

                <div style={{ margin: "32px 0px" }}>
                  <Item
                    name="password"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    initialValue={""}
                  >
                    <Input.Password
                      placeholder="input password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Item>
                </div>

                <Item name="remember" initialValue={""}>
                  <Checkbox checked onChange={handleChangeRemember}>
                    Remember me
                  </Checkbox>
                </Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="large"
                    icon={<ExportOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    Đăng nhập
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={6} xl={8}></Col>
        </Row>
      </div>
    );
  }
  return children;
};

export default Sign;
