import { Modal, Row, Col, Divider } from "antd";
import { useMemo, Fragment, useEffect, useState } from "react";

const UpdateSingleOrderModal = ({
  isShowUpdateSingleOrderModal,
  closeUpdateSingleOrderModal,
}) => {
  return (
    <Modal
      centered={true}
      visible={isShowUpdateSingleOrderModal}
      title={`Xem tổng danh mục`}
      onCancel={closeUpdateSingleOrderModal}
      footer={null}
      bodyStyle={{ overflowX: "scroll", height: 800 }}
      style={{ zIndex: 99999999 }}
      width={960}
    ></Modal>
  );
};

export default UpdateSingleOrderModal;
