import svg from "./images/undraw_add_information_j2wg.svg";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Instructor = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".instructor", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".instructor-courses", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    // sr.reveal(".instructor-courses ", {
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
    <div className="instructor">
      <img src={svg} />
      <div className="instructor-courses">
        <h1>
          Become <span>An Instructor</span> of Our Platform
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab rerum
          similique eos est eum dolore esse aut quas ipsam, mollitia architecto?
          Ut dolore ea quidem repellat nisi doloremque dicta placeat quod ipsa
          deleniti! Reprehenderit, ab.
        </p>
        <button>Start Teaching</button>
      </div>
    </div>
  );
};

export default Instructor;
