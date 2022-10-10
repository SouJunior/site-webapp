import React from "react";
/*import "footer.module.css";*/

import {FaDiscord, FaFacebookSquare, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

//array com os icones

const socialNetworks = [
  {name: "discord" , icon: <FaDiscord />},
  {name: "facebook" , icon:<FaFacebookSquare /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram />, },
  { name: "linkedin", icon: <FaLinkedinIn /> },
  {name: "twitter" , icon: <FaTwitter /> },
  {name: "youtube", icon: <FaYoutube /> },
   ];

export const Footer = () => {
  return (
    <section className="social-networks">
      <h2 className="title">Faça parte da nossa comunidade!</h2>
       {socialNetworks.map((network) => (
       <a href="#" target="_blank" className="social-btn" id={network.discord} key={network.discord}>
       {network.icon}
        </a>,
         <a href="#" target="_blank" className="social-btn" id={network.facebook} key={network.facebook}>
         {network.icon}
       </a>,
     <a href="#" target="_blank" className="social-btn" id={network.github} key={network.github}>
     {network.icon}
    </a>,
      <a href="#" target="_blank" className="social-btn" id={network.instagram} key={network.instagram}>
   {network.icon}
   </a>,
       <a href="#" target="_blank" className="social-btn" id={network.linkedin} key={network.linkedin}>
       {network.icon}
     </a>,
      <a href="#" target="_blank" className="social-btn" id={network.twitter} key={network.twitter}>
      {network.icon}
    </a>,
     <a href="#" target="_blank" className="social-btn" id={network.youtube} key={network.youtube}>
     {network.icon}
   </a>,
     
    ))}
  </section>
  );
};

