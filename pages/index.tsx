import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
import CarFilterSlider from '../src/components/CarFilterSlider';
import { fetchCars } from '../src/lib/api';
import Cars from "../src/models/cars";
import { Block, Text } from 'vcc-ui';

interface HomeProps {
  cars: Cars[];
}

const Home: NextPage<HomeProps> = ({ cars }) => (
  <main>
    <Head>
      <title>Volvo Cars</title>
      <meta name="description" content="Volvo Cars Slider" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section style={{ paddingTop: "50px" }}>

      {cars.length > 0 ?
        <CarFilterSlider cars={cars} /> :
        <Block extend={{ textAlign: "center", padding: 40 }}>
          <Text subStyle="emphasis">There is nothing to show!</Text>
        </Block>
      }

    </section>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const cars = await fetchCars();
    return {
      props: { cars },
      revalidate: 60
    };
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    // Return empty array for cars prop directly within props object
    return {
      props: { cars: [] }
    };
  }
};

export default Home;
