import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { auth } from "../../apiList";

export const verifyOtp = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.verifyPhone.method, auth.verifyPhone.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
