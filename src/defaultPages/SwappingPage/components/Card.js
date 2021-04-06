import React from "react";
import { string, number, array } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, text, pics } = data[i];

  return (
    <animated.div
      className="cardcontainer"
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    > 
      <animated.div
        {...bind(i)}
        style={{
        }}
      >
        <div className="card">
          <Carousel>
            {pics.map((pic, index) => (
              <img className="profilePicture" src={pic} key={index} alt="profilePicture" />
            ))}
          </Carousel>
          <h2 className="cardName">{name}</h2>
          <h5 className="cardDescription">{text}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
  name: string,
  age: number,
  distance: string,
  text: string,
  pics: array
};

export default Card;
