import { NextResponse } from 'next/server';

export async function POST(request) {
  const { emotion } = await request.json();

  // Emotion logging logic will go here

  return NextResponse.json({ received: true });
}
