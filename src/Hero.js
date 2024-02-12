import ScrollReveal from "scrollreveal";
import image from "./images/happy-surprised-curly-haired-woman-receives-good-news-from-friend-holds-mobile-phone-sends-text-mesages-wears-casual-turtleneck-isolated-purple-wall-downloads-app-browses-internet.jpg";
import img from "./images/RE1Mu3b.png";
import stan from "./images/images.jpeg";
import air from "./images/airbnb.jpeg";
import google from "./images/google.jpeg";
import penn from "./images/penn.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
// import Marquee from 'react-fast-marquee';

// import { motion, useScroll } from "framer-motion";

const text = "Your e-learning partner";

const Hero = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".hero", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".section", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".sub-section", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".image", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".collabo", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".companies", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });
  };

  useEffect(() => {
    setupScrollReveal();
  });
  return (
    <div className="hero">
      <span>
        <p>{text}</p>
      </span>
      <div className="section">
        <h1>
          This is <br></br>the new way<br></br> to learn online
        </h1>
        <div className="sub-section">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit debitis, itaque quos fugiat voluptas unde!
          </p>
          <span>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px green",
              }}
            >
              Get Started
            </motion.button>
          </span>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px black",
            }}
          >
            Discover
          </motion.button>
        </div>
        <div className="image">
          <img src={image} />
        </div>
        <div className="collabo">
          <p>
            We collaborate with{" "}
            <span>100+ leading Universities and Companies</span>
          </p>
        </div>
        <div className="companies">
          <img src={img} />
          <img src={stan} />
          <img src={air} />
          <img src={google} />
          <img src={penn} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
