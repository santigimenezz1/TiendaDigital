import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Footer/footer.css";
import IconosSociales from "../../Common/Footer/IconosSociales/IconosSociales";

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div>
          <IconosSociales />
        </div>
      </div>
    </>
  );
};

export default Footer;
