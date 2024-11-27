import { useDispatch } from "react-redux";
import { FilterButton } from "./FilterButton";
import { useFilterStatusSelector } from "../redux/selectors";
import { setStatusFilter } from "../redux/actions";
import { STATUS_FILTERS } from "../constants/filter";

export const StatusFilter = () => {
  const filter = useFilterStatusSelector();
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
