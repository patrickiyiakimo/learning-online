import { useState,  useEffect } from "react";
import img from "./images/RE1Mu3b.png";
import ScrollReveal from "scrollreveal";
import Marquee from "react-fast-marquee";

const Content = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".faq h3", {
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
  }, []);
  const [contents, setContents] = useState([
    {
      title: " Web Development",
      Name: "Fullstack Development Course",
      Price: "$125",
      id: 1,
    },
    {
      title: " Web Development",
      Name: "Python Beginner to Advance Course",
      Price: "$135",
      id: 2,
    },
    {
      title: " Web Development",
      Name: "UIUX Design Crazy Course With Pearl",
      Price: "$145",
      id: 3,
    },
    {
      title: " Web Development",
      Name: "AI Development Course",
      Price: "$155",
      id: 4,
    },
    {
      title: " Web Development",
      Name: "The Complete Web Design Course",
      Price: "$165",
      id: 5,
    },
    {
      title: " Web Development",
      Name: "Fullstack Development Course",
      Image: "<img src={ img } />",
      Price: "$175",
      id: 6,
    },
  ]);

  return (
    <Marquee pauseOnHover delay={7}>
      <div className="content" key="id">
        {contents.map((content) => (
          <div className="content-preview">
            <img src={img} />
            <p>{content.title}</p>
            <h2>{content.Name}</h2>
            <h3>{content.Price}</h3>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Content;
