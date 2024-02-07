import React from 'react';
import { Block } from 'vcc-ui';
import style from './CarBlockDetail.module.css';
import Image from 'next/image';

interface CarBlockDetailProps {
  body: string;
  name: string;
  model: string;
  image: string;

}

const CarBlockDetail: React.FC<CarBlockDetailProps> = ({ body, name, model, image }) => {
  return (
    <>
      <Block extend={{ marginBottom: 15 }}>
        <span className={style.carBody}>{body}</span>
        <h3 className={style.carName}>{name}</h3>
        <span className={style.carModel}>{model}</span>
      </Block>

      <Block extend={{ position: "relative", with: "100%", height: "250px", }}>
        <Image
          className={style.carImg}
          fill={true}
          src={image}
          alt={name}
        />
      </Block>
    </>
  );
};

export default CarBlockDetail;
