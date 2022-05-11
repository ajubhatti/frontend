import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import iconAccount from "../../Assets/iconAccount.svg";
import iconProAccount from "../../Assets/iconProAccount.svg";
import iconGrowingBusiness from "../../Assets/iconGrowingBusiness.svg";
import icon48 from "../../Assets/icon48.svg";
import icon39 from "../../Assets/icon39.svg";
import icon20 from "../../Assets/icon20.svg";
import visaCard from "../../Assets/visa-card.svg";
import ieCirclesCta from "../../Assets/ie-circles-cta.svg";

const Home = (props) => {
  const [bannerList, setBannerList] = useState([]);
  const [tickerList, setTickerList] = useState([]);

  useEffect(() => {
    const getBanners = async () => {
      await props.getBanner().then((res) => {
        setBannerList(res.filter((x) => x.isActive === true));
      });
    };

    const getTickers = async () => {
      await props.getTicker().then((res) => {
        setTickerList(res);
      });
    };

    getBanners();
    getTickers();
  }, []);

  return (
    <>
      {/* <Banner bannerList={bannerList} />
      <marquee>
        {tickerList.map((theElement) => theElement.description.toString())}
      </marquee> */}
      <div className="container space-2 space-top-lg-3">
        <div className="row justify-content-lg-between align-items-lg-center">
          <div className="col-lg-5 mb-9 mb-lg-0">
            <div className="mb-5">
              <h2 className="font-weight-medium mb-4">
                Fast And Safe Mobile Recharge On badipay
              </h2>
              <p>
                badipay offers a mobile recharge option through which you can
                make a postpaid, prepaid mobile recharge, utility bill payments,
                metro recharge, etc. It is an instant and easy recharging
                process, a secure and safe payment option, and offers a
                hassle-free online experience.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              id="featuresSVG"
              className="position-relative max-width-50 mx-auto"
            >
              <div className="w-75 u-devices-v2__phone-svg shadow-sm mx-auto"></div>
              <div className="position-absolute bottom-0 right-0 max-width-50 w-100 z-index-n1 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container space-2 space-top-lg-3">
        <div className="row justify-content-lg-between align-items-lg-center">
          <div className="col-lg-5 order-lg-2 mb-9 mb-lg-0">
            <div className="mb-5">
              <h2 className="font-weight-medium mb-4">
                Get Exclusive Badipay Recharge Offers & Cashback
              </h2>
              <p>
                Browse through the Recommended Plans, Data Plans(2G,3G,4G), Full
                Talktime Plans data plans, Roaming Plans, Special Plans, and
                many more and grab the best offers on all recharges.
              </p>
              <p>
                Not only can you get the best recharge offers and plans for all
                the major operators on Badipay, you also get exclusive offers.
                These offers are applicable on Jio Prepaid recharge offers and
                plans, Airtel Prepaid plans and offers, BSNL recharge plans and
                offers, VI plans and offers, etc.
              </p>
              <p>
                With every mobile recharge through Badipay, you earn assured
                cashback up to ₹1000 without any promo code. Additionally,
                Badipay releases daily and occasional promo codes from time to
                time to give you additional exclusive benefits on your prepaid
                mobile recharges. You can also take the advantage of exclusive
                bank offers when available.
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div
              id="featuresSVG2"
              className="position-relative max-width-50 mx-auto"
            >
              <div className="w-75 u-devices-v2__phone-svg shadow-sm mx-auto"></div>
              <div className="position-absolute bottom-0 left-0 right-0 max-width-50 w-100 z-index-n1 mx-auto mb-n5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container space-2 space-lg-3">
        <div className="w-lg-50 text-center mx-lg-auto mb-9">
          <h2 className="font-weight-medium mb-4">
            Always know what you'll pay.
          </h2>
          <p>
            Once you're setup, instantly withdraw payments or deposit into your
            bank account within 2-3 business days.
          </p>
        </div>
        <div className="row no-gutters align-items-lg-center mb-11">
          <div className="col-lg-7 shadow-lg rounded">
            <div className="text-center py-11 px-5 px-sm-9">
              <header className="mb-9">
                <div className="mb-1">
                  <span className="display-4 text-primary font-weight-medium">
                    1.5%
                  </span>
                  <span className="badge badge-indigo badge-pill align-top ml-1">
                    +0.5 USD
                  </span>
                </div>
                <p>per successful transaction</p>
              </header>

              <div className="row justify-content-sm-center align-items-sm-center mb-5">
                <div className="col-sm-5">
                  <figure className="ie-height-56 max-width-8 mx-auto mb-2">
                    <img src={iconAccount} alt="" />
                  </figure>
                  <h4 className="h6">Account creation</h4>
                </div>

                <div className="col-sm-1 my-3 my-sm-0">
                  <span className="font-size-3 text-primary font-weight-medium">
                    +
                  </span>
                </div>

                <div className="col-sm-5">
                  <figure className="ie-height-56 max-width-8 mx-auto mb-2">
                    <img src={iconProAccount} alt="" />
                  </figure>
                  <h4 className="h6">Professional account</h4>
                </div>
              </div>

              <div className="mb-7">
                <p className="small">
                  Included for 3 months,
                  <br />
                  then $2.5/monthly included VAT
                </p>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-wide btn-pill transition-3d-hover"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="col-lg-5 bg-primary">
            <div className="py-9 px-5 px-sm-9">
              <ul className="list-unstyled">
                <li className="media pb-3">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">135+ currencies</h4>
                    <p className="text-white-70">
                      Process charges and display prices in your customer's.
                    </p>
                  </div>
                </li>
                <li className="border-top opacity-md py-3"></li>
                <li className="media">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">Global support</h4>
                    <p className="text-white-70">
                      Businesses in 25+ countries can accept payments.
                    </p>
                  </div>
                </li>
                <li className="border-top opacity-md py-3"></li>
                <li className="media">
                  <span className="btn btn-icon btn-xs btn-soft-white rounded-circle mt-1 mr-3">
                    <span className="fas fa-angle-right btn-icon__inner"></span>
                  </span>
                  <div className="media-body">
                    <h4 className="h6 text-white mb-1">
                      Secure payment info collection
                    </h4>
                    <p className="text-white-70 mb-0">
                      Use our libraries to collect payment information without
                      sensitive data.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-lg-75 mx-lg-auto">
          <div className="media d-block d-sm-flex">
            <figure className="ie-height-90 w-100 max-width-15 mr-4 mb-3 mb-sm-0">
              <img src={iconGrowingBusiness} alt="" />
            </figure>
            <div className="media-body">
              <h4 className="h6">Grow your business with Badi Pay</h4>
              <p>
                From startups to Fortune 500s, explore how millions of
                businesses use Badi Pay to start and scale their companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container space-2 space-top-lg-3 space-bottom-lg-3">
        <div className="w-lg-50 text-center mx-lg-auto mb-5">
          <h2 className="font-weight-medium mb-4">
            Simple and affordable.
            <br />
            Pay as you go.
          </h2>
          <p>
            From boarding passes to movie tickets, there's pretty much nothing
            you can't store with Badi Pay. Plus, you can take your money further
            with exclusive offers, discounts, and even reminders to use your
            loyalty card when you enter the store.
          </p>
        </div>
        <div className="text-center mx-auto mb-11"></div>
        <div className="row justify-content-md-center mb-11">
          <div className="col-md-4 col-lg-3 mb-9 mb-lg-0">
            <div className="u-indicator-dots text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon48} alt="" />
              </figure>
              <h4 className="h6">Create an account</h4>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 mb-9 mb-lg-0">
            <div className="u-indicator-dots text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon39} alt="" />
              </figure>
              <h4 className="h6">Link your bank account</h4>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="text-center px-lg-4">
              <figure className="ie-height-72 max-width-10 mx-auto mb-3">
                <img src={icon20} alt="" />
              </figure>
              <h4 className="h6">Your account is validated</h4>
            </div>
          </div>
        </div>
        <div className="max-width-50 mx-auto">
          <img className="img-fluid" src={visaCard} alt="visa card" />
        </div>
      </div>
      <div className="position-relative">
        <div className="container space-2">
          <div className="row justify-content-lg-between align-items-lg-center text-center text-lg-left">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h3 className="h2 text-white font-weight-semi-bold mb-0">
                Create better experiences with Badi Pay
              </h3>
            </div>
          </div>
        </div>
        <div className="gradient-overlay-half-primary-v3 position-absolute top-0 right-0 bottom-0 left-0 z-index-n1 overflow-hidden">
          <figure className="ie-circles-cta">
            <img src={ieCirclesCta} alt="" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
