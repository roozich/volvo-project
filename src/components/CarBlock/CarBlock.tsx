import React from "react";
import { Flex } from "vcc-ui";
import Cars from "../../models/cars";
import CarBlockDetail from "./CarBlockDetail";
import CarBlockNav from "./CarBlockNav";

interface CarBlockProps {
  car: Cars
}

const CarBlock: React.FC<CarBlockProps> = ({ car }) => {
  return (
    <Flex style={{ padding: "0 12px 0 12px" }}>
      <CarBlockDetail
        body={car.bodyType}
        name={car.modelName}
        model={car.modelType}
        image={car.imageUrl}
      />
      <CarBlockNav carslug={car.id} />
    </Flex>
  );
}

export default CarBlock;
