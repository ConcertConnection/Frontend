import { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "./Filters.css";

const DateRangeFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".date-range-filter") === null) {
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
    <div className="date-range-filter">
      <button className="filter-button" onClick={toggleDropdown}>
        Date Range <span className="caret">&#9660;</span>
      </button>

      {dropdownVisible && (
        <div className="dropdown-content">
          <div className="date-picker-container">
            <div className="date-picker">
              <label>Start Date</label>
              {/* <ReactDatePicker
                sele
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select start date"
              /> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="date-picker">
              <label>End Date</label>
              {/* <ReactDatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select end date"
              /> */}
            </div>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeFilter;
