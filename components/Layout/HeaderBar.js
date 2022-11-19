import {
  Popover,
  Layout,
  Button,
  Row,
  Col,
  Space,
  Avatar,
  Divider,
} from "antd";
import React from "react";
import color from "theme/color";
import { UserOutlined, PicRightOutlined } from "@ant-design/icons";
import Styles from "./HeaderBar.module.css";

const { Header } = Layout;

const ItemContent = ({ title, icon }) => {
  return (
    <div className={Styles.button_custom}>
      {icon} {title}
    </div>
  );
};

const content = () => {
  return (
    <>
      <ItemContent title="Tài khoản" icon={<UserOutlined />} />
      <Divider style={{ margin: "8px 0px" }} />
      <ItemContent title="Đăng xuất" icon={<UserOutlined />} />
    </>
  );
};

const HeaderBar = (props) => {
  const { smallScreen } = props;
  const { onOpenDrawSider, onCloseDrawSider } = props;
  return (
    <Header className="header-bar" style={{ backgroundColor: color.bg }}>
      <Row>
        <Col span={22}>
          {smallScreen ? (
            <Button
              onClick={onOpenDrawSider}
              icon={<PicRightOutlined />}
            ></Button>
          ) : null}
        </Col>
        <Col span={2}>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Popover
              style={{ backgroundColor: color.ghostWhite }}
              placement="bottomRight"
              // title={text}
              content={content}
              trigger="click"
            >
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Popover>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderBar;
