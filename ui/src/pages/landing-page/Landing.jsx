import "./Landing.scss";
import "./styles.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";

const img_1 ="https://imgs.search.brave.com/2yuE8S2MfO4IWVaGYFgOmekDCpHsIrA8IXN11Tspwd4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNE4xTmVv/SFRhVDhuSTB4N3Ax/akNHay81YTYwNTRh/NTA0NmI3NzQ5YTZi/NzhhZDNjYTFlYjU3/Zi93YXRlci1zcGxh/c2gtY2xyLXNodXR0/ZXJzdG9ja18yNTg0/MjE4MDUuanBnP2Zp/dD1maWxsJnc9NDgw/Jmg9Mjcw"
const img_2 =
  "https://imgs.search.brave.com/BluPKl-yS85sijsocE4bxpZ9B7EXjFQNe4XvkwIhqLE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVmdW5reS5jb20v/aW1hZ2VzL3ByaXNt/aWMvYzAxMjlkY2It/OGY2Yi00YmZlLTk1/MjktYWIxYzE4NjUx/OGU1X3NrZXRjaC1h/ZnRlci5qcGVnP2F1/dG89YXZpZix3ZWJw/JmZvcm1hdD1qcGcm/d2lkdGg9ODYz";
const img_3 =
  "https://imgs.search.brave.com/jqtsVAlWR2r9wk4XSkTjfU6755A1b2jCGaQ_pwv0bE8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM0NDI0OTc2L3Iv/aWwvYTc5YTkzLzUy/MzM3MTE4MDgvaWxf/NjAweDYwMC41MjMz/NzExODA4XzJhaTYu/anBn";
const img_4 =
  "https://imgs.search.brave.com/1EyQ-uxRxymvo6z1sr43kIg-yPP9J6irh5Yuuhety9g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmLzNk/L2YxL2ZmM2RmMWU0/OWE4N2Q4ZDU0YWYx/NDk0YWFhNGI1NTRl/LmpwZw";
const img_5 =
  "https://imgs.search.brave.com/dpqAvjkiGxeS8tI-9A32G5FjqeL0DlwTdh-EVj_oXLs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVmdW5reS5jb20v/aW1hZ2VzL3ByaXNt/aWMvYThmODc3ZmYt/ZjE1My00MjMwLTlk/OTUtYjk2MGJlM2U0/YTc5X3Bob3RvLXRv/LXBhaW50aW5nLWFm/dGVyLmpwZWc_YXV0/bz1hdmlmLHdlYnAm/Zm9ybWF0PWpwZyZ3/aWR0aD04NjM";
const Landing = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <section className="sec_1">
        <div className="content">
          <div className="info">
            <h1>My Creative Works</h1>
            <p>
              Welcome to my portfolio! Here you wll find a collection of my best
              creative works. From digital art to interactive web designs, I
              strive to push the boundaries of creativity and innovation.
            </p>

            <button onClick={()=>navigate("store")} >Explore</button>
          </div>
          <div className="image">
            <img
              src="https://imgs.search.brave.com/o9AjwI0Dd4KDDhZ4klV07DuZDrvIW8UT8z_tqNbZmkU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/Y3RzLmFydHNwYW4u/Y29tL21lbWJlci9y/c3Rld2FydC81MDAv/MzE0OTQxMy5qcGc"
              alt="Creative Work"
            />
          </div>
        </div>
      </section>

      <section className="sec_3">
       
       <div className="card">
        <div className="head-card">
          <b>01</b>
          <span>Grooming</span>
        </div>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit molestias voluptas enim suscipit ex eligendi, tempora atque ullam quam.</span>
        <img src={img_1} alt="" />
       </div>
       <div className="card">
        <div className="head-card">
          <b>02</b>
          <span>Grooming</span>
        </div>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit molestias voluptas enim suscipit ex eligendi, tempora atque ullam quam.</span>
        <img src={img_3} alt="" />
       </div>
       <div className="card">
        <div className="head-card">
          <b>03</b>
          <span>Grooming</span>
        </div>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugit molestias voluptas enim suscipit ex eligendi, tempora atque ullam quam.</span>
        <img src={img_4} alt="" />
       </div>


      </section>

      <section className="sec_4">
        <div className="content">
        <div className="image">
            <img
              src="https://imgs.search.brave.com/o9AjwI0Dd4KDDhZ4klV07DuZDrvIW8UT8z_tqNbZmkU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/Y3RzLmFydHNwYW4u/Y29tL21lbWJlci9y/c3Rld2FydC81MDAv/MzE0OTQxMy5qcGc"
              alt="Creative Work"
            />
            <img
              src="https://imgs.search.brave.com/o9AjwI0Dd4KDDhZ4klV07DuZDrvIW8UT8z_tqNbZmkU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/Y3RzLmFydHNwYW4u/Y29tL21lbWJlci9y/c3Rld2FydC81MDAv/MzE0OTQxMy5qcGc"
              alt="Creative Work"
            />
            <img
              src="https://imgs.search.brave.com/o9AjwI0Dd4KDDhZ4klV07DuZDrvIW8UT8z_tqNbZmkU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/Y3RzLmFydHNwYW4u/Y29tL21lbWJlci9y/c3Rld2FydC81MDAv/MzE0OTQxMy5qcGc"
              alt="Creative Work"
            />
            <img
              src="https://imgs.search.brave.com/o9AjwI0Dd4KDDhZ4klV07DuZDrvIW8UT8z_tqNbZmkU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vYmpl/Y3RzLmFydHNwYW4u/Y29tL21lbWJlci9y/c3Rld2FydC81MDAv/MzE0OTQxMy5qcGc"
              alt="Creative Work"
            />
          </div>
          <div className="info">
            <h2>My Creative Works</h2>
            <p>
              Welcome to my portfolio! Here you wll find a collection of my best
              creative works. From digital art to interactive web designs, I
              strive to push the boundaries of creativity and innovation.
            </p>

          </div>
          
        </div>
      </section>

      <section className="sec_2">
        <p></p>
        <div className="image-grid">
          <img src={img_1} alt="" />
          <img src={img_2} alt="" />
          <img src={img_3} alt="" />
          <img src={img_4} alt="" />
          <img src={img_5} alt="" />
        </div>

        <div className="image_text">
          <h3>Here is some cool image for your veccation & ETC</h3>
          <span>Asutosh sidhya</span>
        </div>
      </section>

      
    </div>
  );
};

export default Landing;
