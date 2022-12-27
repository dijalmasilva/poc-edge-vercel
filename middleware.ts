import {NextResponse} from "next/server";
import {get} from "@vercel/edge-config";

export const config = { matcher: '/welcome' }

export default function middleware() {
    const greeting = get('greeting')
    return NextResponse.json(greeting)
}