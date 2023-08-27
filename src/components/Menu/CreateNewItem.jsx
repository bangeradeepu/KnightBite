import "./CreateNewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import TagDropdown from './TagDropdown';
import Select from "react-select";
import { colourOptions, Option } from "./Filter";

import React, { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { Checkbox } from "@mui/material";
import { MenuItem } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
// import './TagDropdown.css'

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
      /* Your StyledMenuItem styles */
    `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
      max-height: 120px;
      overflow-y: auto;
      border: 10px , #000;
      border-radius: 10px;
      background-color: #e2dddd;
      list-style: none;
      width: 170px;
      left: 50px;
      margin-left: 10px;
      padding-left: 10px;
      margin-top: 10px;
      /* Your StyledListbox styles */
    `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
      /* Your TriggerButton styles */
    `
);

function CreateNewItem() {
  // Tags
  const allTags = ["Best Seller", "New", "Spicy", "Must try", "spicy"]; // Add more tags as needed
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagCheckboxChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((selectedTag) => selectedTag !== tagToRemove)
    );
  };

  const availableTags = allTags.filter((tag) => !selectedTags.includes(tag));

  const tagRows = [];
  const rowSize = 2;

  for (let i = 0; i < selectedTags.length; i += rowSize) {
    const tagRow = selectedTags.slice(i, i + rowSize);
    tagRows.push(tagRow);
  }

  // tab switch
  const [activeTab, setActiveTab] = useState("Single"); // Set 'Items' as the default active tab
  const [filter, setFilter] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* <Head /> */}
      {/* <Nav /> */}
      {/* <TagDropdown/> */}

      <div className="box-create-item">
        <div className="group-wrapper">
          <div className="CI-add-multi-item">
            <div className="add-items-filter-buttons-container">
              <button
                className={
                  activeTab === "Single" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("Single")}
              >
                Single
              </button>
              <button
                className={
                  activeTab === "Combo" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("Combo")}
              >
                Combo
              </button>
              <button
                className={
                  activeTab === "MRP" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("MRP")}
              >
                MRP
              </button>
            </div>
          </div>

          <div className="group">
            {activeTab === "Single" && (
              <div className="items-right">
                <img
                  className="line"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/50da0663f6c1174b4030adb0f4371c15/img/line-11.svg"
                />

                <div className="input">
                  <div className="title-group">
                    <div className="overlap-group-3">
                      <input
                        className="custom-input"
                        placeholder="Enter Title"
                      />
                    </div>
                    <p className="add-items-header">Add Items</p>
                    <div className="text-wrapper-5">Title</div>
                  </div>

                  <div className="cat-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Category
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
                    <div className="text-wrapper-5">Category</div>
                  </div>
                  <div className="posid-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter POS ID"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">POS ID</div>
                  </div>
                  <div className="fullfillment-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Fulfilment modes
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
                    <div className="text-wrapper-8">Fulfilment Modes</div>
                  </div>
                  <div className="item-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Enter Item group
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
                    <div className="text-wrapper-10">Item groups</div>
                  </div>
                  <div className="weight-group">
                    <div className="div-2">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter weight"
                      />
                    </div>
                    <div className="text-wrapper-10">Weight (in gms)</div>
                  </div>
                  <div className="overlap-3">
                    <div className="serves-group">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="ENter serves"
                      />
                      <div className="top-up">Serves</div>
                    </div>
                  </div>
                  <div className="tags-group">
                    <div className="div-2">
                      <div className="ellipse-wrapper">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="b-slider"></span>
                        </label>
                      </div>{" "}
                    </div>
                    <div className="text-wrapper-8">Pre order enabled</div>
                  </div>

                  <div className="sort-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter sort order"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">Sort Order</div>
                  </div>
                  <div className="default-sales-price">
                    <div className="div-2">
                      <i className="rs-icon">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      </i>
                      <input
                        className="custom-button-left-default custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter default sales price"
                      />
                    </div>
                    <div className="text-wrapper-8">Default sales Price</div>
                  </div>
                  <div className="markup-group">
                    <div className="text-wrapper-15">
                      Markup Price (Optional)
                    </div>
                    <div className="sales-price-textbox-2">
                      <div className="overlap-group-markup">
                        <i className="rs-icon">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                        </i>
                        <input
                          className="custom-button-left-default custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter Markup price"
                        />
                        <div className="text-wrapper-14"></div>
                      </div>
                    </div>
                  </div>
                  <div className="cat-group-2">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Food Type
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
                    <div className="text-wrapper-8">Food Type</div>
                  </div>
                  <div className="desc-group">
                    <textarea className="rectangle"></textarea>
                    <div className="text-wrapper-16">Description</div>
                  </div>
                  <div className="is-recommended">
                    <div className="text-wrapper-10">Is Recommended</div>
                    <div className="radio-button">
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="b-slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="pre-order-group">
                    <div className="text-wrapper-image">Image</div>
                    <div className="overlap-group-4">
                      {/* <div className='text-wrapper-12'>Image</div> */}

                      <input type="file" className="custom-file-input" />
                    </div>
                  </div>
                  <div className="cat-textbox-3">
                    <div className="tag-dropdown-container">
                      <Dropdown>
                        <TriggerButton className="tag-menu-button">
                          Tags
                        </TriggerButton>
                        <Menu slots={{ listbox: StyledListbox }}>
                          {availableTags.map((tag) => (
                            <StyledMenuItem key={tag}>
                              <Checkbox
                                onChange={() => handleTagCheckboxChange(tag)}
                              />
                              {tag}
                            </StyledMenuItem>
                          ))}
                        </Menu>
                      </Dropdown>
                      <div className="selected-tags-container">
                        {tagRows.map((row, rowIndex) => (
                          <div key={rowIndex} className="tag-row">
                            {row.map((tag) => (
                              <div key={tag} className="selected-tag-container">
                                <div className="selected-tag">
                                  <span className="tag-label">{tag}</span>
                                  <button
                                    className="remove-tag-button"
                                    onClick={() => handleRemoveTag(tag)}
                                    onMouseOver={(e) =>
                                      (e.target.style.color = "red")
                                    }
                                    onMouseOut={(e) =>
                                      (e.target.style.color = "#000")
                                    }
                                  >
                                    <CloseIcon
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                      }}
                                    />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-item">
                  <button className="add-item-button">Add Item</button>
                </div>
                <h1 className="h-1">Preview</h1>

                <div className="text-wrapper-17">Tags</div>
                <div className="text-wrapper-18">Title</div>
                <div className="text-wrapper-19">Category</div>
                <div className="text-wrapper-20">Zinger Burger</div>
                <div className="text-wrapper-21">Bite of the day</div>
                <div className="text-wrapper-22">Food type</div>
                <div className="text-wrapper-23">Sort Order</div>
                <div className="text-wrapper-24">Is recommended</div>
                <p className="nonveg-icon txt-green">
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
                <div className="text-wrapper-25">0</div>
                <div className="text-wrapper-26">Yes</div>
                <div className="text-wrapper-27">Default sales price</div>
                <div className="text-wrapper-28">Markup Price</div>
                <div className="text-wrapper-29">100</div>
                <div className="text-wrapper-30">100</div>
                <div className="text-wrapper-31">Description</div>
                <div className="text-wrapper-32">POS ID</div>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus dui odio, lacinia molestie turpis sed, lobortis
                  aliquet felis. Vivamus enim quam, fringilla imperdiet
                  tincidunt
                </p>
                <div className="text-wrapper-33">Lorem ipsum</div>
                <div className="text-wrapper-34">CRM Title</div>
                <div className="text-wrapper-35">Fulfilment Modes</div>
                <div className="text-wrapper-36">2354</div>
                <div className="text-wrapper-37">Tags</div>
                <div className="text-wrapper-38">Item groups</div>
                <div className="new">
                  <div className="overlap-4">
                    <div className="text-wrapper-39">New</div>
                  </div>
                </div>
                <div className="spicy">
                  <div className="overlap-5">
                    <div className="text-wrapper-40">Spicy</div>
                  </div>
                </div>
                <div className="must-try">
                  <div className="overlap-5">
                    <div className="text-wrapper-41">Must try</div>
                  </div>
                </div>
                <div className="best-seller">
                  <div className="overlap-5">
                    <div className="text-wrapper-42">Best Seller</div>
                  </div>
                </div>
                <div className="text-wrapper-43">Pre-order timing</div>
                <div className="text-wrapper-44">Weight (in gms)</div>
                <div className="text-wrapper-45">Pre-order enabled</div>
                <div className="text-wrapper-46">No</div>
                <div className="text-wrapper-47">Serves</div>
                <div className="text-wrapper-48">2</div>

                <p className="ellipse-4 txt-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
                <p className="ellipse-5 txt-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
              </div>
            )}

            {activeTab === "Combo" && (
              <div className="items-right">
                <img
                  className="line"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/50da0663f6c1174b4030adb0f4371c15/img/line-11.svg"
                />

                <div className="input">
                  <div className="title-group">
                    <div className="overlap-group-3">
                      <input
                        className="custom-input"
                        placeholder="Enter Title"
                      />
                    </div>
                    <p className="add-items-header">Add Combo</p>
                    <div className="text-wrapper-5">Title</div>
                  </div>

                  <div className="cat-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Category
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
                    <div className="text-wrapper-5">Category</div>
                  </div>
                  <div className="posid-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter POS ID"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">POS ID</div>
                  </div>
                  <div className="fullfillment-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Fulfilment modes
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
                    <div className="text-wrapper-8">Fulfilment Modes</div>
                  </div>
                  <div className="item-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Enter Item group
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
                    <div className="text-wrapper-10">Item groups</div>
                  </div>
                  <div className="weight-group">
                    <div className="div-2">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter weight"
                      />
                    </div>
                    <div className="text-wrapper-10">Weight (in gms)</div>
                  </div>
                  <div className="overlap-3">
                    <div className="serves-group">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="ENter serves"
                      />
                      <div className="top-up">Serves</div>
                    </div>
                  </div>
                  <div className="tags-group">
                    <div className="div-2">
                      <div className="ellipse-wrapper">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="b-slider"></span>
                        </label>
                      </div>{" "}
                    </div>
                    <div className="text-wrapper-8">Pre order enabled</div>
                  </div>

                  <div className="sort-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter sort order"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">Sort Order</div>
                  </div>
                  <div className="default-sales-price">
                    <div className="div-2">
                      <i className="rs-icon">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      </i>
                      <input
                        className="custom-button-left-default custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter default sales price"
                      />
                    </div>
                    <div className="text-wrapper-8">Default sales Price</div>
                  </div>
                  <div className="markup-group">
                    <div className="text-wrapper-15">
                      Markup Price (Optional)
                    </div>
                    <div className="sales-price-textbox-2">
                      <div className="overlap-group-markup">
                        <i className="rs-icon">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                        </i>
                        <input
                          className="custom-button-left-default custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter Markup price"
                        />
                        <div className="text-wrapper-14"></div>
                      </div>
                    </div>
                  </div>
                  <div className="cat-group-2">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Food Type
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
                    <div className="text-wrapper-8">Food Type</div>
                  </div>
                  <div className="desc-group">
                    <textarea className="rectangle"></textarea>
                    <div className="text-wrapper-16">Description</div>
                  </div>
                  <div className="is-recommended">
                    <div className="text-wrapper-10">Is Recommended</div>
                    <div className="radio-button">
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="b-slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="pre-order-group">
                    <div className="text-wrapper-image">Image</div>
                    <div className="overlap-group-4">
                      {/* <div className='text-wrapper-12'>Image</div> */}

                      <input type="file" className="custom-file-input" />
                    </div>
                  </div>
                  <div className="cat-textbox-3">
                    <div className="tag-dropdown-container">
                      <Dropdown>
                        <TriggerButton className="tag-menu-button">
                          Tags
                        </TriggerButton>
                        <Menu slots={{ listbox: StyledListbox }}>
                          {availableTags.map((tag) => (
                            <StyledMenuItem key={tag}>
                              <Checkbox
                                onChange={() => handleTagCheckboxChange(tag)}
                              />
                              {tag}
                            </StyledMenuItem>
                          ))}
                        </Menu>
                      </Dropdown>
                      <div className="selected-tags-container">
                        {tagRows.map((row, rowIndex) => (
                          <div key={rowIndex} className="tag-row">
                            {row.map((tag) => (
                              <div key={tag} className="selected-tag-container">
                                <div className="selected-tag">
                                  <span className="tag-label">{tag}</span>
                                  <button
                                    className="remove-tag-button"
                                    onClick={() => handleRemoveTag(tag)}
                                    onMouseOver={(e) =>
                                      (e.target.style.color = "red")
                                    }
                                    onMouseOut={(e) =>
                                      (e.target.style.color = "#000")
                                    }
                                  >
                                    <CloseIcon
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                      }}
                                    />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-item">
                  <button className="add-item-button">Add Item</button>
                </div>
                <h1 className="h-1">Preview</h1>
                <div className="text-wrapper-17">Tags</div>
                <div className="text-wrapper-18">Title</div>
                <div className="text-wrapper-19">Category</div>
                <div className="text-wrapper-20">Zinger Burger</div>
                <div className="text-wrapper-21">Bite of the day</div>
                <div className="text-wrapper-22">Food type</div>
                <div className="text-wrapper-23">Sort Order</div>
                <div className="text-wrapper-24">Is recommended</div>
                <p className="nonveg-icon txt-green">
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
                <div className="text-wrapper-25">0</div>
                <div className="text-wrapper-26">Yes</div>
                <div className="text-wrapper-27">Default sales price</div>
                <div className="text-wrapper-28">Markup Price</div>
                <div className="text-wrapper-29">100</div>
                <div className="text-wrapper-30">100</div>
                <div className="text-wrapper-31">Description</div>
                <div className="text-wrapper-32">POS ID</div>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus dui odio, lacinia molestie turpis sed, lobortis
                  aliquet felis. Vivamus enim quam, fringilla imperdiet
                  tincidunt
                </p>
                <div className="text-wrapper-33">Lorem ipsum</div>
                <div className="text-wrapper-34">CRM Title</div>
                <div className="text-wrapper-35">Fulfilment Modes</div>
                <div className="text-wrapper-36">2354</div>
                <div className="text-wrapper-37">Tags</div>
                <div className="text-wrapper-38">Item groups</div>
                <div className="new">
                  <div className="overlap-4">
                    <div className="text-wrapper-39">New</div>
                  </div>
                </div>
                <div className="spicy">
                  <div className="overlap-5">
                    <div className="text-wrapper-40">Spicy</div>
                  </div>
                </div>
                <div className="must-try">
                  <div className="overlap-5">
                    <div className="text-wrapper-41">Must try</div>
                  </div>
                </div>
                <div className="best-seller">
                  <div className="overlap-5">
                    <div className="text-wrapper-42">Best Seller</div>
                  </div>
                </div>
                <div className="text-wrapper-43">Pre-order timing</div>
                <div className="text-wrapper-44">Weight (in gms)</div>
                <div className="text-wrapper-45">Pre-order enabled</div>
                <div className="text-wrapper-46">No</div>
                <div className="text-wrapper-47">Serves</div>
                <div className="text-wrapper-48">2</div>

                <p className="ellipse-4 txt-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
                <p className="ellipse-5 txt-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
              </div>
            )}

            {activeTab === "MRP" && (
              <div className="items-right">
                <img
                  className="line"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/50da0663f6c1174b4030adb0f4371c15/img/line-11.svg"
                />

                <div className="input">
                  <div className="title-group">
                    <div className="overlap-group-3">
                      <input
                        className="custom-input"
                        placeholder="Enter Title"
                      />
                    </div>
                    <p className="add-items-header">Add MRP</p>
                    <div className="text-wrapper-5">Title</div>
                  </div>

                  <div className="cat-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Category
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
                    <div className="text-wrapper-5">Category</div>
                  </div>
                  <div className="posid-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter POS ID"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">POS ID</div>
                  </div>
                  <div className="fullfillment-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Fulfilment modes
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
                    <div className="text-wrapper-8">Fulfilment Modes</div>
                  </div>
                  <div className="item-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Enter Item group
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
                    <div className="text-wrapper-10">Item groups</div>
                  </div>
                  <div className="weight-group">
                    <div className="div-2">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter weight"
                      />
                    </div>
                    <div className="text-wrapper-10">Weight (in gms)</div>
                  </div>
                  <div className="overlap-3">
                    <div className="serves-group">
                      <input
                        className="custom-input custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="ENter serves"
                      />
                      <div className="top-up">Serves</div>
                    </div>
                  </div>
                  <div className="tags-group">
                    <div className="div-2">
                      <div className="ellipse-wrapper">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="b-slider"></span>
                        </label>
                      </div>{" "}
                    </div>
                    <div className="text-wrapper-8">Pre order enabled</div>
                  </div>

                  <div className="sort-group">
                    <div className="div-2">
                      <div className="dropdown">
                        <input
                          className="custom-input custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter sort order"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper-8">Sort Order</div>
                  </div>
                  <div className="default-sales-price">
                    <div className="div-2">
                      <i className="rs-icon">
                        <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      </i>
                      <input
                        className="custom-button-left-default custom-input-half-width"
                        name="languages"
                        id="lang"
                        placeholder="Enter default sales price"
                      />
                    </div>
                    <div className="text-wrapper-8">Default sales Price</div>
                  </div>
                  <div className="markup-group">
                    <div className="text-wrapper-15">
                      Markup Price (Optional)
                    </div>
                    <div className="sales-price-textbox-2">
                      <div className="overlap-group-markup">
                        <i className="rs-icon">
                          <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                        </i>
                        <input
                          className="custom-button-left-default custom-input-half-width"
                          name="languages"
                          id="lang"
                          placeholder="Enter Markup price"
                        />
                        <div className="text-wrapper-14"></div>
                      </div>
                    </div>
                  </div>
                  <div className="cat-group-2">
                    <div className="div-2">
                      <div className="dropdown">
                        <select className="dropbtn" name="languages" id="lang">
                          <option value="" disabled selected>
                            Select Food Type
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
                    <div className="text-wrapper-8">Food Type</div>
                  </div>
                  <div className="desc-group">
                    <textarea className="rectangle"></textarea>
                    <div className="text-wrapper-16">Description</div>
                  </div>
                  <div className="is-recommended">
                    <div className="text-wrapper-10">Is Recommended</div>
                    <div className="radio-button">
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="b-slider"></span>
                      </label>
                    </div>
                  </div>
                  <div className="pre-order-group">
                    <div className="text-wrapper-image">Image</div>
                    <div className="overlap-group-4">
                      {/* <div className='text-wrapper-12'>Image</div> */}

                      <input type="file" className="custom-file-input" />
                    </div>
                  </div>
                  <div className="cat-textbox-3">
                    <div className="tag-dropdown-container">
                      <Dropdown>
                        <TriggerButton className="tag-menu-button">
                          Tags
                        </TriggerButton>
                        <Menu slots={{ listbox: StyledListbox }}>
                          {availableTags.map((tag) => (
                            <StyledMenuItem key={tag}>
                              <Checkbox
                                onChange={() => handleTagCheckboxChange(tag)}
                              />
                              {tag}
                            </StyledMenuItem>
                          ))}
                        </Menu>
                      </Dropdown>
                      <div className="selected-tags-container">
                        {tagRows.map((row, rowIndex) => (
                          <div key={rowIndex} className="tag-row">
                            {row.map((tag) => (
                              <div key={tag} className="selected-tag-container">
                                <div className="selected-tag">
                                  <span className="tag-label">{tag}</span>
                                  <button
                                    className="remove-tag-button"
                                    onClick={() => handleRemoveTag(tag)}
                                    onMouseOver={(e) =>
                                      (e.target.style.color = "red")
                                    }
                                    onMouseOut={(e) =>
                                      (e.target.style.color = "#000")
                                    }
                                  >
                                    <CloseIcon
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                      }}
                                    />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-item">
                  <button className="add-item-button">Add Item</button>
                </div>
                <h1 className="h-1">Preview</h1>

                <div className="text-wrapper-17">Tags</div>
                <div className="text-wrapper-18">Title</div>
                <div className="text-wrapper-19">Category</div>
                <div className="text-wrapper-20">Zinger Burger</div>
                <div className="text-wrapper-21">Bite of the day</div>
                <div className="text-wrapper-22">Food type</div>
                <div className="text-wrapper-23">Sort Order</div>
                <div className="text-wrapper-24">Is recommended</div>
                <p className="nonveg-icon txt-green">
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
                <div className="text-wrapper-25">0</div>
                <div className="text-wrapper-26">Yes</div>
                <div className="text-wrapper-27">Default sales price</div>
                <div className="text-wrapper-28">Markup Price</div>
                <div className="text-wrapper-29">100</div>
                <div className="text-wrapper-30">100</div>
                <div className="text-wrapper-31">Description</div>
                <div className="text-wrapper-32">POS ID</div>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus dui odio, lacinia molestie turpis sed, lobortis
                  aliquet felis. Vivamus enim quam, fringilla imperdiet
                  tincidunt
                </p>
                <div className="text-wrapper-33">Lorem ipsum</div>
                <div className="text-wrapper-34">CRM Title</div>
                <div className="text-wrapper-35">Fulfilment Modes</div>
                <div className="text-wrapper-36">2354</div>
                <div className="text-wrapper-37">Tags</div>
                <div className="text-wrapper-38">Item groups</div>
                <div className="new">
                  <div className="overlap-4">
                    <div className="text-wrapper-39">New</div>
                  </div>
                </div>
                <div className="spicy">
                  <div className="overlap-5">
                    <div className="text-wrapper-40">Spicy</div>
                  </div>
                </div>
                <div className="must-try">
                  <div className="overlap-5">
                    <div className="text-wrapper-41">Must try</div>
                  </div>
                </div>
                <div className="best-seller">
                  <div className="overlap-5">
                    <div className="text-wrapper-42">Best Seller</div>
                  </div>
                </div>
                <div className="text-wrapper-43">Pre-order timing</div>
                <div className="text-wrapper-44">Weight (in gms)</div>
                <div className="text-wrapper-45">Pre-order enabled</div>
                <div className="text-wrapper-46">No</div>
                <div className="text-wrapper-47">Serves</div>
                <div className="text-wrapper-48">2</div>

                <p className="ellipse-4 txt-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
                <p className="ellipse-5 txt-red">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                    />
                  </svg>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewItem;
