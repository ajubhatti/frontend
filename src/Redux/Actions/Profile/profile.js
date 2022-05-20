import { configData, config } from "../../../Helper";
import { fetchUrl } from "../../../Helper/fetchUrl";
import { profile } from "../../apiList";

export const getAdminBankList = () => () =>
  new Promise((resolve, reject) => {
    fetchUrl(profile.adminBankList.method, profile.adminBankList.url, null, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
