import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import Select from "react-select";
import { colourOptions, Option } from "./Filter";

import React, { useState } from "react";
import "./CreateNewAddons.css";
const CreateNewAddons = () => {
 
  return (
    <div>
      <div className="addons-margin ">
        <div className="addons-filter">
         
         
          <div class="grid-container">
            <div class="item3">
              <div className="left-section">
                <div className="addons-heading">Create Addons</div>
                <p className="addonsname txt-grey">Addon Name</p>
                <div className="addonname-position">
                  <input
                    className="custom-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Addon name"
                  />
                </div>

                <p className="soldout txt-grey">Addon Group</p>
                <div className="soldout-position">
                  <div class="dropdown">
                    <select class="dropbtn" name="languages" id="lang">
                      <option value="" disabled="">
                        Select Addon group
                      </option>
                      <option value="javascript">JavaScript</option>
                      <option value="php">PHP</option>
                      <option value="java">Java</option>
                      <option value="golang">Golang</option>
                      <option value="python">Python</option>
                      <option value="c#">C#</option>
                      <option value="C++">C++</option>
                      <option value="erlang">Erlang</option>
                    </select>
                  </div>
                </div>

                <p className="addons-price txt-grey">Price</p>
                <div className="addons-price-left">
                  <div className="addons-price-position">
                    <i class="rs-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="indian-rupee-sign"
                        class="svg-inline--fa fa-indian-rupee-sign "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z"
                        ></path>
                      </svg>{" "}
                    </i>
                    <input
                      class="custom-button-left-default custom-input-half-width"
                      name="languages"
                      id="lang"
                      placeholder="Enter Price"
                    ></input>
                  </div>
                </div>
                <div className="addons-price-right">
                  <p className="addontype txt-grey">Addon Type</p>
                  <div className="addontype-position">
                    <div class="dropdown">
                      <select class="dropbtn" name="languages" id="lang">
                        <option value="" disabled="">
                          Select Addon Type
                        </option>
                        <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option>
                        <option value="C++">C++</option>
                        <option value="erlang">Erlang</option>
                      </select>
                    </div>
                  </div>
                  <div className="addons-submit">
                    <button class="add-item-button">Add Addon</button>
                  </div>
                  <div className="line-position">
                    <img src="Images/line.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="item4">
              <div className="addons-preview-header">
                <p className="txt-dark-grey">Preview</p>
              </div>
              <div className="addons-right-left">
                <div className="addons-name-review">
                  <p className="txt-grey">Addon name</p>
                </div>
                <div className="addons-name-content-review">
                  <p className="text-black">White Chocolate Sauce</p>
                </div>

                <div className="addons-soldout-review">
                  <p className="txt-grey">Sold Out</p>
                </div>
                <div className="addons-soldout-content-review">
                  <p className="text-black">None</p>
                </div>

                <div className="addons-price-review">
                  <p className="txt-grey">Price</p>
                </div>
                <div className="addons-price-content-review">
                  <p className="text-black">100</p>
                </div>
              </div>
              <div className="addons-right-right">
                <div className="addons-group-review">
                  <p className="txt-grey">Addon Group</p>
                </div>
                <div className="addons-group-content-review">
                  <p className="text-black">5</p>
                </div>
                <div className="addons-type-review">
                  <p className="txt-grey">Addon Type</p>
                </div>
                <div className="addons-type-content-review">
                  <p className="txt-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewAddons;
