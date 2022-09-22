import "./List.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../components/SearchItem";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "../components/Nav";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Nav />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search Filter</h1>
            <hr />
            <div className="lsOptionItem">
              <span className="lsItem"> Enter Location : </span>
              <input type="text" />
            </div>

            <div className="lsOptionItem">
              <Dropdown>
                <span className="lsItem">Property Type : </span>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Select Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Residential</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Residential-Building
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Residential-Villa
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Residential-Bunglow
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Commercial</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="lsOptionItem">
              <span className="lsItem"> Property name </span>
              <input type="text" />
            </div>

            <div className="lsOptionItem">
              <span className="lsItem"> Builder name </span>
              <input type="text" />
            </div>

            <div className="lsOptionItem">
              <Dropdown>
                <span className="lsItem">Construction Status : </span>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Select Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1"></Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Pre-Launch</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Yet to be Commence
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">On-Going</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="lsItem">
              <hr />
              <label>Other Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Price :</span>
                  <input type="text" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Type : 1BHK,2BHK,3BHK</span>
                  <input type="text" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"> No. of Floors</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"> RERA Number</span>
                  <input type="text" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Area (per sqft)</span>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="searchButton">
              <button variant="outline-danger">Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
