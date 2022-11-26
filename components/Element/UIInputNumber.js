import { InputNumber } from "antd";

const UIInputNumber = (props) => {
  return (
    <InputNumber
      style={{ width: "100%" }}
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value) => value.replace(/(\.*)/g, "")}
      controls={false}
    />
  );
};

export default UIInputNumber;
