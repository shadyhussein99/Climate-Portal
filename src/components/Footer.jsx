
// Footer of the website

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <i className="fa-brands fa-facebook footer-icon"></i>
      <i className="fa-brands fa-twitter footer-icon"></i>
      <i className="fa-solid fa-envelope footer-icon"></i>
      <p className="footer-p">Copyright ⓒ {year} Climate Portal</p>
    </footer>
  );
}

export default Footer