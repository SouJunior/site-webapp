"use client";

import { useEffect, useState } from "react";
import { Paragraph } from "../commons/Paragraph";

interface DescriptionRendererProps {
  descripition: string[];
}

function parseDescription(description: string[]) {
  const result: Array<
    | { type: "paragraph"; content: string }
    | { type: "list"; style: "number" | "bullet"; items: string[] }
    | { type: "subtitle"; content: string }
  > = [];

  let currentList: {
    type: "list";
    style: "number" | "bullet";
    items: string[];
  } | null = null;

  for (const text of description) {
    const match = text.match(/^(\d+\.\s|•\s)/);

    if (match) {
      const style = match[0].startsWith("•") ? "bullet" : "number";
      const item = text.replace(match[0], "");

      if (currentList?.style === style) {
        currentList.items.push(item);
      } else {
        if (currentList) result.push(currentList);
        currentList = {
          type: "list",
          style,
          items: [item],
        };
      }

      continue;
    }

    // Texto comum (parágrafo ou pergunta)
    if (currentList) {
      result.push(currentList);
      currentList = null;
    }

    if (text.includes("?") || text.includes("–") || text.includes("-end na SouJunior") || text.includes("como QA") || text.includes("Engenharia de Dados  ") || text.includes("Analytics  ")) {
      result.push({
        type: "subtitle",
        content: text,
      });
    } else {
      result.push({
        type: "paragraph",
        content: text,
      });
    }
  }

  if (currentList) result.push(currentList);
  return result;
}

export default function DescriptionRenderer({
  descripition,
}: DescriptionRendererProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const parsedDescription = parseDescription(descripition ?? []);

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
            <Paragraph descripition={true} key={index}>
              {item.content}
            </Paragraph>
          );
        }

        if (item.type === "subtitle") {
          return (
            <Paragraph descripition={true} key={index}>
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
