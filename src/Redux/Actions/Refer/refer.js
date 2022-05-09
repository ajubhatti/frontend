import { configData } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { auth } from "../../apiList";

export const refer = (data) => () =>
  new Promise((resolve, reject) => {
    fetchUrl(auth.forgotPass.method, auth.forgotPass.url, data, configData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
