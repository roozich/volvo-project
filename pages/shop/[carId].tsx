import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Cars from '../../src/models/cars';
import { fetchCars } from '../../src/lib/api';

import { Block, Text } from 'vcc-ui';

type ShopPageProps = {
  car: Cars
};

const ShopPage: NextPage<ShopPageProps> = ({ car }) => {

  return (

    <Block extend={{ textAlign: "center", padding: 40 }}>
      <Text subStyle="emphasis">{car.modelName} - Shop Page!</Text>
    </Block>

  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const cars = await fetchCars();

    const paths = cars.map((car) => ({
      params: { carId: car.id.toString() },
    }));

    return {
      paths,
      fallback: false
    };

  } catch (error) {
    console.error('Failed to fetch cars for paths:', error);

    return {
      paths: [],
      fallback: false
    };
  }
};


export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const cars = await fetchCars();
    const carId = context.params?.carId;
    const car = cars.find((car) => car.id.toString() === carId);

    if (!car) {
      return { notFound: true };
    }

    return {
      props: {
        car,
      },
    };
  } catch (error) {
    console.error('Failed to fetch car details:', error);
    return { notFound: true };
  }
};

export default ShopPage;
