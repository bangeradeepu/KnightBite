import React, { useState } from 'react';
import './Mobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import M_Sidebar from '../../M_Sidebar';

function Mobile() {

  return (
    <div className="Mhome-android-large">
      
    <div className="Mhome-div">
      <div className="Mhome-share-your">
        <div className="Mhome-share-restaurant">
          <p className="Mhome-text-wrapper">
            Share your restaurant <br />
            details with customers
          </p>
          <p className="Mhome-your-customer-can">
            Your customer can now <br />
            view your&nbsp;&nbsp;restaurant <br />
            website and start <br />
            ordering online
          </p>
          <div className="Mhome-frame">
            <div className="Mhome-text-wrapper-2">Share restaurant link</div>
            <img
              className="Mhome-ic-outline-share"
              alt="Ic outline share"
              src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/ic-outline-share.svg"
            />
          </div>
          <div className="Mhome-text-wrapper-3">https://knightbite.kitchenos.com</div>
        </div>
        <div className="Mhome-group">
          <div className="Mhome-overlap-group">
            <div className="Mhome-group-2">
              <div className="Mhome-rectangle" />
              <div className="Mhome-ellipse" />
              <div className="Mhome-rectangle-2" />
              <div className="Mhome-rectangle-3" />
              <div className="Mhome-rectangle-4" />
              <div className="Mhome-rectangle-5" />
              <div className="Mhome-rectangle-6" />
              <div className="Mhome-rectangle-7" />
              <div className="Mhome-rectangle-8" />
              <div className="Mhome-rectangle-9" />
              <div className="Mhome-rectangle-10" />
              <div className="Mhome-rectangle-11" />
              <p className="Mhome-hungry-at-night-it-s">
                Hungry at night?
                <br />
                It’s your right for a <br />
                bite
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Mhome-create-your-menu">
        <p className="Mhome-quick-add-items-on">
          Quick add items on <br />
          your menu.You can also <br />
          modify items once added.
        </p>
        <p className="Mhome-create-your-menu-by">
          Create your menu
          <br /> by adding items
        </p>
        <div className="Mhome-overlap-group-wrapper">
          <div className="Mhome-group-wrapper">
            <img
              className="Mhome-img"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/group-16@2x.png"
            />
          </div>
        </div>
        <div className="Mhome-add-items">
          <div className="Mhome-overlap">
            <img
              className="Mhome-vector"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/vector-4.svg"
            />
            <div className="Mhome-start-adding-items">Start&nbsp;&nbsp;adding items</div>
          </div>
        </div>
      </div>
      <div className="Mhome-overlap-2">
        <img
          className="Mhome-vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/vector-4.svg"
        />
        <div className="Mhome-start-adding-orders">
          <div className="Mhome-text-wrapper-4">Start adding orders Manually</div>
          <p className="Mhome-add-offline-orders">
            Add offline orders such as Dine-in <br />
            or WhatsApp orders manually
          </p>
          <div className="Mhome-add-order">
            <div className="Mhome-text-wrapper-5">Add an order</div>
          </div>
        </div>
      </div>
      <img
        className="Mhome-vector-3"
        alt="Vector"
        src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/vector-4.svg"
      />
      <div className="Mhome-kitchen-display">
        <div className="Mhome-text-wrapper-4">Kitchen Display Settings</div>
        <p className="Mhome-add-kitchen-staff-as">
          Add Kitchen staff as your team member
          <br />
          to handle orders from Kitchen display
        </p>
      </div>
      <img
        className="Mhome-line"
        alt="Line"
        src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/line-8.svg"
      />
      <div className="Mhome-latest-orders">
        <div className="Mhome-div-wrapper">
          <div className="Mhome-overlap-group-2">
            <div className="Mhome-div-2" />
            <div className="Mhome-group-3">
              <div className="Mhome-group-4">
                <div className="Mhome-group-5">
                  <div className="Mhome-text-wrapper-6">#726183KB</div>
                  <div className="Mhome-text-wrapper-7">15 mins ago</div>
                </div>
                <div className="Mhome-group-6">
                  <div className="Mhome-text-wrapper-8">Dine-in</div>
                  <div className="Mhome-text-wrapper-9">Table - 12</div>
                </div>
                <div className="Mhome-frame-2">
                  <div className="Mhome-text-wrapper-10">In Progress</div>
                </div>
                <div className="Mhome-frame-3">
                  <div className="Mhome-text-wrapper-11">Payment pending</div>
                </div>
                <div className="Mhome-group-7">
                  <div className="Mhome-text-wrapper-12">No of Items</div>
                  <div className="Mhome-text-wrapper-13">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Mhome-overlap-3">
          <div className="Mhome-div-2">
            <div className="Mhome-group-8">
              <div className="Mhome-group-4">
                <div className="Mhome-group-5">
                  <div className="Mhome-text-wrapper-6">#726183KB</div>
                  <div className="Mhome-text-wrapper-7">15 mins ago</div>
                </div>
                <div className="Mhome-group-6">
                  <div className="Mhome-text-wrapper-8">Dine-in</div>
                  <div className="Mhome-text-wrapper-9">Table - 12</div>
                </div>
                <div className="Mhome-frame-2">
                  <div className="Mhome-text-wrapper-10">In Progress</div>
                </div>
                <div className="Mhome-frame-3">
                  <div className="Mhome-text-wrapper-11">Payment pending</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Mhome-group-9">
            <div className="Mhome-text-wrapper-12">No of Items</div>
            <div className="Mhome-text-wrapper-13">4</div>
          </div>
        </div>
        <div className="Mhome-text-wrapper-14">View All orders</div>
        <div className="Mhome-text-wrapper-15">Latest orders</div>
      </div>
      <div className="Mhome-show-team">
        <div className="Mhome-text-wrapper-5">Show Team Settings</div>
      </div>
      <div className="Mhome-group-10">
        <div className="Mhome-store-view-wrapper">
          <div className="Mhome-store-view">
            <div className="Mhome-text-wrapper-16">Store View</div>
            <div className="Mhome-overlap-4">
              <div className="Mhome-order-today">
                <div className="Mhome-order-today-2">Orders Today</div>
                <div className="Mhome-text-wrapper-17">87</div>
              </div>
              <div className="Mhome-overlap-5">
                <div className="Mhome-total-revenue">
                  <div className="Mhome-total-revenue-today">
                    Total revenue <br />
                    today
                  </div>
                  <div className="Mhome-text-wrapper-18">16,300</div>
                </div>
                <div className="Mhome-total-revenue-2">
                  <div className="Mhome-text-wrapper-19">19,726</div>
                  <div className="Mhome-total-revenue-3">
                    Total Revenue <br />
                    Yesterday
                  </div>
                </div>
                <div className="Mhome-overlap-wrapper">
                  <div className="Mhome-overlap-6">
                    <div className="Mhome-select-duration">
                      <div className="Mhome-select-duration-2">
                        <div className="Mhome-text-wrapper-20">7:00 - 8:00</div>
                      </div>
                    </div>
                    <div className="Mhome-group-11">
                      <div className="Mhome-select-duration-text">Select&nbsp;&nbsp;Duration</div>
                      <div className="Mhome-carbon-time-wrapper">
                        <img
                          className="Mhome-carbon-time"
                          alt="Carbon time"
                          src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/carbon-time-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Mhome-overlap-7">
                <div className="Mhome-order-yesterday">
                  <div className="Mhome-text-wrapper-21">Orders Yesterday</div>
                  <div className="Mhome-text-wrapper-22">121</div>
                </div>
                <div className="Mhome-group-12">
                  <div className="Mhome-select-location">Select&nbsp;&nbsp;Location</div>
                  <div className="Mhome-overlap-8">
                    <div className="Mhome-mangalore-text">Mangalore</div>
                    <img
                      className="Mhome-vector-4"
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="Mhome-store-view-bar-chart">
                <div className="Mhome-text-wrapper-23">11:59 PM</div>
                <div className="Mhome-text-wrapper-24">12:00 AM</div>
                <div className="Mhome-overlap-9">
                  <img
                    className="Mhome-line-2"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/line-2.svg"
                  />
                  <div className="Mhome-rectangle-12" />
                  <div className="Mhome-rectangle-13" />
                  <div className="Mhome-rectangle-14" />
                  <div className="Mhome-rectangle-15" />
                  <div className="Mhome-rectangle-16" />
                  <div className="Mhome-rectangle-17" />
                  <div className="Mhome-rectangle-18" />
                  <div className="Mhome-rectangle-19" />
                  <div className="Mhome-rectangle-20" />
                  <div className="Mhome-orders-preview-chart">
                    <div className="Mhome-overlap-group-3">
                      <div className="Mhome-rectangle-21" />
                      <div className="Mhome-text-wrapper-25">12 Orders</div>
                      <div className="Mhome-text-wrapper-26">6:30 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Mhome-group-13">
        <div className="Mhome-overlap-10">
          <div className="Mhome-group-14">
            <div className="Mhome-overlap-11">
              <div className="Mhome-sales">
                <div className="Mhome-sales-today">
                  <div className="Mhome-text-wrapper-27">Sales Today</div>
                  <div className="Mhome-text-wrapper-28">87</div>
                </div>
                <div className="Mhome-sales-yesterday">
                  <div className="Mhome-text-wrapper-29">Sales Yesterday</div>
                  <div className="Mhome-text-wrapper-30">121</div>
                </div>
                <div className="Mhome-sales-chart">
                  <div className="Mhome-text-wrapper-31">11:59 PM</div>
                  <div className="Mhome-text-wrapper-32">12:00 AM</div>
                  <div className="Mhome-overlap-12">
                    <img
                      className="Mhome-line-3"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/line-1.svg"
                    />
                    <div className="Mhome-rectangle-22" />
                    <div className="Mhome-rectangle-23" />
                    <div className="Mhome-rectangle-24" />
                    <div className="Mhome-rectangle-25" />
                    <div className="Mhome-rectangle-26" />
                    <div className="Mhome-rectangle-27" />
                    <div className="Mhome-rectangle-28" />
                    <div className="Mhome-rectangle-29" />
                    <div className="Mhome-rectangle-30" />
                    <div className="Mhome-sales-chart-preview">
                      <div className="Mhome-overlap-group-4">
                        <div className="Mhome-text-wrapper-33">12 Orders</div>
                        <div className="Mhome-text-wrapper-34">6:30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Mhome-group-15">
                <div className="Mhome-overlap-13">
                  <div className="Mhome-select-duration-wrapper">
                    <div className="Mhome-select-duration-3">
                      <div className="Mhome-text-wrapper-35">7:00 - 8:00</div>
                    </div>
                  </div>
                  <div className="Mhome-group-16">
                    <div className="Mhome-text-wrapper-36">Select&nbsp;&nbsp;Duration</div>
                    <div className="Mhome-img-wrapper">
                      <img
                        className="Mhome-carbon-time-2"
                        alt="Carbon time"
                        src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/carbon-time.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Mhome-group-17">
            <div className="Mhome-overlap-14">
              <div className="Mhome-select-location-2">
                <div className="Mhome-text-wrapper-36">Select&nbsp;&nbsp;Location</div>
                <div className="Mhome-mangalore-location">
                  <div className="Mhome-mangalore-text-wrapper">
                    <div className="Mhome-mangalore-text-2">Mangalore</div>
                  </div>
                </div>
              </div>
              <img
                className="Mhome-vector-5"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Mhome-trending-items">Sales</div>
      <img
        className="Mhome-line-4"
        alt="Line"
        src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/line-9.svg"
      />
      <div className="Mhome-text-wrapper-37">View All items</div>
      <div className="Mhome-trending-items-2">Trending items</div>
      <div className="Mhome-frame-wrapper">
        <div className="Mhome-frame-4">
          <div className="Mhome-group-18">
            <div className="Mhome-group-19">
              <div className="Mhome-overlap-group-5">
                <div className="Mhome-ellipse-2" />
                <img
                  className="Mhome-unsplash"
                  alt="Unsplash"
                  src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/unsplash-e94j3rmcxlw-2@2x.png"
                />
              </div>
              <div className="Mhome-text-wrapper-38">Double Cheese Burger</div>
              <div className="Mhome-text-wrapper-39">Order</div>
              <div className="Mhome-text-wrapper-40">90</div>
              <div className="Mhome-ellipse-3" />
            </div>
          </div>
          <div className="Mhome-group-18">
            <div className="Mhome-group-19">
              <div className="Mhome-overlap-group-5">
                <div className="Mhome-ellipse-4" />
                <img
                  className="Mhome-unsplash-ejrmcxlw"
                  alt="Unsplash"
                  src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/unsplash-e94j3rmcxlw-1@2x.png"
                />
              </div>
              <div className="Mhome-text-wrapper-38">Spicy Noodles</div>
              <div className="Mhome-text-wrapper-39">Order</div>
              <div className="Mhome-text-wrapper-40">90</div>
              <div className="Mhome-ellipse-3" />
            </div>
          </div>
          <div className="Mhome-group-20">
            <div className="Mhome-group-19">
              <div className="Mhome-overlap-group-5">
                <div className="Mhome-ellipse-4" />
                <img
                  className="Mhome-unsplash-ejrmcxlw"
                  alt="Unsplash"
                  src="https://generation-sessions.s3.amazonaws.com/c490c58444dcc9b15015f5816f0c5839/img/unsplash-e94j3rmcxlw@2x.png"
                />
              </div>
              <div className="Mhome-text-wrapper-38">Spicy Fried Rice</div>
              <div className="Mhome-text-wrapper-39">Order</div>
              <div className="Mhome-text-wrapper-40">90</div>
              <div className="Mhome-ellipse-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mobile