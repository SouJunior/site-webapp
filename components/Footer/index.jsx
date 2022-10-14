import React from "react";

import styles from "./Footer.module.css";

import {FaDiscord, FaFacebookSquare, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

//array com os icones

const socialNetworks = [
  {id:"discord", name: "discord" , icon: <FaDiscord />, path: "www.youtube.com"},
  {id:"facebook", name: "facebook" , icon:<FaFacebookSquare />, path: "www.youtube.com" },
  {id:"github", name: "github", icon: <FaGithub />, path: "www.youtube.com" },
  {id:"instangram", name: "instagram", icon: <FaInstagram />, path: "www.youtube.com" },
  {id:"linkedin", name: "linkedin", icon: <FaLinkedinIn />, path: "www.youtube.com" },
  {id:"twitter",name: "twitter" , icon: <FaTwitter />, path: "www.youtube.com" },
  {id:"youtube",name: "youtube", icon: <FaYoutube />, path: "www.youtube.com" },
   ];

export const Footer = () => {
//percorrer o array com o map para renderizar na tela

  return (
    <section className={styles.footerContainer}>
      <h2 className={styles.title}>Faça parte da nossa comunidade!</h2>
    <div className={styles.icons}>         
    {socialNetworks.map(({name, icon}) => (
      <a href="#" target="_blank" className={styles.socialBtn} id={name} key={name}>
        {icon}
      </a>
    ))}
  </div>
  </section>
  );
};