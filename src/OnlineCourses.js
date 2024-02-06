import learn from "./images/learn image.jpeg";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const OnlineCourses = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".onlinecourses", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".online", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    // sr.reveal(".faq button", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });

    // sr.reveal(".faq h2", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });

    // sr.reveal(".faq p", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });

    // sr.reveal(".form-container", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });
  };

  useEffect(() => {
    setupScrollReveal();
  });

  return (
    <div className="onlinecourses">
      <img src={learn} />
      <div className="courses">
        <h1>
          We provide the<br></br>best <span>online courses</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
          Voluptatum aliquid voluptatem,<br></br> temporibus error mollitia qui
          quisquam unde aperiam quas sapiente <br></br>illo?
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default OnlineCourses;
