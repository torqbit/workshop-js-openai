import React, { FC, ReactNode } from "react";
import Markdown from "react-markdown";

const ReactMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return <Markdown>{markdown}</Markdown>;
};

export default ReactMarkdown;
