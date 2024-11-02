import { FC, ReactNode, useState } from "react";
import styles from "@/styles/chat.module.scss";

import ChatMessage from "./ChatMessage";
import SvgIcons from "../SvgIcons";

const OpenAiChatWindow: FC<{
  messages: { role: string; content: string }[];
  handleMessage: (message: string) => void;
  content: string;
  setContent: (value: string) => void;
}> = ({ messages, handleMessage, content, setContent }) => {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleMessage(content);
    }
  };
  return (
    <section className={styles.open_ai_chat_window}>
      <div className={styles.chat_window_wrapper}>
        <div className={styles.chat_info}>
          <div>
            {messages.map((msg, i) => {
              return <ChatMessage message={msg.content} role={msg.role} key={i} />;
            })}
          </div>
        </div>
        <div className={styles.chat_box_wrapper}>
          <div className={styles.chat_box}>
            <input
              placeholder="Ask torqbit"
              className={styles.chat_box}
              value={content}
              onKeyDown={handleKeyDown}
              onChange={(e) => setContent(e.currentTarget.value)}
            />
            <button
              className={styles.send_button}
              onClick={() => {
                handleMessage(content);
              }}
            >
              <i>{SvgIcons.send}</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAiChatWindow;
