import {
  Modal,
  Row,
  Col,
  Divider,
  Form,
  Select,
  Input,
  InputNumber,
  DatePicker,
} from "antd";
import SelectPaging from "components/Common/SelectPaging";
import dayjs from "dayjs";
import { useMemo, Fragment, useEffect, useState } from "react";
import fontSize from "theme/fontSize";

const ImportExportInventoryModal = ({
  isShowImportExportInventoryModal,
  closeImportExportInventoryModal,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {};

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  
  return (
    <Modal
      centered={true}
      open={isShowImportExportInventoryModal}
      title={`Thông tin nhập xuất kho`}
      onCancel={closeImportExportInventoryModal}
      footer={null}
      bodyStyle={{ overflowX: "hidden", height: 800, zIndex: 1024 }}
      maskStyle={{ zIndex: 1024 }}
      style={{ zIndex: 1024 }}
      width={"90%"}
    >
      <Form
        style={{ paddingTop: 24 }}
        scrollToFirstError
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Hình thức"}
              name="type"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Select
                options={[
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
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Nhà cung cấp"}
              name="supplier"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Chọn tài khoản"
                showSearch
                options={[
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
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Lấy Hoá đơn"}
              name="getBill"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Select options={options} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Chủ kho"}
              name="owner"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Select options={options} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Mã Khuyến mãi"}
              name="discountCode"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Trạng thái"}
              name="status"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Select options={options} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Tổng thanh toán"}
              name="total"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Đã thanh toán"}
              name="havePay"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Ngày lập chứng từ"}
              name="createDate"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={dayjs()}
            >
              <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Diễn giải"}
              name="explain"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={1} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Ngày xuất hoá đơn"}
              name="billDate"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={dayjs()}
            >
              <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Ngày hạch toán"}
              name="accountingDate"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={dayjs()}
            >
              <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ marginTop: 24, fontSize: fontSize.medium }}>
          Thông tin thuốc
        </div>
        <Divider style={{ margin: "12px 0px" }} />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Tên thuốc"}
              name="drugName"
              rules={[
                {
                  required: true,
                },
              ]}
              // initialValue={"import"}
            >
              <SelectPaging placeHolder="Tên thuốc" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Số lượng"}
              name="quant"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Thuế VAT (%)"}
              name="vat"
              rules={[
                {
                  required: true,
                },
              ]}
              // initialValue={"import"}
            >
              <InputNumber style={{ width: "100%" }} controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Đơn vị"}
              name="unit"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Select showSearch options={options} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Chiết khấu"}
              name="discount"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Số lô"}
              name="lotNumber"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={"import"}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Đơn giá"}
              name="unitPrice"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Theo đơn vị"}
              name="withUnit"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select showSearch options={options} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Hạn dùng"}
              name="expireDate"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={dayjs()}
            >
              <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Giá sỉ"}
              name="wholesalePrice"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={8} xxl={6}>
            <Form.Item
              label={"Giá lẻ"}
              name="retailPrice"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/(\.*)/g, "")}
                controls={false}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default ImportExportInventoryModal;
