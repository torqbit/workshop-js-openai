import React, { FC, ReactNode } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const ReactMarkdown: FC<{ markdown: string }> = ({ markdown }) => {
  return <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>;
};

export default ReactMarkdown;
