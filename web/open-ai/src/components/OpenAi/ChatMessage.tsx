import { FC, ReactNode } from "react";
import styles from "@/styles/chat.module.scss";
import ReactMarkdown from "../ReactMarkdown";
import SvgIcons from "../SvgIcons";

const ChatMessage: FC<{ message: string; role: string }> = ({ role, message }) => {
  return (
    <div className={role === "system" ? styles.chat_system_message : styles.chat_user_message}>
      <div className={role === "system" ? styles.chat_system_message_wrapper : styles.chat_user_message_wrapper}>
        <img src={"https://cdn.torqbit.com/static/torq.png"} alt="torqbit_logo" />
        <div>{message === "loading" ? <i>{SvgIcons.preLoader}</i> : <ReactMarkdown markdown={message} />}</div>
      </div>
    </div>
  );
};
export default ChatMessage;
