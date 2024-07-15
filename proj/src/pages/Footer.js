import React from "react";
import "./Footer.css";

function Footer() {
  const handleClick = (event) => {
    console.log(event.target);
  };
  return (
    <div className="footer-background">
      <main>
        <a
          href="https://www.instagram.com/fixit_handyman_solution/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/instagram.png`}
            alt="Instagram"
            className="icon"
          />
        </a>
        <img
          src={`${process.env.PUBLIC_URL}/facebook.png`}
          alt="Facebook"
          className="icon"
        />
        <a
          href="https://g.co/kgs/UZsDEj2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/google.png`}
            alt="Google"
            className="icon"
          />
        </a>
      </main>
    </div>
  );
}

export default Footer;
