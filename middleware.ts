import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // Retrieve the client's IP from the x-forwarded-for header or req.ip
    const clientIp = req.headers.get('x-forwarded-for') || req.ip;

    // If multiple IPs are in the x-forwarded-for header, the first one is the client's original IP
    const originalClientIp = clientIp?.split(',')[0].trim();

    // Add the original client IP to a custom header
    // req.headers.set('X-Original-Client-IP', originalClientIp||"" );

    return NextResponse.next();
}

// Apply middleware to relevant routes
export const config = {
    matcher: '/bts/:path*',  // Adjust the path as necessary
};