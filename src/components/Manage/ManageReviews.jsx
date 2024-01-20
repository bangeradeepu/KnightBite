import React, { useState } from "react";
import "./ManageReviews.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronDown,
  faCalendar,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
const ManageReviews = () => {
  const CustomerReview = [
    {
      id: 1,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "5",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "11-12-2023",
    },
    {
      id: 2,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "11-12-2023",
    },
    {
      id: 3,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "26-12-2023",
    },
    {
      id: 4,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "13-12-2023",
    },
    {
      id: 5,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "20-12-2023",
    },
    {
      id: 6,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "18-12-2023",
    },
    {
      id: 7,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "09-12-2023",
    },
    {
      id: 8,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "10-12-2023",
    },
    {
      id: 9,
      name: "Gagan",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "5",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "05-12-2023",
    },
    {
      id: 10,
      name: "Sabil",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "11-12-2023",
    },
    {
      id: 11,
      name: "Melroy",
      orderId: "154284",
      orderBrand: "Knight Bite",
      orderLocation: "Hampankatta",
      foodRating: "4",
      deliveryRating: "2",
      orderReview: "Chicken Biryani was good",
      reviewDate: "11-12-2023",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const sortedCustomerReview = [...CustomerReview].sort((a, b) => {
    const dateA = new Date(a.reviewDate);
    const dateB = new Date(b.reviewDate);
    return dateB - dateA; // Sort in descending order
  });

  // Update your filteredReviews array to include both date range and star rating filters
  const [selectedStar, setSelectedStar] = useState("");
  // Handle star rating change
  const handleStarChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStar(selectedValue);
  };
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  // Filter reviews based on selected star rating
  const handleStartDateChange = (event) => {
    setSelectedStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setSelectedEndDate(event.target.value);
  };
//   Clear calender logic
  const clearDateFields = () => {
    setSelectedStartDate("");
    setSelectedEndDate("");
  };
  const handleClear = () => {
    clearDateFields();
    handleClose();
  };
  const filterReviews = () => {
    return sortedCustomerReview.filter((review) => {
      // Date range filter
      const isDateInRange = () => {
        if (!selectedStartDate || !selectedEndDate) {
          return true; // No date range selected, include all dates
        }

        const reviewDate = new Date(
          review.reviewDate.split("-").reverse().join("-")
        );
        const startDate = new Date(selectedStartDate);
        const endDate = new Date(selectedEndDate);

        return reviewDate >= startDate && reviewDate <= endDate;
      };

      // Star rating filter
      const isStarRatingMatch =
        selectedStar === "" || review.foodRating === selectedStar;

      return isDateInRange() && isStarRatingMatch;
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredAndPaginatedReviews = filterReviews().slice(
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
    if (startPage + 5 <= Math.ceil(filterReviews().length / itemsPerPage)) {
      setStartPage(startPage + 5);
      setCurrentPage(startPage + 1);
    }
  };


//   Display date logic
  const uniqueDatesOnPage = [
    ...new Set(
      filteredAndPaginatedReviews
        .filter((review) => {
          // Date range filter for unique dates
          const isDateInRange = () => {
            if (!selectedStartDate || !selectedEndDate) {
              return true; // No date range selected, include all dates
            }

            const reviewDate = new Date(
              review.reviewDate.split("-").reverse().join("-")
            );
            const startDate = new Date(selectedStartDate);
            const endDate = new Date(selectedEndDate);

            return reviewDate >= startDate && reviewDate <= endDate;
          };

          // Star rating filter
          const isStarRatingMatch =
            selectedStar === "" || review.foodRating === selectedStar;

          return isDateInRange() && isStarRatingMatch;
        })
        .map((review) => review.reviewDate)
    ),
  ].sort((a, b) => {
    const dateA = a.split("-").reverse().join("-");
    const dateB = b.split("-").reverse().join("-");
    return new Date(dateB) - new Date(dateA);
  });

  // Calculate the number of pages based on the filtered data length
  const totalPages = Math.ceil(filterReviews().length / itemsPerPage);

  //   Open custom modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ManageReviews">
      <div className="MR-desktop r-f-12">
        <div className="MR-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Reviews</div>
            </div>
            <div className="d-flex g-20 align-item-center">
              <div className="MR-upper-buttons d-flex align-item-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="r-f-10 txt-dark-grey"
                />
                <select
                  name=""
                  id=""
                  className="r-f-12 MR-dd-control c-pointer"
                  onChange={handleStarChange} // Add onChange handler
                  value={selectedStar} // Controlled component: set the value
                >
                  <option value="">All Stars</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Stars</option>
                </select>
              </div>
              <div
                className="MR-upper-buttons d-flex align-item-center g-10 c-pointer"
                onClick={handleClickOpen}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="r-f-10 txt-dark-grey"
                />
                <div className="r-f-10 f-w-600">Custom</div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="r-f-10 txt-dark-grey"
                />
              </div>
              <div className="MR-export-button r-f-10 c-pointer">Export</div>
            </div>
          </div>
          <div className="MR-layer-inside">
            {filteredAndPaginatedReviews.length === 0 && (
              <div className="d-flex justify-content-center mt-5 r-f-18 txt-ddark-grey">
                No data found!
              </div>
            )}
            {uniqueDatesOnPage.map((date) => (
              <div key={date} className="mb-4">
                <div className="r-f-12 f-w-500 mb-1">{date}</div>
                <div className="d-flex g-30" style={{ flexWrap: "wrap" }}>
                  {filteredAndPaginatedReviews
                    .filter((review) => review.reviewDate === date)
                    .map((review) => (
                      <div
                        key={review.id}
                        className="MR-review-card d-flex space-between"
                      >
                        <div style={{ width: "9vw" }}>
                          <div className="r-f-12">{review.name}</div>
                          <div className="d-flex space-between g-20 r-f-8 mt-1">
                            <div className="txt-grey">{review.orderId}</div>
                            <div>{review.orderBrand}</div>
                          </div>
                          <div className="mt-1 r-f-10">
                            {review.orderLocation}
                          </div>
                          <div className="r-f-14 mt-1 d-flex g-10">
                            {/* Render food rating stars */}
                            <div>
                              {Array.from({ length: 5 }, (_, index) => (
                                <Icon
                                  key={index}
                                  icon={
                                    index < review.foodRating
                                      ? "material-symbols:star"
                                      : "material-symbols:star-outline"
                                  }
                                  color="#ffce31"
                                />
                              ))}
                            </div>

                            <Icon icon="mdi:burger" className="txt-dark-grey" />
                          </div>
                          <div className="r-f-14 d-flex g-10">
                            {/* Render delivery rating stars */}
                            <div>
                              {Array.from({ length: 5 }, (_, index) => (
                                <Icon
                                  key={index}
                                  icon={
                                    index < review.deliveryRating
                                      ? "material-symbols:star"
                                      : "material-symbols:star-outline"
                                  }
                                  color="#ffce31"
                                />
                              ))}
                            </div>
                            <Icon
                              icon="solar:scooter-bold"
                              className="txt-dark-grey"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="MR-review-card-right">
                            {review.orderReview}
                          </div>
                          <div className="d-flex flex-end">
                            <div className="c-pointer">
                              View Items{" "}
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className="r-f-10 txt-dark-grey"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-item-center flex-end mt-1">
            <div className="d-flex g-30 align-item-center">
              <div onClick={goBackward}>
                <FontAwesomeIcon icon={faAngleLeft} className="c-pointer" />
              </div>
              {Array(Math.min(5, totalPages))
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Custom</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="d-flex space-between">
            <div>
              <div className="r-f-8 txt-grey">Select Start date</div>
              <TextField
                autoFocus
                margin="dense"
                id="startDate"
                label=""
                type="date"
                fullWidth
                variant="standard"
                onChange={handleStartDateChange}
                value={selectedStartDate}
              />
            </div>
            <div>
              <div className="r-f-8 txt-grey">Select End date</div>
              <TextField
                autoFocus
                margin="dense"
                id="endDate"
                label=""
                type="date"
                fullWidth
                variant="standard"
                onChange={handleEndDateChange}
                value={selectedEndDate}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear} color="primary">
            Clear
          </Button>
          <Button onClick={handleClose} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div className="MR-mobile r-f-12">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Reviwes</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
          <div className="d-flex align-item-center space-evenly">
              <div className="MR-upper-buttons d-flex align-item-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="r-f-10 txt-dark-grey"
                />
                <select
                  name=""
                  id=""
                  className="r-f-12 MR-dd-control c-pointer"
                  onChange={handleStarChange} // Add onChange handler
                  value={selectedStar} // Controlled component: set the value
                >
                  <option value="">All Stars</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Stars</option>
                </select>
              </div>
              <div
                className="MR-upper-buttons d-flex align-item-center g-10 c-pointer"
                onClick={handleClickOpen}
                style={{padding:'1.7vw 2vw'}}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="r-f-10 txt-dark-grey"
                />
                <div className="r-f-10 f-w-600">Custom</div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="r-f-10 txt-dark-grey"
                />
              </div>
              <div className="MR-export-button r-f-10 c-pointer">Export</div>
            </div>
            <div className="mt-2">
            {uniqueDatesOnPage.map((date) => (
              <div key={date}>
                <div className="mt-2">{date}</div>
                {filteredAndPaginatedReviews
                    .filter((review) => review.reviewDate === date)
                    .map((review) => (
              <div  key={review.id} className="MR-phone-card mt-2">
                  <div className="d-flex space-between mb-1">
                    <div>
                      <div>{review.name}</div>
                      <div className="r-f-10">{review.orderLocation}</div>
                      <div className="d-flex g-10">
                        <div className="txt-grey r-f-10">{review.orderId}</div>
                        <div className="r-f-10"> {review.orderBrand}</div>
                      </div>
                    </div>
                    <div>
                    <div className="r-f-14 d-flex g-10">
                            {/* Render food rating stars */}
                            <div>
                              {Array.from({ length: 5 }, (_, index) => (
                                <Icon
                                  key={index}
                                  icon={
                                    index < review.foodRating
                                      ? "material-symbols:star"
                                      : "material-symbols:star-outline"
                                  }
                                  color="#ffce31"
                                />
                              ))}
                            </div>

                            <Icon icon="mdi:burger" className="txt-dark-grey" />
                          </div>
                          <div className="r-f-14 d-flex g-10">
                            {/* Render delivery rating stars */}
                            <div>
                              {Array.from({ length: 5 }, (_, index) => (
                                <Icon
                                  key={index}
                                  icon={
                                    index < review.deliveryRating
                                      ? "material-symbols:star"
                                      : "material-symbols:star-outline"
                                  }
                                  color="#ffce31"
                                />
                              ))}
                            </div>
                            <Icon
                              icon="solar:scooter-bold"
                              className="txt-dark-grey"
                            />
                          </div>
                    </div>
                  </div>
                  <div className="MR-phone-card-review r-f-10 ">
                  {review.orderReview}
                  </div>
                  <div className="d-flex flex-end mt-1 r-f-10 align-item-center">
                    View Items &nbsp;
                    <FontAwesomeIcon
                                icon={faChevronDown}
                                className="r-f-10 txt-dark-grey"
                              />
                  </div>
              </div>
                    ))}
              </div>
              
            ))}
            </div>
            <div className="d-flex align-item-center space-evenly mt-2">
            <div className="d-flex g-30 align-item-center">
              <div onClick={goBackward}>
                <FontAwesomeIcon icon={faAngleLeft} className="c-pointer" />
              </div>
              {Array(Math.min(5, totalPages))
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

export default ManageReviews;
