import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { messages } = req.body;
  console.log(messages, "body");
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });
    return res.status(200).json({ success: true, content: completion.choices[0].message.content });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
