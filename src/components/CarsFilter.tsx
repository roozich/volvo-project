import React from 'react';
import { SelectInput } from 'vcc-ui';
import Cars from '../models/cars';

interface CarsFilterProps {
  cars: Cars[];
  value: string;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CarsFilter: React.FC<CarsFilterProps> = ({ cars, value, onFilterChange }) => {
  
  const bodyTypeUniqueList = Array.from(new Set(cars.map(car => car.bodyType)));

  const filterOptions = bodyTypeUniqueList.map((bodyType, index) => (
    <option key={index} value={bodyType}>
      {bodyType.charAt(0).toUpperCase() + bodyType.slice(1)}
    </option>
  ));

  return (
    <SelectInput name="bodyType" label="Body type" value={value} onChange={onFilterChange}>
      <option key="all" value="all">All</option>
      {filterOptions}
    </SelectInput>
  );
};

export default CarsFilter;
