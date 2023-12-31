import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data.user) {
      return NextResponse.json({ message: 'Logged in.' }, { status: 200 })
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}