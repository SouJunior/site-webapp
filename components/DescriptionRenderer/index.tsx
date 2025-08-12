"use client";

import { useEffect, useState } from "react";
import { Paragraph } from "../commons/Paragraph";
import parseText from '../../utils/parseText';

export default function DescriptionRenderer({ description }: { description: string[] }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const parsedDescription = parseText(description ?? []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;

  return (
    <div style={!isMobile ? { width: "70%" } : undefined}>
      {parsedDescription.map((item, index) => {
        if (item.type === "paragraph") {
          return (
            <Paragraph description={true} key={index}>
              {item.content}
            </Paragraph>
          );
        }

        if (item.type === "subtitle") {
          return (
            <Paragraph description={true} key={index}>
              <strong style={{ fontSize: "3rem" }}>{item.content}</strong>
            </Paragraph>
          );
        }

        if (item.type === "list") {
          const ListTag = item.style === "number" ? "ol" : "ul";
          return (
            <ListTag
              style={{
                paddingLeft: isMobile ? "2rem" : "7rem",
                listStyle: ListTag === "ol" ? "decimal" : "disc",
                fontSize: isMobile ? "1.5rem" : "2rem",
              }}
              key={index}>
              {item.items.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ListTag>
          );
        }

        return null;
      })}{" "}
    </div>
  );
}
