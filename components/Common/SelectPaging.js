import React from "react";
import debounce from "lodash/debounce";
import { Select, Spin, Form } from "antd";
import * as lodash from "lodash";

const STATUS_CODE_ENUM = {
  SUCCESS: "000",
};

const initPagination = {
  current_page: 1,
  per_page: 10,
};

const defaultPageSize = 10;

const SelectPaging = ({
  api,
  formItemName = "select",
  placeHolder = "Chọn sản phẩm",
  debounceTimeout = 500,
  widthSelect = "100%",
  ...props
}) => {
  const [loading, setLoading] = React.useState(false);
  const [dataSource, setDataSource] = React.useState([]);
  const [dataProduct, setDataProduct] = React.useState([]);
  const [pagination, setPagination] = React.useState(initPagination);
  const [totalItem, setTotalItem] = React.useState(0);
  const [searchKey, setSearchKey] = React.useState("");

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = async (value) => {
      setSearchKey(value);
      await fetchingData({
        current_page: 1,
        per_page: 10,
        text_search: value,
      });
      setPagination({
        current_page: 1,
        per_page: 10,
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout]);

  const fetchingData = async (params) => {
    try {
      setLoading(true);

      const res = await api(params);

      setLoading(false);

      if (res && res?.statusCode === STATUS_CODE_ENUM.SUCCESS && res?.data) {
        const currentDataSource = lodash
          .get(res, "data.data", [])
          .map((it) => ({
            label: it?.name,
            value: it?.id,
          }));
        if (params?.current_page === 1) {
          setDataSource(currentDataSource);
        } else {
          setDataSource([...dataSource, ...currentDataSource]);
        }
        const total = res?.data?.pagination?.total;
        if (total) {
          setTotalItem(total);
        }

        const currentDataProduct = lodash.get(res, "data.data", []);
        const arrConcatDataProduct = [...dataProduct, ...currentDataProduct];
        setDataProduct(lodash.uniqBy(arrConcatDataProduct, "id"));
      }
    } catch (err) {}
  };

  React.useEffect(() => {
    (async () => {
      await fetchingData(initPagination);
    })();
  }, []);

  const onScroll = async (event) => {
    const target = event?.target;

    if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
      target.scrollTo(0, target.scrollHeight);
      if (pagination?.current_page * pagination?.per_page < totalItem) {
        await fetchingData({
          ...pagination,
          current_page: pagination?.current_page + 1,
        });
        setPagination({
          ...pagination,
          current_page: pagination?.current_page + 1,
        });
      }
    }
  };

  const handleOnChangeSelect = async (e) => {};

  return (
    <>
      <Form.Item style={{ marginBottom: 0 }} name={formItemName}>
        <Select
          placeholder={placeHolder}
          style={{ width: widthSelect }}
          showSearch
          // allowClear
          labelInValue
          filterOption={false}
          onSearch={debounceFetcher}
          notFoundContent={loading ? <Spin size="small" /> : null}
          {...props}
          options={dataSource}
          onChange={handleOnChangeSelect}
          onPopupScroll={onScroll}
        />
      </Form.Item>
    </>
  );
};

export default SelectPaging;
