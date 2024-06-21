import DistanceFilter from "./DistanceFilter";
import VenueFilter from "./VenueFilter";
import DateRangeFilter from "./DateRangeFilter";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <DistanceFilter />
      <VenueFilter />
      <DateRangeFilter />
    </div>
  );
};

export default Filters;
