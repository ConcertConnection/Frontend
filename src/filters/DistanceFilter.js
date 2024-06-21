import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./Filters.css";

const DistanceFilter = () => {
  const [distance, setDistance] = useState(3);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".distance-filter") === null) {
      setDropdownVisible(false);
    }
  };

  // Attach event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="distance-filter">
      <button className="filter-button" onClick={toggleDropdown}>
        Distance <span className="caret">&#9660;</span>
      </button>

      {dropdownVisible && (
        <div className="dropdown-content">
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={0}
            max={10}
            value={distance}
            onChange={(value) => setDistance(value)}
          />

          <div className="slider-values">
            <span>0mi</span>
            <span>10mi</span>
          </div>
          <p>Under {distance} miles</p>
          <button className="apply-button">Apply</button>
        </div>
      )}
    </div>
  );
};

export default DistanceFilter;
