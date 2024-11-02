import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<
    {
      role: string;
      message: string;
    }[]
  >([
    {
      role: "user",
      message:
        "First message to rebuild our new chat ui using html and css First message to rebuild our new chat ui using html and cssFirst message to rebuild our new chat ui using html and css",
    },
    {
      role: "system",
      message:
        "First message to rebuild our new chat ui using html and css First message to rebuild our new chat ui using html and cssFirst message to rebuild our new chat ui using html and css",
    },
  ]);

  return <></>;
};
export default Chat;
