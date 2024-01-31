import { useState } from "react";

const Faq = () => {

    const header = "Subscribe to the Newsletter"


    const [show, setShow] = useState (true);
    const [show1, setShow1] = useState (true);
    const [show2, setShow2] = useState (true);
    const [show3, setShow3] = useState (true);


    return (
        <div className="faq">
            <h1>Frequently <span>Asked Question</span></h1>
            <h3>What is Skillex?</h3>
            {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa quisquam itaque ut<br></br> molestiae animi impedit corporis vitae dolorum est.</p>}
            <button type="button" onClick={() => setShow(!show)}>
                {show === true ? "Hide": "show"}
            </button>

            <h3>What can i learn from Skillex?</h3>
            {show1 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa quisquam itaque ut<br></br> molestiae animi impedit corporis vitae dolorum est.</p>}
            <button type="button" onClick={() => setShow1(!show1)}>
                {show1 === true ? "Hide": "show"}
            </button>

            <h3>Can i teach on Skillex?</h3>
            {show2 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa quisquam itaque ut<br></br> molestiae animi impedit corporis vitae dolorum est.</p>}
            <button type="button" onClick={() => setShow2(!show2)}>
                {show2 === true ? "Hide": "show"}
            </button>

            <h3>What is included in Skillex membership?</h3>
            {show3 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa quisquam itaque <br></br> molestiae animi impedit corporis vitae dolorum est.</p>}
            <button type="button" onClick={() => setShow3(!show3)}>
                {show3 === true ? "Hide": "show"}
            </button>

            <h2>{ header }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto consequatur dolorem cumque qui fugiat omnis quia! Impedit quae exercitationem, deserunt similique tempore maxime provident a blanditiis, quos ducimus excepturi mollitia. Accusantium earum natus animi quibusdam ea itaque? At voluptatem tempore saepe vel eum voluptates fuga deleniti, velit possimus consequuntur?</p>

        <div className="form-container">
        <input type="text" name="text" placeholder="enter your e-mail address" />
          <span>  <button>Subscribe</button></span>

        </div>
        </div>
    );
}
 
export default Faq;