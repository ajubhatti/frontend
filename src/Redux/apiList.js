export const auth = {
  login: { method: "post", url: "/auth/login" },
  register: { method: "post", url: "/auth/register" },
  logout: { method: "get", url: "/auth/logout" },
  forgotPass: { method: "post", url: "/auth/forgot-password" },
  resetPass: { method: "post", url: "/auth/reset-password" },
  verifyEmail: { method: "post", url: "/auth/verify-email" },
};

export const home = {
  banner: { method: "get", url: "/banner" },
  ticker: { method: "get", url: "/ticker" },
};

export const extra = {
  contact: { method: "post", url: "/contactUs" },
};

export const profile = {
  adminBankList: { method: "get", url: "/bankAccount" },
};