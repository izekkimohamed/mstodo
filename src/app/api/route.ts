import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  const clientIP = req.connection.remoteAddress || req.socket.remoteAddress;

  console.log(`Client IP: ${clientIP}`);

  // Your API logic here
  return NextResponse.json({
    clientIP
  })
}
