import React from 'react'
import styles from "./Textarea.module.css"

const Textarea = ({name, text}) => {
  return (
    <div className={styles.textarea}>

        <label forHtml={name}>{text}</label>
        <textarea>

        </textarea>
        </div>
  )
}

export default Textarea