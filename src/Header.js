import { motion, useScroll } from "framer-motion";

const title = "SKILLEX";

function Component() {
  const { scrollYProgress } = useScroll();

  return <motion.div style={{ scaleX: scrollYProgress }} />;
}

const Header = () => {
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
