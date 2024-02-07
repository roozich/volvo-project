import React, { useState, useMemo } from "react";
import { Grid, Row, Col } from "vcc-ui";
import Slider from "./Slider/Slider";
import SliderItems from "./Slider/SliderItems";
import CarsFilter from "./CarsFilter";
import Cars from "../models/cars";

interface CarFilterSliderProps {
  cars: Cars[];
}

const CarFilterSlider: React.FC<CarFilterSliderProps> = ({ cars }) => {
  const [filter, setFilter] = useState("all");

  // Memoize the filtered cars to avoid re-calculating on every render
  const carsFiltered = useMemo(() => {
    return cars.filter((cars) => filter === "all" || cars.bodyType === filter);
  }, [cars, filter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (

    <Grid>
      <Row>
        <Col size={3}>
          <CarsFilter cars={cars} value={filter} onFilterChange={handleFilterChange} />
        </Col>
      </Row>
      <Row>
        <Col size={12}>
          <Slider length={carsFiltered.length}>
            <SliderItems items={carsFiltered} />
          </Slider>
        </Col>
      </Row>
    </Grid>
  );
};

export default CarFilterSlider;
