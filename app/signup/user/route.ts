import { initializeDb } from '@/app/_db'
import { user } from '@/app/_models/schema'
import { createClient } from '@/utils/supabase/server'
import { cookies, headers } from "next/headers"
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  const {
    email,
    password,
    firstName,
    lastName,
    handle,
    username,
    archetype,
  } = await request.json()
  const origin = headers().get('origin')
  const cookieStore = cookies()

  try {
    const db = await initializeDb();
    const supabase = createClient(cookieStore)
    const { error: userError, data: userData } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    const results = await db.insert(user).values({
      id: uuidv4(),
      firstName,
      lastName,
      handle,
      accountName: username,
      userId: userData?.user?.id,
      archetype,
    });

    const data = results

    console.log({ userData, data })
    return Response.json({ message: 'created' }, { status: 200 })
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 })
  }
}