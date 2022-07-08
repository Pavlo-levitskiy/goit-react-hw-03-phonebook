import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={event => onFilterChange(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;