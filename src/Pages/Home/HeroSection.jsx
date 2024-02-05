import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function HeroSection() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['SQL Expert','Learning Programmer', 'Tech Enthusiast', 'Tech Blogger'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ravishka Gurulumulla</p>
          <div className="hero--section--title">
            <span className="hero--section--title--color" ref={el} />
          </div>
          <p className="hero--section--description">
          I am Currently Working as an IT Executive and I have hands on experience in SQL, SAP, VB ...etc.
          </p>
        </div>
        <a href="./doc/cv.pdf" download className="btn btn-primary">
        Download CV
        </a>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
