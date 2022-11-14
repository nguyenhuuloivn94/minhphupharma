import { call } from "./APIManager";

export const getConfigApi = async () => {
  try {
    const res = await call("config");
    return res.data;
  } catch (error) {
    console.log("getConfig", error);
  }
};
