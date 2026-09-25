import React, { useState } from "react";
import Comment from "../reviewcomment";
import "./style.css";

import rvw1 from "../../../images/shop/shop-single/review/img-1.jpg";
import rvw2 from "../../../images/shop/shop-single/review/img-2.jpg";
import rvw3 from "../../../images/shop/shop-single/review/img-3.jpg";

const ShopTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      {/* ===== BOOTSTRAP NAV TABS ===== */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === "1" ? "active" : ""}`}
            onClick={() => toggle("1")}
          >
            Reviews (3)
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeTab === "2" ? "active" : ""}`}
            onClick={() => toggle("2")}
          >
            Descripation
          </button>
        </li>
      </ul>

      {/* ===== BOOTSTRAP TAB CONTENT ===== */}
      <div className="tab-content">
        {/* TAB 1 */}
        <div
          className={`tab-pane fade ${
            activeTab === "1" ? "show active" : ""
          }`}
        >
          <div className="row">
            <div className="col-12">
              <div className="review">
                <div className="reivew-section">
                  <h3>Review For item</h3>
                  <ul>
                    <li>
                      <div className="review-content">
                        <div className="reviewer-img">
                          <img src={rvw1} alt="" />
                        </div>
                        <div className="reviewer-say">
                          <h3>
                            Cobus Besten <span>June 7’2018</span>
                          </h3>
                          <ul className="rating">
                            {[...Array(5)].map((_, i) => (
                              <li key={i}>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                            ))}
                          </ul>
                          <p>
                            Lorem is simply dummy text of the printing and
                            typesetting industry. Lorem has been the industry's.
                          </p>
                        </div>
                      </div>

                      <ul>
                        <li>
                          <div className="review-content">
                            <div className="reviewer-img">
                              <img src={rvw2} alt="" />
                            </div>
                            <div className="reviewer-say">
                              <h3>
                                James Koster <span>June 7’2018</span>
                              </h3>
                              <ul className="rating">
                                {[...Array(5)].map((_, i) => (
                                  <li key={i}>
                                    <span>
                                      <i className="fa fa-star"></i>
                                    </span>
                                  </li>
                                ))}
                              </ul>
                              <p>
                                Lorem is simply dummy text of the printing and
                                typesetting industry. Lorem has been the
                                industry's.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="review-content">
                        <div className="reviewer-img">
                          <img src={rvw3} alt="" />
                        </div>
                        <div className="reviewer-say">
                          <h3>
                            Magnus <span>June 7’2018</span>
                          </h3>
                          <ul className="rating">
                            {[...Array(5)].map((_, i) => (
                              <li key={i}>
                                <span>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                            ))}
                          </ul>
                          <p>
                            Lorem is simply dummy text of the printing and
                            typesetting industry. Lorem has been the industry's.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <Comment />
              </div>
            </div>
          </div>
        </div>

        {/* TAB 2 */}
        <div
          className={`tab-pane fade ${
            activeTab === "2" ? "show active" : ""
          }`}
        >
          <div className="row">
            <div className="col-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTabs;
