import styles from "./Paragraph.module.css";

export const Paragraph = ({ descripition, children }) => {
  const convertTextToLink = (text) => {
    if(typeof text !== 'string') return text;
    if(!text.includes('em faça parte')) return text;

    const regex = /(faça parte)/
    const parts = text.split(regex);

    if(parts.length === 1) return text;

    return parts.map((part, index) => {
      if(part.toLowerCase() === 'faça parte') {
        return (
          <a
            key={index}
            href="/?#participation"
            rel="noopener noreferrer"
            style={{fontWeight: "bold"}}
          >
            {part}
          </a>
        )
      }
      return part;
    })
  }

  return (
    <p
      className={styles.Paragraph}
      style={
        descripition ? { marginBlock: "1.5rem" } : { marginBlock: "0rem" }
      }>
      {convertTextToLink(children)}
    </p>
  );
};
