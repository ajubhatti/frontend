import React from "react";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import ForgotPasswordContainer from "../Containers/ForgotPassword";
import HomeContainer from "../Containers/Home";
import LoginContainer from "../Containers/Login";
import ProfileContainer from "../Containers/Profile";
import RegisterContainer from "../Containers/Register";
import ResetPasswordContainer from "../Containers/ResetPassword";
import verifyEmailContainer from "../Containers/verifyEmail";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import PageNotFound from "../Pages/PageNotFound";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsCondition from "../Pages/TermsCondition";
import { getToken } from "./LocalStorage";
import Main from "./Main";
import routes from "./routes";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getToken() ? <Redirect to={routes.home} /> : <Component {...props} />
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getToken() ? <Component {...props} /> : <Redirect to={routes.home} />
    }
  />
);

const Full = (props) => {
  return (
    <Main {...props}>
      <Switch>
        <Route exact path={routes.home} name="Home" component={HomeContainer} />
        <Route
          exact
          path={routes.reset}
          name="Reset"
          component={ResetPasswordContainer}
        />
        <Route
          exact
          path={routes.forgot}
          name="Forgot"
          component={ForgotPasswordContainer}
        />
        <Route
          exact
          path={routes.verify}
          name="verify-email"
          component={verifyEmailContainer}
        />
        <PublicRoute
          exact
          path={routes.login}
          name="Login"
          component={LoginContainer}
        />
        <PublicRoute
          exact
          path={routes.register}
          name="Register"
          component={RegisterContainer}
        />
        <PrivateRoute
          exact
          name="profile"
          path={routes.profile}
          component={ProfileContainer}
        />
        <Route
          exact
          path={routes.terms}
          name="terms-condition"
          component={TermsCondition}
        />
        <Route
          exact
          path={routes.policy}
          name="privacy-policy"
          component={PrivacyPolicy}
        />
        <Route
          exact
          path={routes.notFound}
          name="404"
          component={PageNotFound}
        />
        <Route
          exact
          path={routes.contactUs}
          name="contact-us"
          component={ContactUs}
        />
        <Route
          exact
          path={routes.aboutUs}
          name="about-us"
          component={AboutUs}
        />
        <Redirect from="/" to={routes.home} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Main>
  );
};

export default Full;
