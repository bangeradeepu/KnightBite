import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import FileCopyIcon from "@mui/icons-material/FileCopy"; // Import FileCopyIcon from the correct path
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import YourComponent from "../../YourComponent";
const Home = () => {
  const navigate = useNavigate();
  const handleshare = () => {
    navigate("/CreateNewItem");
  };
  // To copy link
  const handleCopyClick = () => {
    const urlToCopy = "https://knightbite.kitchenos.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the Clipboard API if available
      navigator.clipboard
        .writeText(urlToCopy)
        .then(() => {
          console.log("URL copied to clipboard:", urlToCopy);
        })
        .catch((error) => {
          console.error("Copy failed:", error);
        });
    } else {
      // Fallback method for browsers that don't support Clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = urlToCopy;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        console.log("URL copied to clipboard:", urlToCopy);
      } catch (error) {
        console.error("Copy failed:", error);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
  return (
    <div>
      {/* <Head /> */}
      {/* <YourComponent /> */}
      {/* <Nav /> */}
      <div className='Dhome-home-page'>
        <div className='Dhome-div'>
          <div className='home-top'>
            <div className='Dhome-overlap'>
              <div className='Dhome-rectangle' />
              <h1 className='Dhome-text-wrapper'>
                Welcome, get started with these steps to power up your
                restaurant!
              </h1>
              <div className='right-animatedrec-container'>
                <div className='right-animatedrec-group'>
                  <div className='right-animatedrec-overlap-group'>
                    <div className='right-animatedrec-div'>
                      <div className='right-animatedrec-rectangle' />
                      <div className='right-animatedrec-rectangle-3' />
                      <div className='right-animatedrec-rectangle-4' />
                      <div className='right-animatedrec-rectangle-5' />
                      <div className='right-animatedrec-rectangle-6' />
                      <div className='right-animatedrec-rectangle-7' />
                      <div className='right-animatedrec-rectangle-8' />
                      <div className='right-animatedrec-rectangle-9' />
                      <div className='right-animatedrec-rectangle-10' />
                      <div className='right-animatedrec-rectangle-11' />
                    </div>
                  </div>
                </div>
              </div>
              <p className='Dhome-quick-add-items-on'>
                Quick add items on your menu.
                <br />
                You can also modify items <br />
                once added.
              </p>
              <p className='Dhome-create-your-menu-by'>
                Create your menu by adding <br />
                items
              </p>
              <img
                className='Dhome-line'
                alt='Line'
                src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/line-4.svg'
              />
              <div className='Dhome-share-restaurant'>
                <p className='Dhome-share-your'>
                  Share your restaurant details
                  <br />
                  with customers
                </p>

                <div className='animatedrec-container'>
                  <div className='animatedrec-group'>
                    <div className='animatedrec-overlap-group'>
                      <div className='animatedrec-div'>
                        <div className='animatedrec-rectangle' />
                        <div className='animatedrec-ellipse' />
                        <article class='principle twelve'>
                            <div class='shape'>
                              <div class='container'>
                                <span class='item one'></span>
                                <span class='item two'></span>
                                <span class='item three'></span>
                                {/* <span class='item four'></span> */}
                              </div>
                            </div>
                          </article>
                        <div className='animatedrec-rectangle-2' />
                        <div className='animatedrec-rectangle-3' />
                        <div className='animatedrec-rectangle-4' />
                        <div className='animatedrec-rectangle-5' />
                        <div className='animatedrec-rectangle-6' />
                        <div className='animatedrec-rectangle-7' />
                        <div className='animatedrec-rectangle-8' />
                        <div className='animatedrec-rectangle-9' />
                        <div className='animatedrec-rectangle-10' />
                        <div className='animatedrec-rectangle-11' />
                        <div className='animatedrec-div'>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className='Dhome-your-customer-can'>
                  Your customer can now view your <br />
                  restaurant website and start <br />
                  ordering online
                </p>

                <div className='Dhome-frame'>
                  <button className='g-button bg-green' onClick={handleshare}>
                    Share restaurant link <FontAwesomeIcon icon={faShare} />
                  </button>
                </div>
              </div>

              <div className='Dhome-group-3'>
                <div className='Dhome-text-wrapper-3'>
                  <div className='App'>
                    <Tooltip title='Copy' placement='right-start'>
                      <span>
                        {'https://knightbite.kitchens.com'}
                        <IconButton onClick={handleCopyClick}>
                          <FileCopyIcon
                            style={{ color: '#229753', fontSize: '18px' }}
                          />
                        </IconButton>
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className='Dhome-add-items'>
                <div className='Dhome-overlap-2'>
                  <img
                    className='Dhome-vector'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/vector-4.svg'
                  />
                  <div className='Dhome-start-adding-items'>
                    Start&nbsp;&nbsp;adding items
                  </div>
                </div>
              </div>
              <div className='Dhome-text-wrapper-4'>
                Start adding orders Manually
              </div>
              <p className='Dhome-add-offline-orders'>
                Add offline orders such as Dine-in <br />
                or WhatsApp orders manually
              </p>
              <div className='Dhome-add-order'>
                <img
                  className='Dhome-vector-2'
                  alt='Vector'
                  src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/vector-4.svg'
                />
                <div className='Dhome-text-wrapper-5'>Add an order</div>
              </div>
              <div className='Dhome-show-team'>
                <img
                  className='Dhome-vector-3'
                  alt='Vector'
                  src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/vector-4.svg'
                />
                <div className='Dhome-text-wrapper-5'>Show Team Settings</div>
              </div>
              <div className='Dhome-text-wrapper-6'>
                Kitchen Display Settings
              </div>
              <p className='Dhome-add-kitchen-staff-as'>
                Add Kitchen staff as your team member
                <br />
                to handle orders from Kitchen display
              </p>
            </div>
            <div className='Dhome-latest-orders'>
              <div className='Dhome-lastest-order'>
                <div className='Dhome-group-4'>
                  <div className='Dhome-text-wrapper-7'>#726183KB</div>
                  <div className='Dhome-text-wrapper-8'>15 mins ago</div>
                </div>
                <div className='Dhome-group-5'>
                  <div className='Dhome-overlap-group-2'>
                    <div className='Dhome-div-2' />
                    <div className='Dhome-text-wrapper-9'>Dine-in</div>
                  </div>
                  <div className='Dhome-text-wrapper-10'>Table - 12</div>
                </div>
                <div className='Dhome-text-wrapper-11'>4 items</div>
                <div className='Dhome-div-wrapper'>
                  <div className='Dhome-text-wrapper-12'>In Progress</div>
                </div>
                <div className='Dhome-frame-2'>
                  <div className='Dhome-text-wrapper-12'>Payment pending</div>
                </div>
              </div>
              <div className='Dhome-lastest-order-2'>
                <div className='Dhome-group-4'>
                  <div className='Dhome-text-wrapper-7'>#726183KB</div>
                  <div className='Dhome-text-wrapper-8'>15 mins ago</div>
                </div>
                <div className='Dhome-group-6'>
                  <div className='Dhome-div-2'>Dine-in</div>
                  <div className='Dhome-text-wrapper-10'>Table - 12</div>
                </div>
                <div className='Dhome-text-wrapper-11'>4 items</div>
                <div className='Dhome-div-wrapper'>
                  <div className='Dhome-text-wrapper-12'>In Progress</div>
                </div>
                <div className='Dhome-frame-2'>
                  <div className='Dhome-text-wrapper-12'>Payment pending</div>
                </div>
              </div>
              <div className='Dhome-lastest-order-3'>
                <div className='Dhome-group-4'>
                  <div className='Dhome-text-wrapper-7'>#726183KB</div>
                  <div className='Dhome-text-wrapper-8'>15 mins ago</div>
                </div>
                <div className='Dhome-group-6'>
                  <div className='Dhome-div-2'>Dine-in</div>
                  <div className='Dhome-text-wrapper-10'>Table - 12</div>
                </div>
                <div className='Dhome-text-wrapper-11'>4 items</div>
                <div className='Dhome-div-wrapper'>
                  <div className='Dhome-text-wrapper-12'>In Progress</div>
                </div>
                <div className='Dhome-frame-2'>
                  <div className='Dhome-text-wrapper-12'>Payment pending</div>
                </div>
              </div>
              <div className='Dhome-lastest-order-4'>
                <div className='Dhome-group-4'>
                  <div className='Dhome-text-wrapper-7'>#726183KB</div>
                  <div className='Dhome-text-wrapper-8'>15 mins ago</div>
                </div>
                <div className='Dhome-group-6'>
                  <div className='Dhome-div-2'>Dine-in</div>
                  <div className='Dhome-text-wrapper-10'>Table - 12</div>
                </div>
                <div className='Dhome-text-wrapper-11'>4 items</div>
                <div className='Dhome-div-wrapper'>
                  <div className='Dhome-text-wrapper-12'>In Progress</div>
                </div>
                <div className='Dhome-frame-2'>
                  <div className='Dhome-text-wrapper-12'>Payment pending</div>
                </div>
              </div>
              <div className='Dhome-lastest-order-5'>
                <div className='Dhome-group-4'>
                  <div className='Dhome-text-wrapper-7'>#726183KB</div>
                  <div className='Dhome-text-wrapper-8'>15 mins ago</div>
                </div>
                <div className='Dhome-group-7'>
                  <div className='Dhome-div-2'>Dine-in</div>
                  <div className='Dhome-text-wrapper-10'>Table - 12</div>
                </div>
                <div className='Dhome-text-wrapper-11'>4 items</div>
                <div className='Dhome-frame-3'>
                  <div className='Dhome-text-wrapper-13'>Driver Assigned</div>
                </div>
                <div className='Dhome-frame-2'>
                  <div className='Dhome-text-wrapper-12'>Payment pending</div>
                </div>
              </div>
              <div className='Dhome-text-wrapper-14'>View All orders</div>
              <div className='Dhome-text-wrapper-15'>Latest orders</div>
            </div>
            <div className='Dhome-text-wrapper-16'>View All items</div>
            <div className='Dhome-trending-items'>Trending items</div>
            <div className='Dhome-overlap-3'>
              <div className='Dhome-store-view'>
                <div className='Dhome-text-wrapper-15'>Store View</div>
                <div className='Dhome-overlap-wrapper'>
                  <div className='Dhome-overlap-4'>
                    <div className='Dhome-order-today'>
                      <div className='Dhome-text-wrapper-17'>Orders Today</div>
                      <div className='Dhome-text-wrapper-18'>87</div>
                    </div>
                    <div className='Dhome-total-revenue'>
                      <div className='Dhome-text-wrapper-19'>
                        Total revenue today
                      </div>
                      <div className='Dhome-text-wrapper-20'>16,300</div>
                    </div>
                    <div className='Dhome-total-revenue-2'>
                      <div className='Dhome-text-wrapper-21'>19,726</div>
                      <div className='Dhome-text-wrapper-22'>
                        Total Revenue Yesterday
                      </div>
                    </div>
                    <div className='Dhome-order-yesterday'>
                      <div className='Dhome-text-wrapper-23'>
                        Orders Yesterday
                      </div>
                      <div className='Dhome-text-wrapper-24'>121</div>
                    </div>
                    <div className='Dhome-store-view-bar-chart'>
                      <div className='Dhome-text-wrapper-25'>11:59 PM</div>
                      <div className='Dhome-text-wrapper-26'>12:00 AM</div>
                      <div className='Dhome-overlap-5'>
                        <img
                          className='Dhome-line-2'
                          alt='Line'
                          src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/line-2.svg'
                        />
                        <div className='Dhome-rectangle-13' />
                        <div className='Dhome-rectangle-14' />
                        <div className='Dhome-rectangle-15' />
                        <div className='Dhome-rectangle-16' />
                        <div className='Dhome-rectangle-17' />
                        <div className='Dhome-rectangle-18' />
                        <div className='Dhome-rectangle-19' />
                        <div className='Dhome-rectangle-20' />
                        <div className='Dhome-rectangle-21' />
                        <div className='Dhome-orders-preview-chart'>
                          <div className='Dhome-overlap-group-3'>
                            <div className='Dhome-text-wrapper-27'>
                              12 Orders
                            </div>
                            <div className='Dhome-text-wrapper-28'>6:30 PM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='Dhome-group-8'>
                <div className='Dhome-overlap-6'>
                  <div className='Dhome-select-location'>
                    <div className='Dhome-select-location-2'>
                      Select&nbsp;&nbsp;Location
                    </div>
                    <div className='Dhome-mangalore-location'>
                      <div className='Dhome-mangalore-text-wrapper'>
                        <div className='Dhome-mangalore-text'>Mangalore</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className='Dhome-vector-4'
                    alt='Vector'
                    src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/vector-1.svg'
                  />
                </div>
              </div>
              <div className='Dhome-group-9'>
                <div className='Dhome-overlap-7'>
                  <div className='Dhome-select-duration'>
                    <div className='Dhome-select-duration-2'>
                      <div className='Dhome-text-wrapper-29'>7:00 - 8:00</div>
                    </div>
                  </div>
                  <div className='Dhome-group-10'>
                    <div className='Dhome-select-duration-text'>
                      Select&nbsp;&nbsp;Duration
                    </div>
                    <div className='Dhome-carbon-time-wrapper'>
                      <img
                        className='Dhome-carbon-time'
                        alt='Carbon time'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/carbon-time-1.svg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Dhome-frame-wrapper'>
              <div className='Dhome-frame-4'>
                <div className='Dhome-group-11'>
                  <div className='Dhome-group-12'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw-5@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>
                      Double Cheese Burger
                    </div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                  <div className='Dhome-group-13'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw-4@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>Banana Pancake</div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                </div>
                <div className='Dhome-group-11'>
                  <div className='Dhome-group-12'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash-ejrmcxlw'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw-3@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>Spicy Noodles</div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                  <div className='Dhome-group-13'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash-ejrmcxlw'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw-2@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>Oreo Shake</div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                </div>
                <div className='Dhome-group-11'>
                  <div className='Dhome-group-12'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash-ejrmcxlw'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw-1@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>
                      Spicy Fried Rice
                    </div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                  <div className='Dhome-group-13'>
                    <div className='Dhome-overlap-group-4'>
                      <div className='Dhome-ellipse-2' />
                      <img
                        className='Dhome-unsplash-ejrmcxlw'
                        alt='Unsplash'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/unsplash-e94j3rmcxlw@2x.png'
                      />
                    </div>
                    <div className='Dhome-text-wrapper-30'>Pepperoni Pizza</div>
                    <div className='Dhome-text-wrapper-31'>Order</div>
                    <div className='Dhome-text-wrapper-32'>90</div>
                    <div className='Dhome-ellipse-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='Dhome-group-14'>
              <div className='Dhome-trending-items-2'>Sales</div>
              <div className='Dhome-group-15'>
                <div className='Dhome-overlap-8'>
                  <div className='Dhome-group-16'>
                    <div className='Dhome-overlap-9'>
                      <div className='Dhome-sales'>
                        <div className='Dhome-sales-today'>
                          <div className='Dhome-text-wrapper-17'>
                            Sales Today
                          </div>
                          <div className='Dhome-text-wrapper-33'>87</div>
                        </div>
                        <div className='Dhome-sales-yesterday'>
                          <div className='Dhome-text-wrapper-23'>
                            Sales Yesterday
                          </div>
                          <div className='Dhome-text-wrapper-34'>121</div>
                        </div>
                        <div className='Dhome-sales-chart'>
                          <div className='Dhome-text-wrapper-35'>11:59 PM</div>
                          <div className='Dhome-text-wrapper-36'>12:00 AM</div>
                          <div className='Dhome-overlap-10'>
                            <img
                              className='Dhome-line-3'
                              alt='Line'
                              src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/line-1.svg'
                            />
                            <div className='Dhome-rectangle-22' />
                            <div className='Dhome-rectangle-23' />
                            <div className='Dhome-rectangle-24' />
                            <div className='Dhome-rectangle-25' />
                            <div className='Dhome-rectangle-26' />
                            <div className='Dhome-rectangle-27' />
                            <div className='Dhome-rectangle-28' />
                            <div className='Dhome-rectangle-29' />
                            <div className='Dhome-rectangle-30' />
                            <div className='Dhome-sales-chart-preview'>
                              <div className='Dhome-overlap-group-5'>
                                <div className='Dhome-text-wrapper-37'>
                                  12 Orders
                                </div>
                                <div className='Dhome-text-wrapper-38'>
                                  6:30 PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='Dhome-group-17'>
                        <div className='Dhome-overlap-7'>
                          <div className='Dhome-select-duration-wrapper'>
                            <div className='Dhome-select-duration-3'>
                              <div className='Dhome-text-wrapper-29'>
                                7:00 - 8:00
                              </div>
                            </div>
                          </div>
                          <div className='Dhome-group-10'>
                            <div className='Dhome-select-duration-text'>
                              Select&nbsp;&nbsp;Duration
                            </div>
                            <div className='Dhome-carbon-time-wrapper'>
                              <img
                                className='Dhome-carbon-time-2'
                                alt='Carbon time'
                                src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/carbon-time.svg'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='Dhome-group-18'>
                    <div className='Dhome-overlap-11'>
                      <div className='Dhome-select-location-3'>
                        <div className='Dhome-select-location-4'>
                          Select&nbsp;&nbsp;Location
                        </div>
                        <div className='Dhome-mangalore-location-2'>
                          <div className='Dhome-overlap-group-6'>
                            <div className='Dhome-mangalore-text-2'>
                              Mangalore
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className='Dhome-vector-5'
                        alt='Vector'
                        src='https://generation-sessions.s3.amazonaws.com/c2617dff640c75e7e8c8e992af119565/img/vector.svg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
