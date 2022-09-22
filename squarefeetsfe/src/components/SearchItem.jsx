import "./SearchItem.css";
import { Link } from "react-router-dom";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Lodha Properties</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">RERA Register</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          G + 20 Floors (2 & 3 BHK), Parking, Swimming Pool
        </span>
        <span className="siCancelOp">Schedule a visit </span>
        <span className="siCancelOpSubtitle">
          You can schedule a visit prior booking!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">1000/sqft</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/property/profile">
            <button className="siCheckButton">Property Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
