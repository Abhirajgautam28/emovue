import { NextResponse } from 'next/server';

export async function POST(request) {
  const { message } = await request.json();

  // LLM logic will go here

  return NextResponse.json({ reply: `You said: ${message}` });
}
