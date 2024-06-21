import { useState, useEffect } from "react";
import "./Filters.css";

const venuesList = [
  "Larimer Lounge",
  "Nocturne",
  "Ogden Theater",
  "Your Mom's House",
  "Roxy Theater",
];

const VenueFilter = () => {
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".venue-filter") === null) {
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

  const handleVenueChange = (event) => {
    const value = event.target.value;
    setSelectedVenues((prevSelectedVenues) =>
      prevSelectedVenues.includes(value)
        ? prevSelectedVenues.filter((venue) => venue !== value)
        : [...prevSelectedVenues, value]
    );
  };

  return (
    <div className="venue-filter">
      <button className="filter-button" onClick={toggleDropdown}>
        Venue <span className="caret">&#9660;</span>
      </button>

      {dropdownVisible && (
        <div className="dropdown-content">
          {venuesList.map((venue) => (
            <div key={venue}>
              <label>
                <input
                  type="checkbox"
                  value={venue}
                  checked={selectedVenues.includes(venue)}
                  onChange={handleVenueChange}
                />
                {venue}
              </label>
            </div>
          ))}

          <button className="apply-button">Apply</button>
        </div>
      )}
    </div>
  );
};

export default VenueFilter;
