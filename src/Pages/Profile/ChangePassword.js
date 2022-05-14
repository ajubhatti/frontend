import React from "react";
import Menu from "./Menu";

const ChangePassword = () => {
  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <form>
          <div className="js-form-message mb-6">
            <label className="form-label"> Current password </label>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="currentPassword"
                placeholder="Enter your current password"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="js-form-message">
              <label className="form-label"> New password </label>

              <div className="form-group">
                <input
                  id="newPassword"
                  type="password"
                  className="form-control"
                  name="newPassword"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="js-form-message mb-6">
            <label className="form-label"> Confirm password </label>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirmNewPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="w-lg-50">
            <button
              type="submit"
              className="btn btn-sm btn-primary transition-3d-hover mr-1"
            >
              Save Password
            </button>
            <button
              type="submit"
              className="btn btn-sm btn-soft-secondary transition-3d-hover"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
