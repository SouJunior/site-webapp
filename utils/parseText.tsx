function parseText(description: string[]) {
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

    if (text.includes("  ")) {
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

export default parseText;
