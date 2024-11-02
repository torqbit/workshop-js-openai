import OpenAiChat from "@/components/OpenAi/OpenAiChat";
import OpenAiChatWindow from "@/components/OpenAi/OpenAiChatWindow";

import { NextPage } from "next";
import { useState } from "react";

const ChatPage: NextPage = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>();
  const [content, setContent] = useState<string>("");

  const handleMessage = async (message: string) => {
    console.log(message, "fitst");
    if (messages) {
      setMessages([...messages, { role: "user", content: message }, { role: "system", content: "loading" }]);
    } else {
      setMessages([
        { role: "user", content: message },
        { role: "system", content: "loading" },
      ]);
    }
    setContent("");

    const response = await fetch("/api/open-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages ? [...messages, { role: "user", content: message }] : [{ role: "user", content: message }],
      }),
    });
    const result = await response.json();
    if (result.success) {
      setMessages((messages) =>
        messages?.map((m) => {
          if (m.role === "system" && m.content === "loading") {
            return {
              ...m,
              content: result.content,
            };
          } else {
            return m;
          }
        })
      );
    }
  };

  return (
    <>
      {messages && messages.length > 1 ? (
        <OpenAiChatWindow messages={messages} handleMessage={handleMessage} content={content} setContent={setContent} />
      ) : (
        <OpenAiChat handleMessage={handleMessage} content={content} setContent={setContent} />
      )}
    </>
  );
};
export default ChatPage;
