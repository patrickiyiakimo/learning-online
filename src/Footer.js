import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const Footer = () => {
  const setupScrollReveal = () => {
    const sr = ScrollReveal();

    sr.reveal(".footer", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".footer .lister", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".footer content", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".footer content-one", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
    });

    sr.reveal(".footer content-two", {
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
    <div className="footer">
      <div className="lister">
        <h4>Get Started</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint facilis
          magnam praesentium eum laudantium tenetur est aut natus distinctio!
          Blanditiis fugit vel culpa veniam porro, officia est velit pariatur.
          Laudantium.
        </p>
        <div className="content">
          <h4>Services</h4>
          <p>Web Design</p>
          <p>Web Development</p>
          <p>Science</p>
        </div>
        <div className="content-one">
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Career</p>
        </div>
        <div className="content-two">
          <h4>Follow Us</h4>
          <p>Skillexlearning@gmail.com</p>
          <p>+123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
