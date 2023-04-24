import React, { useState } from "react";
import menuIcon from "../assets/icons/menu.png";
import sunnyImage from "../assets/images/sunny.png";
import waterIcon from "../assets/icons/water.png";

export default function MainCard() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className="row main-card">
        <div className="col-sm-6 d-flex justify-content-end">
          <div className="left-card">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-12 d-flex justify-content-end">
                    <img src={menuIcon} alt="menu-icon" />
                  </div>
                  <div className="col-sm-12 d-flex justify-content-between">
                    <div className="row">
                      <div className="col-sm-3 d-flex align-items-center">
                        <img src={sunnyImage} alt="sunny-image" />
                      </div>
                      {/* <div className="col-sm-1"></div> */}
                      <div className="col-sm-9 d-flex align-items-center">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-sm-12 place">
                                <p>Sleman, Yogyakarta</p>
                              </div>
                              <div className="col-sm-12 date">
                                <p>Monday 16/01/2023</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="row">
                  <div class="col-sm-12 d-flex justify-content-center suhu">
                    <p>28</p>
                    <span>°C</span>
                  </div>
                  <div className="col-sm-12 d-flex justify-content-center keterangan-cuaca">
                    <p>Mostly cloudy</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 d-flex justify-content-center align-items-center persen">
                <img src={waterIcon} alt="water-icon" />{" "}
                <span>Humadity 92%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 d-flex justify-content-start">
          <div className="right-card d-flex align-items-center">
            <div className="row">
              <div className="col-sm-12 heading-sliding text-center">
                <p>Sliding Roof</p>
              </div>
              <div className="col-sm-12 text-center sub-heading-sliding">
                <p>Controller</p>
              </div>

              <div className="col-sm-12 d-flex justify-content-center">
                <div className={`button-container${isActive ? " active" : ""}`}>
                  <div
                    className={`button${isActive ? " active" : ""}`}
                    onClick={handleButtonClick}
                  ></div>
                </div>
              </div>
              <div className="col-sm-12 d-flex justify-content-center close-open">
                <div className="row">
                  <div className="col-sm-6">
                    <p>Close</p>
                  </div>
                  <div className="col-sm-6">
                    <p>Open</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 keterangan-sliding text-center">
                <p>Atap tertutup secara otomatis karena mendeteksi hujan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
