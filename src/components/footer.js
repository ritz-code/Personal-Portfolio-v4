import * as React from "react";

import "../styles/scss/_footer.scss"


const Footer = () => {
  return (
    <div className="footerContainer">
        <p>Ritu Rawat. Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

