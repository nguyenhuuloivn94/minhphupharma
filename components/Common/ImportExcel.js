import { message, Spin, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { use, useState } from "react";
const { Dragger } = Upload;

const SheetJSFT = ["xlsx", "xlsb", "xlsm", "xls", "csv"]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

const ImportButtonBig = ({ onImportFile }) => {
  const [loading, setLoading] = useState(false);
  const props = {
    name: "file",
    showUploadList: false,
    progress: { strokeWidth: 2, showInfo: true },
    maxCount: 1,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      } else {
        setLoading(true);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div style={{ width: 200, height: 100 }}>
      <Spin spinning={loading}>
        <div style={{ width: 200, height: 100 }}>
          <Dragger {...props}>
            <InboxOutlined style={{ color: "blue", fontSize: 32 }} />
            <div
              style={{
                fontSize: 12,
                color: "#495057",
                fontWeight: 500,
                marginTop: 12,
              }}
            >
              Nhấn hoặc kéo thả file vào đây
            </div>
          </Dragger>
        </div>
      </Spin>
    </div>
  );
};
const ImportButtonSmall = ({ onImportFile }) => {
  return (
    <div
      style={{
        width: 70,
        position: "relative",
        marginRight: 20,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#c2c2c2",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <label htmlFor="upload-file">Tải lên</label>
      <input
        type="file"
        accept={SheetJSFT}
        onClick={(e) => {
          e.target.value = "";
        }}
        onChange={(e) => onImportFile(e.target.files)}
        style={{
          position: "absolute",
          zIndex: 0,
          left: 0,
          opacity: 0,
          width: 70,
          top: 0,
        }}
      />
    </div>
  );
};

const ImportButton = ({ visualize, onImportFile }) => {
  switch (visualize) {
    case "big":
      return <ImportButtonBig onImportFile={onImportFile} />;
    case "small":
      return <ImportButtonSmall onImportFile={onImportFile} />;
    default:
      return <ImportButtonSmall onImportFile={onImportFile} />;
  }
};
export default ImportButton;
