import { createClient } from '@/utils/supabase/server'
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const cookieStore = cookies()

  try {
    const supabase = createClient(cookieStore)
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw new Error(error?.message)
    }

    return Response.json({ message: 'Signed out' }, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}