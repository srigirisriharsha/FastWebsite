import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import hero from "../images/hero.png";
import { Slide } from "@material-ui/core";
export function CarouselImages(props) {
  var items = [
    // {
    //   name: "Random Name #1",
    //   description: "Probably the most random thing you have ever seen!",
    //   image: hero,
    // },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: image1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image2,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image3,
    },
  ];

  return (
    <>
      <Carousel autoPlay={{ interval: 1000 }} animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function Item(props) {
  return (
    <>
      <Slide direction="left" in={true} timeout={1000}>
        <img
          src={props.item.image}
          // height="350px"
          width="100%"
          alt={props.item.description}
          style={{ borderRadius: "10px" }}
        />
      </Slide>
    </>
  );
}
