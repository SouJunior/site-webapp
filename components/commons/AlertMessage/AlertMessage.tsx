import React from "react";
import style from "./AlertMessage.module.css";
import Link from "next/link";

const AlertMessage = ({ message, onClose }) => (
  <div className={style.overlay}>
    <div className={style.box}>
      <div className={style.onClose}>
        <p onClick={onClose}>
          <Link href="/">X</Link>
        </p>
      </div>
      <p>{message}</p>
      <Link href="/">
        <button onClick={onClose}>OK</button>
      </Link>
    </div>
  </div>
);

export default AlertMessage;
