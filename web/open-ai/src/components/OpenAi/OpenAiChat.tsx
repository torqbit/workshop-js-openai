import { FC, useState } from "react";
import styles from "@/styles/chat.module.scss";
import SvgIcons from "../SvgIcons";

const OpenAiChat: FC<{
  handleMessage: (message: string) => void;
  content: string;
  setContent: (value: string) => void;
}> = ({ handleMessage, content, setContent }) => {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleMessage(content);
    }
  };
  return (
    <section className={styles.open_ai_chat}>
      <div className={styles.chat_wrapper}>
        <div className={styles.logo_wrapper}>
          <img src={"https://cdn.torqbit.com/static/torq.png"} alt="torqbit_logo" />
          <h1>What can I help with?</h1>
        </div>
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
    </section>
  );
};

export default OpenAiChat;
