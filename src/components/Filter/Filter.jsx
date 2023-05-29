import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="query">Find contacts by name</Label>
      <Input type="text" name="query" placeholder="Search..." value={value} onChange={onChange} />
    </>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
