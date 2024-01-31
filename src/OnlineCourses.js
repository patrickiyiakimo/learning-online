import learn from "./images/learn image.jpeg"
import { motion, useScroll, } from "framer-motion"

function Component() {
    const { scrollYProgress } = useScroll();
  
    return(
        <motion.div style={{ scaleX: scrollYProgress }} />
        
    )
}


const OnlineCourses = () => {
    return ( 
        <div className="onlinecourses">
            <img src={ learn } />
            <div className="courses">
                <h1>We provide the<br></br>best <span>online courses</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Voluptatum aliquid voluptatem,<br></br> temporibus error mollitia qui quisquam unde aperiam quas sapiente <br></br>illo?</p>
                <button>Know More</button>
            </div>
        </div>
     );
}
 
export default OnlineCourses;