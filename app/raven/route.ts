import { NextResponse } from "next/server";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function POST(req: Request) {
  const { conversation } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",

      messages: [{ role: 'system', content: 'Rewrite the prompt submitted like you are an arcane wizard of the Imperium' }, conversation],
      temperature: 0.6,
    });
    return NextResponse.json({ result: completion.choices[0].message });
  } catch (error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json(error.response.data, { status: error.response.status });
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json({
        error: {
          message: 'An error occurred during your request.',
        }
      }, { status: 500 });
    }
  }
}
