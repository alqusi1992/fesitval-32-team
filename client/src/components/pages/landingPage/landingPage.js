import React, { useState } from "react";
import {
  Button,
  CardsHolder,
  Container,
  Footer,
  Slider,
} from "./landingPageStyle";
import about from "../../../images/about.jpg";
import program from "../../../images/program.jpg";
import tickets from "../../../images/tickets.jpg";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const LandingPage = () => {
  const [slide, setSlide] = useState(0);

  const handleLeftClick = () => {
    if (slide === 384 || slide === 768) {
      setSlide((prev) => prev - 384);
    }
    console.log(slide);
  };
  const handleRightClick = () => {
    if (slide === 0 || slide === 384) {
      setSlide((prev) => prev + 384);
    }
    console.log(slide);
  };
  return (
    <>
      <Container>
        <CardsHolder slide={slide}>
          <Link to="/home">
            <ImageCard
              {...{ img: about, title: "ABOUT", buttonTitle: "ABOUT" }}
            />
          </Link>
          <Link>
            <ImageCard
              {...{ img: program, title: "PROGRAM", buttonTitle: "PROGRAM" }}
            />
          </Link>
          <Link>
            <ImageCard
              {...{ img: tickets, title: "TICKETS", buttonTitle: "TICKETS" }}
            />
          </Link>
        </CardsHolder>
        <Slider>
          <Button onClick={handleLeftClick}>
            <FaAngleLeft />
          </Button>
          <Button>
            <FaAngleRight onClick={handleRightClick} />
          </Button>
        </Slider>
        <Footer>hello</Footer>
      </Container>
    </>
  );
};

export default LandingPage;
