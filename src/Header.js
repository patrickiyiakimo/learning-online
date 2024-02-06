import { motion, useScroll } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const title = "SKILLEX";

const Header = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".header", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".header .list", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".faq button", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".faq h2", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".faq p", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".form-container", {
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
    <div className="header">
      <div className="list">
        <ul>
          <li>
            {" "}
            <span>
              <h1>{title}</h1>
            </span>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Teacher</li>
          <li>Contact</li>
          <li>
            <span>
              <button>Sign Up</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
