import React, { useState, useEffect } from "react";
import { Button, Row, Modal, Table, Col, notification, Radio } from "antd";
import XLSX from "xlsx";
import ImportButton from "./ImportExcel";

const ImportExceModal = ({
  isShowImportExceModal,
  closeImportExceModal,
  onSubmitImport,
}) => {
  const [listItem, setListItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [valueRadio, setValueRadio] = useState("import");
  const [isDisableSubmit, setIsDisableSubmit] = useState(true);

  const [isError, setIsError] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    if (!isShowImportExceModal) {
      setListItem([]);
      setIsDisableSubmit(true);
      setIsError(false);
      setIsDuplicate(false);
      setValueRadio("import");
    }
  }, [isShowImportExceModal]);

  const onStaticSubmit = async () => {
    if (onSubmitImport) {
      if (listItem?.length <= 0) {
        notification.warn({ message: "Chưa có dữ liệu", duration: 5 });
        return;
      }

      setIsLoading(true);
      setIsDisableSubmit(true);

      await onSubmitImport(listItem, setListItem);

      setIsLoading(false);
    }
  };

  const checkDuplicate = async (valueArr) => {
    const isDuplicate = valueArr.some((item, idx) => {
      return valueArr.indexOf(item) != idx;
    });
    return isDuplicate;
  };

  const onImportFile = (files) => {
    if (files && files[0]) {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = async ({ target: { result } }) => {
        const wb = XLSX.read(result, { type: rABS ? "binary" : "array" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        let data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        data.shift();
        data = data.filter((item) => {
          return item.length > 0;
        });
        setIsError(false);
        let isError = false;
        let isDuplicate = false;
        let isDisableSubmit = false;

        const listItem = [];

        data?.map((item, index) => {});
        const valueArr =
          listItem?.map((item) => {
            return "";
          }) || [];

        isDuplicate = await checkDuplicate(valueArr);
        if (isDuplicate) {
          isError = true;
          isDisableSubmit = true;
        }

        if (listItem?.length > 0) {
          setListItem(listItem);
        } else {
          isError = true;
          isDisableSubmit = true;
        }

        setIsDisableSubmit(isDisableSubmit);
        setIsError(isError);
        setIsDuplicate(isDuplicate);
      };
      if (rABS) reader.readAsBinaryString(files[0]);
      else reader.readAsArrayBuffer(files[0]);
    }
  };

  const handleChangeRadio = (e) => {
    setValueRadio(e.target.value);
  };

  return (
    <Modal
      visible={isShowImportExceModal}
      title={<div style={{ color: "#054d9e" }}>Import Excel</div>}
      footer={null}
      width={1000}
      bodyStyle={{ overflowX: "scroll", zIndex: 1024 }}
      maskStyle={{ zIndex: 1024 }}
      style={{ top: 20, zIndex: 1024 }}
      onCancel={closeImportExceModal}
      loading={isLoading}
    >
      <Radio.Group onChange={handleChangeRadio} value={valueRadio}>
        <Radio value={"import"}>Nhập kho</Radio>
        <Radio value={"export"}>Xuất kho</Radio>
      </Radio.Group>
      {/* <div style={{ flex: 1, height: 400, 'overflow-y': 'scroll' }}>
        <Table
          dataSource={[...listItem]}
          pagination={{
            defaultPageSize: 2000,
          }}
          columns={}
        />
      </div> */}
      <div style={{ height: 24 }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImportButton visualize={"big"} onImportFile={onImportFile} />
      </div>
      <div style={{ height: 24 }} />
      <Row>
        <Col span={18} style={{ display: "flex" }}>
          {isError && (
            <span style={{ color: "red", fontSize: 15 }}>
              (Một vài thông tin bị thiếu hoặc sai vui lòng kiểm tra lại)
            </span>
          )}
          {isDuplicate && (
            <span style={{ color: "red", fontSize: 15 }}>
              (Sản phẩm bị trùng, vui lòng kiểm tra lại)
            </span>
          )}
        </Col>
        <Col span={6} style={{ textAlign: "right" }} className="h-stack-md">
          <Button type="text" onClick={closeImportExceModal}>
            Đóng
          </Button>
          <Button
            type="primary"
            disabled={listItem?.length <= 0 || isDisableSubmit}
            onClick={onStaticSubmit}
          >
            Lưu
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default ImportExceModal;
