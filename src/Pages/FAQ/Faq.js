import React from "react";
import Accordion from "../../Components/Accordion";
import { DummyData } from "./DummyData";
import icon15 from "../../Assets/icon15.svg";
import icon4 from "../..//Assets/icon4.svg";

const Faq = () => {
  return (
    <>
      <div className="container space-2">
        <div class="w-lg-80 text-center mx-lg-auto">
          <div class="mb-5">
            <h1 class="display-4 font-size-md-down-5 mb-0">
              Frequently Asked {""}
              <span class="font-weight-semi-bold">Questions</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {DummyData.length > 0 &&
              DummyData.map((item, index) => {
                return (
                  <>
                    <div className="space-2 active" key={index}>
                      <div className="mb-3">
                        <h3 className="text-primary font-weight-semi-bold">
                          {item.title}
                        </h3>
                      </div>
                      <div>
                        {item.data.length > 0 &&
                          item.data.map((x) => {
                            return (
                              <Accordion title={x.title}>
                                {x.description}
                              </Accordion>
                            );
                          })}
                      </div>
                    </div>
                    <hr className="my-0"></hr>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row space-2">
          <div class="col-lg-6 u-ver-divider u-ver-divider--none-lg mb-7 mb-lg-0">
            <div class="media pr-lg-9">
              <figure id="icon15" class="ie-height-56 w-100 max-width-8 mr-4">
                <img src={icon15} alt="" />
              </figure>
              <div class="media-body">
                <h3 class="h5">Can't find your answer?</h3>
                <p class="mb-1">
                  We want to answer all of your queries. Get in touch and we'll
                  get back to you as soon as we can.
                </p>
                <a class="font-size-1" href="#">
                  Email us{" "}
                  <span class="fas fa-angle-right align-middle ml-2"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="media pl-lg-9">
              <figure id="icon4" class="ie-height-56 w-100 max-width-8 mr-4">
                <img src={icon4} alt="" />
              </figure>
              <div class="media-body">
                <h3 class="h5">Technical questions</h3>
                <p class="mb-1">
                  Have some technical questions? Hit us on community page or
                  just say hello.
                </p>
                <a class="font-size-1" href="#">
                  Open ticket{" "}
                  <span class="fas fa-angle-right align-middle ml-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-0" />
    </>
  );
};

export default Faq;
