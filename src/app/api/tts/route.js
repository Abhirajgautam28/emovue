import { NextResponse } from 'next/server';

export async function POST(request) {
    const { text } = await request.json();

  // TTS logic will go here

  return NextResponse.json({ audio: "..." });
}
