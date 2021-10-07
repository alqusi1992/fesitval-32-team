import React from "react";
import { CardsHolder, Container, Footer } from "./landingPageStyle";
import about from "../../../images/about.jpg";
import program from "../../../images/program.jpg";
import tickets from "../../../images/tickets.jpg";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Container>
        <CardsHolder responsive={responsive}>
          <li>
            <Link to="/home">
              <ImageCard
                {...{ img: about, title: "ABOUT", buttonTitle: "ABOUT" }}
              />
            </Link>
          </li>
          <li>
            <Link>
              <ImageCard
                {...{ img: program, title: "PROGRAM", buttonTitle: "PROGRAM" }}
              />
            </Link>
            2
          </li>
          <li>
            <Link>
              <ImageCard
                {...{ img: tickets, title: "TICKETS", buttonTitle: "TICKETS" }}
              />
            </Link>
          </li>
        </CardsHolder>
        <Footer>hello</Footer>
      </Container>
    </>
  );
};

export default LandingPage;
