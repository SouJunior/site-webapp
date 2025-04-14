import React, { useState, useRef, useEffect } from 'react';
import { accordionData } from '../../utils/accordionData';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Accordion.module.css";


export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {accordionData.map((item, index) => (
        <AccordionSection
          key={item.id}
          isActive={activeIndex === index}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

const AccordionSection = ({
  isActive,
  title,
  subtitle,
  content,
  onClick,
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isActive) {
      const scrollHeight = contentRef.current?.scrollHeight || 0;
      setHeight(`${scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isActive]);

  return (
    <div className={styles.title}>
        <div className={styles.contentBtn}>
            <button
                onClick={onClick}
                className={styles.btnTitle}
                role="button"
                tabIndex="0"
            >
                {title}
            </button>
            <div 
                className={styles.btnCross} 
                onClick={onClick}
            >                
                {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
        </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: 'hidden',
          transition: 'max-height 0.8s ease',
        }}
      >
        <div className={styles.contentText}>
            <header>{subtitle}</header>
            <p>{content}</p>
            <button className={styles.button} onClick={() => window.open("/apoiar", "_blank", "noopener noreferrer")}>
                Cadastre-se como apoiador.
            </button>
        </div>
      </div>
    </div>
  );
};