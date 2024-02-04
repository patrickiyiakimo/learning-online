import { useState } from "react";
import ScrollReveal from "scrollreveal";

const Faq = () => {
  const header = "Subscribe to the Newsletter";

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className="faq">
      <h1>
        Frequently <span>Asked Question</span>
      </h1>
      <h3>What is Skillex?</h3>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa
          quisquam itaque ut<br></br> molestiae animi impedit corporis vitae
          dolorum est.
        </p>
      )}
      <button type="button" onClick={() => setShow(!show)}>
        {show === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>

      <h3>What can i learn from Skillex?</h3>
      {show1 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa
          quisquam itaque ut<br></br> molestiae animi impedit corporis vitae
          dolorum est.
        </p>
      )}
      <button type="button" onClick={() => setShow1(!show1)}></button>

      <h3>Can i teach on Skillex?</h3>
      {show2 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa
          quisquam itaque ut<br></br> molestiae animi impedit corporis vitae
          {show1 === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
          dolorum est.
        </p>
      )}
      <button type="button" onClick={() => setShow2(!show2)}></button>

      <h3>What is included in Skillex membership?</h3>
      {show3 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa
          quisquam itaque <br></br> molestiae animi impedit corporis vitae
          {show2 === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
          dolorum est.
        </p>
      )}
      <button type="button" onClick={() => setShow3(!show3)}>
        {show3 === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>

      <h2>{header}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iusto consequatur dolorem cumque qui fugiat omnis quia! Impedit quae
        exercitationem, deserunt similique tempore maxime provident a
        blanditiis, quos ducimus excepturi mollitia. Accusantium earum natus
        animi quibusdam ea itaque? At voluptatem tempore saepe vel eum
        voluptates fuga deleniti, velit possimus consequuntur?
      </p>

      <div className="form-container">
        <input
          type="text"
          name="text"
          placeholder="enter your e-mail address"
        />
        <span>
          {" "}
          <button>Subscribe</button>
        </span>
      </div>
    </div>
  );
};

export default Faq;
