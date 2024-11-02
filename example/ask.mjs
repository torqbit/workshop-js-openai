import OpenAI from "openai";
const openai = new OpenAI();

const args = process.argv;
console.log(args);

if (args.length <= 2) {
  console.error("Missing arguments for application");
} else {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: args[2],
      },
    ],
  });

  console.log(completion.choices[0].message);
}
