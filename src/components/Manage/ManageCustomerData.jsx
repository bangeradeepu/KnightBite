import React, { useState } from "react";
import "./ManageCustomerData.css";
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faMagnifyingGlass,
  faPlus,
  faGripLines,
  faXmark,
  faAngleLeft,
  faAngleRight,
  faCircleCheck,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
const ManageCustomerData = () => {
  const CustomerData = [
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gautham",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 1,
      name: "Sabil",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "Nill",
      latestOrderPlacedTime: "Nill",
      noOfOrders: "0",
    },
    {
      id: 2,
      name: "Gagan",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
    {
      id: 3,
      name: "Melroy",
      phoneNumber: "8452456985",
      signupDate: "22-10-2023",
      signupTime: "6:30AM",
      latestOrderPlacedDate: "22-10-2023",
      latestOrderPlacedTime: "4:00AM",
      noOfOrders: "5",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

  // Function to filter the data based on the search query
  const filteredCustomerData = CustomerData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phoneNumber.includes(searchQuery) // Include phone number in search
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const CurrentCustomerPage = filteredCustomerData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goBackward = () => {
    if (startPage > 1) {
      setStartPage(startPage - 5);
      setCurrentPage(startPage - 5);
    }
  };

  const goForward = () => {
    if (
      startPage + 5 <=
      Math.ceil(filteredCustomerData.length / itemsPerPage)
    ) {
      setStartPage(startPage + 5);
      setCurrentPage(startPage + 1);
    }
  };

  // Open Order history modal
  const [orderHistory, setOrderHistory] = useState(false);
  const [orderHistoryData, setOrderHistoryData] = useState(null);

  const openOrderHistory = (data) => {
    setOrderHistoryData(data);
    setOrderHistory(true);
  };

  const closeOrderHistory = () => {
    setOrderHistory(false);
  };

  const [isCCVisible, setIsCCVisible] = useState(false);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);
  const toggleCC = () => {
    setIsCCVisible(!isCCVisible);
  };
  const toggleLoadMore = () => {
    setIsLoadMoreClicked(!isLoadMoreClicked);
  };

    const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className="ManageCustomerData">
      <div className="MCD-desktop r-f-12">
        <div className="MCD-layer">
          <div className="d-flex">
            <div className="r-f-18 f-w-600">Customer Data</div>
          </div>
          <div className="d-flex space-between mt-1 align-item-center">
            <div className="r-f-14 f-w-400">Total Customer: 1500</div>
            <div className="d-flex g-10 MCD-search-outer-layer align-item-center">
              <div className="MCD-search-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="txt-grey"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="MCD-search-filed"
                placeholder="Search Outlet/Brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="MCD-export-btn-large c-pointer">Export</div>
          </div>
          <div className="MCD-layer-inside mt-1">
            <table class="MCD-borderless-table-m">
              <tr className="f-w-700">
                <td>Name</td>
                <td>Phone Number</td>
                <td>Sign up Date</td>
                <td>Latest order place on</td>
                <td>No. of orders</td>
                <td></td>
              </tr>
              {CurrentCustomerPage.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    style={{ padding: "10vw" }}
                    className="r-f-18 txt-grey"
                  >
                    Customer not found!
                  </td>
                </tr>
              ) : (
                CurrentCustomerPage.map((Customers, index) => (
                  <tr key={index}>
                    <td>{Customers.name}</td>
                    <td>{Customers.phoneNumber}</td>
                    <td>
                      {Customers.signupDate}, {Customers.signupTime}
                    </td>
                    <td>
                      {Customers.latestOrderPlacedDate ===
                      Customers.latestOrderPlacedTime
                        ? "Nill"
                        : `${Customers.latestOrderPlacedDate}, ${Customers.latestOrderPlacedTime}`}
                    </td>
                    <td>{Customers.noOfOrders}</td>
                    <td>
                      {Customers.noOfOrders > 1 ? (
                        <div
                          className="c-pointer MCD-order-history-btn"
                          onClick={() => openOrderHistory(Customers)}
                        >
                          Order History
                        </div>
                      ) : (
                        <div className="MCD-order-history-btn-inactive">
                          Order History
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </table>
          </div>
          <div className="d-flex align-item-center flex-end mt-1">
            <div className="d-flex g-30 align-item-center">
              <div onClick={goBackward}>
                <FontAwesomeIcon icon={faAngleLeft} className="c-pointer" />
              </div>
              {Array(Math.min(5, Math.ceil(CustomerData.length / itemsPerPage)))
                .fill()
                .map((_, i) => (
                  <div key={i} className="c-pointer">
                    <div
                      style={{ padding: "0.1vw 0.6vw" }}
                      className={
                        startPage + i === currentPage
                          ? "txt-purple f-w-700"
                          : ""
                      }
                      onClick={() => paginate(startPage + i)}
                    >
                      {startPage + i}
                    </div>
                  </div>
                ))}
              <div onClick={goForward}>
                <FontAwesomeIcon icon={faAngleRight} className="c-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {orderHistory && (
        <div className="main-modal main-modal-open r-f-12 MCDoH">
          <div className="main-modal-content">
            <div className="d-flex space-between">
              <div></div>
              <div className="r-f-14 align-text-center">
                <div className="r-f-14">Order History</div>
                <div className="f-w-600 r-f-18">
                  {orderHistoryData.name}&nbsp;{orderHistoryData.phoneNumber}
                </div>
                <div className="f-w-400 r-f-18">
                  Total orders : {orderHistoryData.noOfOrders}
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="r-f-20 c-pointer"
                  onClick={closeOrderHistory}
                />
              </div>
            </div>
            
            <div className="main-modal-content-inside">
            <div className="d-flex flex-end">
              <div>
              <div className="txt-grey r-f-8">Date Filter</div>
              <div className="MCD-date-filter">
                <input type="date" name="" id="" className="MCD-data-filter-field" />
                </div>
              </div>
                
                
              </div>
              <div className="MCD-OH-main-box">
                <div className="r-f-18 f-w-600">Mangaluru</div>
                <div className="r-f-16">Total Order: 10</div>
                <div className="d-flex space-evenly">
                  <div
                    className={`MCD-OH-sub-main-box mt-2 ${
                      isLoadMoreClicked ? "expanded" : ""
                    }`}
                  >
                    <div className="MCD-comp-config mt-2">
                      <div
                        className={`MCD-comp-config-header ${
                          isCCVisible ? "MCD-grey" : ""
                        }`}
                      >
                        <div className="d-flex space-between align-item-center">
                          <table class="MCD-borderless-table">
                            <tr className="f-w-600">
                              <td>Date</td>
                              <td>Order ID</td>
                              <td>Items</td>
                              <td>Platform</td>
                            </tr>
                            <tr>
                              <td>3/11/2023, 8:0PM</td>
                              <td>00654</td>
                              <td>
                                <div>1 X Knight chicken Burger</div>
                                <div>1 X Knight chicken Burger</div>
                              </td>
                              <td>Web App</td>
                            </tr>
                          </table>
                          <div
                            onClick={toggleCC}
                            className="MCD-hover-change c-pointer"
                          >
                            {isCCVisible ? (
                              <div className="d-flex g-10 align-item-center">
                                <div>More Details</div>
                                <div>
                                  <FontAwesomeIcon icon={faChevronUp} />
                                </div>
                              </div>
                            ) : (
                              <div className="d-flex g-10">
                                <div>More Details</div>
                                <div>
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {isCCVisible && (
                        <div className="MCD-comp-config-content">
                          <table class="MCD-borderless-table">
                            <tr className="f-w-600">
                              <td>Delivery Personnel&nbsp;</td>
                              <td>Amount&nbsp;&nbsp;&nbsp;</td>
                              <td>Payment Mode</td>
                              <td>Address</td>
                            </tr>
                            <tr>
                              <td>Raghu</td>
                              <td className="align-item-center d-flex"><div>300</div>&nbsp;<div className="r-f-8 txt-dark-grey"><Icon icon="ph:info" /></div></td>
                              <td>Online</td>
                              <td>Sea Fort Lodge, Bunder</td>
                            </tr>
                          </table>
                        </div>
                      )}
                    </div>
                    <div
                      className="r-f-12 mt-2 f-w-600 c-pointer MCD-hover-change"
                      onClick={toggleLoadMore}
                    >
                      {isLoadMoreClicked ? "Load Less..." : "Load More..."}
                    </div>
                    {isLoadMoreClicked && (
                      <div className="MCD-comp-config mt-2">
                        <div
                          className={`MCD-comp-config-header ${
                            isCCVisible ? "MCD-grey" : ""
                          }`}
                        >
                          <div className="d-flex space-between align-item-center">
                            <table class="MCD-borderless-table">
                              <tr className="f-w-600">
                                <td>Date</td>
                                <td>Order ID</td>
                                <td>Items</td>
                                <td>Platform</td>
                              </tr>
                              <tr>
                                <td>3/11/2023, 8:0PM</td>
                                <td>00654</td>
                                <td>
                                  <div>1 X Knight chicken Burger</div>
                                  <div>1 X Knight chicken Burger</div>
                                </td>
                                <td>Web App</td>
                              </tr>
                            </table>
                            <div
                              onClick={toggleCC}
                              className="MCD-hover-change c-pointer"
                            >
                              {isCCVisible ? (
                                <div className="d-flex g-10 align-item-center">
                                  <div>More Details</div>
                                  <div>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                  </div>
                                </div>
                              ) : (
                                <div className="d-flex g-10">
                                  <div>More Details</div>
                                  <div>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {isCCVisible && (
                          <div className="MCD-comp-config-content">
                            <table class="MCD-borderless-table">
                              <tr className="f-w-600">
                                <td>Delivery Personnel&nbsp;</td>
                                <td>Amount&nbsp;&nbsp;&nbsp;</td>
                                <td>Payment Mode</td>
                                <td>Address</td>
                              </tr>
                              <tr>
                                <td>Raghu</td>
                                <td className="align-item-center d-flex"><div>300</div>&nbsp;<div className="r-f-8 txt-dark-grey"><Icon icon="ph:info" /></div></td>
                                <td>Online</td>
                                <td>Sea Fort Lodge, Bunder</td>
                              </tr>
                            </table>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="MCD-OH-main-box">
                <div className="r-f-18 f-w-600">Mangaluru</div>
                <div className="r-f-16">Total Order: 10</div>
                <div className="d-flex space-evenly">
                  <div
                    className={`MCD-OH-sub-main-box mt-2 ${
                      isLoadMoreClicked ? "expanded" : ""
                    }`}
                  >
                    <div className="MCD-comp-config mt-2">
                      <div
                        className={`MCD-comp-config-header ${
                          isCCVisible ? "MCD-grey" : ""
                        }`}
                      >
                        <div className="d-flex space-between align-item-center">
                          <table class="MCD-borderless-table">
                            <tr className="f-w-600">
                              <td>Date</td>
                              <td>Order ID</td>
                              <td>Items</td>
                              <td>Platform</td>
                            </tr>
                            <tr>
                              <td>3/11/2023, 8:0PM</td>
                              <td>00654</td>
                              <td>
                                <div>1 X Knight chicken Burger</div>
                                <div>1 X Knight chicken Burger</div>
                              </td>
                              <td>Web App</td>
                            </tr>
                          </table>
                          <div
                            onClick={toggleCC}
                            className="MCD-hover-change c-pointer"
                          >
                            {isCCVisible ? (
                              <div className="d-flex g-10 align-item-center">
                                <div>More Details</div>
                                <div>
                                  <FontAwesomeIcon icon={faChevronUp} />
                                </div>
                              </div>
                            ) : (
                              <div className="d-flex g-10">
                                <div>More Details</div>
                                <div>
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {isCCVisible && (
                        <div className="MCD-comp-config-content">
                          <table class="MCD-borderless-table">
                            <tr className="f-w-600">
                              <td>Delivery Personnel&nbsp;</td>
                              <td>Amount&nbsp;&nbsp;&nbsp;</td>
                              <td>Payment Mode</td>
                              <td>Address</td>
                            </tr>
                            <tr>
                              <td>Raghu</td>
                              <td className="align-item-center d-flex"><div>300</div>&nbsp;<div className="r-f-8 txt-dark-grey"><Icon icon="ph:info" /></div></td>
                              <td>Online</td>
                              <td>Sea Fort Lodge, Bunder</td>
                            </tr>
                          </table>
                        </div>
                      )}
                    </div>
                    <div
                      className="r-f-12 mt-2 f-w-600 c-pointer MCD-hover-change"
                      onClick={toggleLoadMore}
                    >
                      {isLoadMoreClicked ? "Load Less..." : "Load More..."}
                    </div>
                    {isLoadMoreClicked && (
                      <div className="MCD-comp-config mt-2">
                        <div
                          className={`MCD-comp-config-header ${
                            isCCVisible ? "MCD-grey" : ""
                          }`}
                        >
                          <div className="d-flex space-between align-item-center">
                            <table class="MCD-borderless-table">
                              <tr className="f-w-600">
                                <td>Date</td>
                                <td>Order ID</td>
                                <td>Items</td>
                                <td>Platform</td>
                              </tr>
                              <tr>
                                <td>3/11/2023, 8:0PM</td>
                                <td>00654</td>
                                <td>
                                  <div>1 X Knight chicken Burger</div>
                                  <div>1 X Knight chicken Burger</div>
                                </td>
                                <td>Web App</td>
                              </tr>
                            </table>
                            <div
                              onClick={toggleCC}
                              className="MCD-hover-change c-pointer"
                            >
                              {isCCVisible ? (
                                <div className="d-flex g-10 align-item-center">
                                  <div>More Details</div>
                                  <div>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                  </div>
                                </div>
                              ) : (
                                <div className="d-flex g-10">
                                  <div>More Details</div>
                                  <div>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {isCCVisible && (
                          <div className="MCD-comp-config-content">
                            <table class="MCD-borderless-table">
                              <tr className="f-w-600">
                                <td>Delivery Personnel&nbsp;</td>
                                <td>Amount&nbsp;&nbsp;&nbsp;</td>
                                <td>Payment Mode</td>
                                <td>Address</td>
                              </tr>
                              <tr>
                                <td>Raghu</td>
                                <td className="align-item-center d-flex"><div>300</div>&nbsp;<div className="r-f-8 txt-dark-grey"><Icon icon="ph:info" /></div></td>
                                <td>Online</td>
                                <td>Sea Fort Lodge, Bunder</td>
                              </tr>
                            </table>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-mdaol-content-inside-p mCdoHp">
            <div className="d-flex flex-end">
              <div>
              <div className="txt-grey r-f-8">Date Filter</div>
              <div className="MCD-date-filter">
                <input type="date" name="" id="" className="MCD-data-filter-field" />
                </div>
              </div>
                
                
              </div>
              <div className="mt-3 MCD-order-info-modal-content-box">
                <div>
                  <div className="r-f-14 f-w-600">Mangalore</div>
                  <div className="r-f-10">Total Order: 10</div>
                  <div
                    className={`MCD-order-outer-layer-p mt-2 ${
                      isLoadMoreClicked ? "expanded" : ""
                    }`}
                  >
                    <div className="MCD-order-info-border-p mt-1">
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Date</div>
                          <div className="r-f-10">3/11/2023, 8:0PM</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Order ID</div>
                          <div className="r-f-10">00654</div>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Items</div>
                          <div className="r-f-10">
                            <div>
                              <div className="d-flex space-between align-item-center">
                                <div>
                                  <div>1 X Knight chicken Burger</div>
                                  <div>1 X Knight chicken Burger</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Platform</div>
                          <div className="r-f-10">
                            <div className="d-flex space-between align-item-center">
                              <div>Web App</div>
                              {isCCVisible ? (
                                <div onClick={toggleCC} className="r-f-10">
                                  More Details{" "}
                                  <FontAwesomeIcon icon={faChevronUp} />
                                </div>
                              ) : (
                                <div onClick={toggleCC} className="r-f-10">
                                  More Details{" "}
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {isCCVisible && (
                        <div className="mt-2">
                          <div className="d-flex">
                            <div className="flex-1">
                              <div className="r-f-8">Delivery Personnel</div>
                              <div className="r-f-10">Raghu</div>
                            </div>
                            <div className="flex-1">
                              <div className="r-f-8">Amount</div>
                              <div className="r-f-10">100</div>
                            </div>
                          </div>
                          <div className="d-flex mt-2">
                            <div className="flex-1">
                              <div className="r-f-8">Payment Mode</div>
                              <div className="r-f-10">Online</div>
                            </div>
                            <div className="flex-1">
                              <div className="r-f-8">Address</div>
                              <div className="r-f-10">
                                Sea Fot Lodge, Bendur
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="r-f-10 f-w-600 mt-1"
                      onClick={toggleLoadMore}
                    >
                      {isLoadMoreClicked ? "Load Less..." : "Load More..."}
                    </div>
                    {isLoadMoreClicked && (
                      <div className="MCD-order-info-border-p mt-1">
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Date</div>
                            <div className="r-f-10">3/11/2023, 8:0PM</div>
                          </div>
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Order ID</div>
                            <div className="r-f-10">00654</div>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Items</div>
                            <div className="r-f-10">
                              <div>
                                <div className="d-flex space-between align-item-center">
                                  <div>
                                    <div>1 X Knight chicken Burger</div>
                                    <div>1 X Knight chicken Burger</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Platform</div>
                            <div className="r-f-10">
                              <div className="d-flex space-between align-item-center">
                                <div>Web App</div>
                                {isCCVisible ? (
                                  <div onClick={toggleCC} className="r-f-10">
                                    More Details{" "}
                                    <FontAwesomeIcon icon={faChevronUp} />
                                  </div>
                                ) : (
                                  <div onClick={toggleCC} className="r-f-10">
                                    More Details{" "}
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {isCCVisible && (
                          <div className="mt-2">
                            <div className="d-flex">
                              <div className="flex-1">
                                <div className="r-f-8">Delivery Personnel</div>
                                <div className="r-f-10">Raghu</div>
                              </div>
                              <div className="flex-1">
                                <div className="r-f-8">Amount</div>
                                <div className="r-f-10">100</div>
                              </div>
                            </div>
                            <div className="d-flex mt-2">
                              <div className="flex-1">
                                <div className="r-f-8">Payment Mode</div>
                                <div className="r-f-10">Online</div>
                              </div>
                              <div className="flex-1">
                                <div className="r-f-8">Address</div>
                                <div className="r-f-10">
                                  Sea Fot Lodge, Bendur
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3 MCD-order-info-modal-content-box">
                <div>
                  <div className="r-f-14 f-w-600">Mangalore</div>
                  <div className="r-f-10">Total Order: 10</div>
                  <div
                    className={`MCD-order-outer-layer-p mt-2 ${
                      isLoadMoreClicked ? "expanded" : ""
                    }`}
                  >
                    <div className="MCD-order-info-border-p mt-1">
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Date</div>
                          <div className="r-f-10">3/11/2023, 8:0PM</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Order ID</div>
                          <div className="r-f-10">00654</div>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Items</div>
                          <div className="r-f-10">
                            <div>
                              <div className="d-flex space-between align-item-center">
                                <div>
                                  <div>1 X Knight chicken Burger</div>
                                  <div>1 X Knight chicken Burger</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mt-2">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Platform</div>
                          <div className="r-f-10">
                            <div className="d-flex space-between align-item-center">
                              <div>Web App</div>
                              {isCCVisible ? (
                                <div onClick={toggleCC} className="r-f-10">
                                  More Details{" "}
                                  <FontAwesomeIcon icon={faChevronUp} />
                                </div>
                              ) : (
                                <div onClick={toggleCC} className="r-f-10">
                                  More Details{" "}
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {isCCVisible && (
                        <div className="mt-2">
                          <div className="d-flex">
                            <div className="flex-1">
                              <div className="r-f-8">Delivery Personnel</div>
                              <div className="r-f-10">Raghu</div>
                            </div>
                            <div className="flex-1">
                              <div className="r-f-8">Amount</div>
                              <div className="r-f-10">100</div>
                            </div>
                          </div>
                          <div className="d-flex mt-2">
                            <div className="flex-1">
                              <div className="r-f-8">Payment Mode</div>
                              <div className="r-f-10">Online</div>
                            </div>
                            <div className="flex-1">
                              <div className="r-f-8">Address</div>
                              <div className="r-f-10">
                                Sea Fot Lodge, Bendur
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="r-f-10 f-w-600 mt-1"
                      onClick={toggleLoadMore}
                    >
                      {isLoadMoreClicked ? "Load Less..." : "Load More..."}
                    </div>
                    {isLoadMoreClicked && (
                      <div className="MCD-order-info-border-p mt-1">
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Date</div>
                            <div className="r-f-10">3/11/2023, 8:0PM</div>
                          </div>
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Order ID</div>
                            <div className="r-f-10">00654</div>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Items</div>
                            <div className="r-f-10">
                              <div>
                                <div className="d-flex space-between align-item-center">
                                  <div>
                                    <div>1 X Knight chicken Burger</div>
                                    <div>1 X Knight chicken Burger</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="flex-1">
                            <div className="r-f-8 txt-grey">Platform</div>
                            <div className="r-f-10">
                              <div className="d-flex space-between align-item-center">
                                <div>Web App</div>
                                {isCCVisible ? (
                                  <div onClick={toggleCC} className="r-f-10">
                                    More Details{" "}
                                    <FontAwesomeIcon icon={faChevronUp} />
                                  </div>
                                ) : (
                                  <div onClick={toggleCC} className="r-f-10">
                                    More Details{" "}
                                    <FontAwesomeIcon icon={faChevronDown} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {isCCVisible && (
                          <div className="mt-2">
                            <div className="d-flex">
                              <div className="flex-1">
                                <div className="r-f-8">Delivery Personnel</div>
                                <div className="r-f-10">Raghu</div>
                              </div>
                              <div className="flex-1">
                                <div className="r-f-8">Amount</div>
                                <div className="r-f-10">100</div>
                              </div>
                            </div>
                            <div className="d-flex mt-2">
                              <div className="flex-1">
                                <div className="r-f-8">Payment Mode</div>
                                <div className="r-f-10">Online</div>
                              </div>
                              <div className="flex-1">
                                <div className="r-f-8">Address</div>
                                <div className="r-f-10">
                                  Sea Fot Lodge, Bendur
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="MCD-mobile r-f-12">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Customer Data</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div className="d-flex space-between align-item-center">
              <div>Total Customers: 1500</div>
              <div className="MCD-export-btn r-f-10">Export</div>
            </div>
            <div className="d-flex g-10 MCD-search-outer-layer align-item-center mt-2">
              <div className="MCD-search-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="txt-grey"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="MCD-search-filed"
                placeholder="Search Outlet/Brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {CurrentCustomerPage.length === 0 ? (
              <div className="d-flex space-evenly mt-10 mb-10">
                <div className="txt-grey">Customer Not Found!</div>
              </div>
            ) : (
              CurrentCustomerPage.map((Customers, index) => (
                <div className="mt-2 MCD-mobile-card" key={index}>
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="r-f-8 txt-grey">Name</div>
                      <div className="r-f-10">{Customers.name}</div>
                    </div>
                    <div className="flex-1">
                      <div className="r-f-8 txt-grey">Phone Number</div>
                      <div className="r-f-10">{Customers.phoneNumber}</div>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="flex-1">
                      <div className="r-f-8 txt-grey">Sign up Date</div>
                      <div className="r-f-10">
                        {" "}
                        {Customers.signupDate}, {Customers.signupTime}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="r-f-8 txt-grey">
                        Latest order place on
                      </div>
                      <div className="r-f-10">
                        {Customers.latestOrderPlacedDate ===
                        Customers.latestOrderPlacedTime
                          ? "Nill"
                          : `${Customers.latestOrderPlacedDate}, ${Customers.latestOrderPlacedTime}`}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="flex-1">
                      <div className="r-f-8 txt-grey">No. of orders</div>
                      <div className="r-f-10">{Customers.noOfOrders}</div>
                    </div>
                    <div className="flex-1">
                      {Customers.noOfOrders > 1 ? (
                        <button
                          className="c-pointer MCD-order-history-btn"
                          onClick={() => openOrderHistory(Customers)}
                        >
                          Order History
                        </button>
                      ) : (
                        <button className="MCD-order-history-btn-inactive">
                          Order History
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="d-flex space-evenly mt-4">
              <div className="d-flex g-30 align-item-center">
                <div onClick={goBackward}>
                  <FontAwesomeIcon icon={faAngleLeft} className="c-pointer" />
                </div>
                {Array(
                  Math.min(5, Math.ceil(CustomerData.length / itemsPerPage))
                )
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="c-pointer">
                      <div
                        style={{ padding: "0.1vw 0.6vw" }}
                        className={
                          startPage + i === currentPage
                            ? "txt-purple f-w-700"
                            : ""
                        }
                        onClick={() => paginate(startPage + i)}
                      >
                        {startPage + i}
                      </div>
                    </div>
                  ))}
                <div onClick={goForward}>
                  <FontAwesomeIcon icon={faAngleRight} className="c-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCustomerData;
