import { Modal, Row, Col, Divider } from "antd";
import { useMemo, Fragment, useEffect, useState } from "react";
import FormSingleOrder from "components/SingleOrder/FormSingleOrder";

const UpdateSingleOrderModal = ({
  isShowUpdateSingleOrderModal,
  closeUpdateSingleOrderModal,
}) => {
  return (
    <Modal
      centered={true}
      open={isShowUpdateSingleOrderModal}
      title={`Cập nhật đơn hàng`}
      onCancel={closeUpdateSingleOrderModal}
      footer={null}
      bodyStyle={{ overflowX: "hidden", height: 800, zIndex: 1024 }}
      maskStyle={{ zIndex: 1024 }}
      style={{ zIndex: 1024 }}
      width={'90%'}
    >
      <FormSingleOrder />
    </Modal>
  );
};

export default UpdateSingleOrderModal;
