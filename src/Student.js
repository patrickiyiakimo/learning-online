import img from "./images/african-american-woman-smiling-with-hand-chin.jpg";
import curl from "./images/happy-surprised-curly-haired-woman-receives-good-news-from-friend-holds-mobile-phone-sends-text-mesages-wears-casual-turtleneck-isolated-purple-wall-downloads-app-browses-internet.jpg";
import hap from "./images/photo-happy-dark-skinned-guy-celebrates-victory-favourite-team-reads-results-game-internet-looks-overjoyed-smartphone-display.jpg";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const title = "Our Happy Students";
const text = "150+ online users";

const Student = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".student", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    // sr.reveal(".faq p", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });

    // sr.reveal(".faq button", {
    //   duration: 1000,
    //   origin: "bottom",
    //   distance: "50px",
    //   delay: 200,
    // });

    sr.reveal(".student img", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".student p", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".student h2", {
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
    <div className="student">
      <Marquee delay={5}>
        <h2>{title}</h2>
        <span>
          <p>{text}</p>
        </span>
        <img src={img} />
        <img src={curl} />
        <img src={hap} />
      </Marquee>
      {/* <button>+</button> */}
    </div>
  );
};

export default Student;
