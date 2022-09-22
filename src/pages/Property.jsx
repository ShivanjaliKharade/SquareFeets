import "./Property.css";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, List } from "reactstrap";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const prop = [
  {
    propertyName: "Home Build",
    details: "Building",
    price: 26000,
    constructionStatus: "Completed",
    reraReg: "hom4481",
    area: "10000sqft",
    rooms: "35",
    address: {
      addressId: 3,
    },
    user: {
      id: 2,
    },
    propertyType: {
      propertyTypeId: 3,
    },
  },
];

const Property = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Nav />
      <div className="propertyContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>

            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="propertyWrapper">
          <button className="bookNow">New Launch</button>
          <h1 className="propertyTitle text-center">Lodha Residential</h1>
          <div className="propertyAddress ">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Thane, Mumbai</span>
          </div>
          <span className="propertyDistance">
            Excellent location – 500m from station
          </span>
          <span className="propertyPriceHighlight">Excellent Aminities</span>
          <br></br>
          <img
            className="propimg"
            alt="Sample"
            src="https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg"
          />

          <div className="propertyDetails">
            <div className="propertyDetailsTexts">
              <h1 className="propertyTitle">Stay in the heart of City</h1>
              <Badge color="success">Verified</Badge>{" "}
              <Badge color="primary"> RERA No.</Badge> <hr />
              <h1>Overview</h1>
              <p className="propertyDesc">
                <List>
                  <li>Type : Residential</li>
                  <li>Project Status : Pre-Launch</li>
                  <li>Apartment area : 500 sqft</li>
                  <li>Price : Rs. 1000 /sqft</li>
                  <li>BHK : 2BHK, 3BHK</li>
                  <li>Rooms : 50</li>
                  <li>Other : Aminities (Parking, Swimming Pool)</li>
                </List>
              </p>
              <hr />
              <h1>Property Description</h1>
              <p className="propertyDesc">
                Spread across ~4 acres, the development is planned around lush
                green old trees and ~60% open spaces. With assortment of
                world-class amenities and well-designed 1 and 2 BHK apartments
                offering breath-taking views, Crown Kolshet gives you the
                opportunity to upgrade to a superior lifestyle Offer: Super-low
                6.99% fixed rate till 2024 Pay just 25% this year
              </p>
            </div>
            <div className="propertyDetailsPrice">
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <h2>Contact Us</h2>
              <hr />
              <span>
                <b>Call Us : 022-554126</b>
              </span>
              <h1>
                <b>Email : Lodha@gmail.com</b>
              </h1>
              <button>Book your Dream !</button>
            </div>
          </div>
          <hr />
          <h1>Gallary</h1>
          <div className="propertyImages">
            {photos.map((photo, i) => (
              <div className="propertyImgWrapper my-1" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="propertyImg"
                />
              </div>
            ))}
          </div>
          <hr />
          <h4>Website for more details : </h4>
        </div>
      </div>
    </div>
  );
};

export default Property;
