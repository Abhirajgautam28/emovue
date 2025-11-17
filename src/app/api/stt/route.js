import { NextResponse } from 'next/server';

export async function POST(request) {
  // STT logic will go here

  return NextResponse.json({ text: "Hello, how can I help you?" });
}
