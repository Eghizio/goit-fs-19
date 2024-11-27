import { useDispatch, useSelector } from "react-redux";
import { FilterButton } from "./FilterButton";
import { getFilterStatus } from "../redux/filter/selectors";
import { setStatusFilter } from "../redux/filter/actions";
import { STATUS_FILTERS } from "../constants/filter";

export const StatusFilter = () => {
  const filter = useSelector(getFilterStatus);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <FilterButton
        selected={filter === STATUS_FILTERS.ALL}
        onClick={() => handleFilterChange(STATUS_FILTERS.ALL)}
      >
        All
      </FilterButton>

      <FilterButton
        selected={filter === STATUS_FILTERS.ACTIVE}
        onClick={() => handleFilterChange(STATUS_FILTERS.ACTIVE)}
      >
        Active
      </FilterButton>

      <FilterButton
        selected={filter === STATUS_FILTERS.COMPLETED}
        onClick={() => handleFilterChange(STATUS_FILTERS.COMPLETED)}
      >
        Completed
      </FilterButton>
    </div>
  );
};
