import React from 'react';
import Cars from "../../models/cars";
import CarBlock from "../CarBlock/CarBlock";

interface SliderItemsProps {
  items: Cars[]
}

const SliderItems: React.FC<SliderItemsProps> = ({ items }) => {
  return (
    <>
      {items.map(car => (
        <div key={car.id}>
          <CarBlock car={car} />
        </div>
      ))}
    </>
  );
};

export default SliderItems;
