import React from "react";
import style from "./AlertMessage.module.css";
import Link from "next/link";

const AlertMessage = ({ message, onClose }) => (
  <div className={style.overlay}>
    <div className={style.box}>
      <p>{message}</p>
      <Link href="/">
        <button onClick={onClose}>Entendi</button>
      </Link>
    </div>
  </div>
);

export default AlertMessage;
