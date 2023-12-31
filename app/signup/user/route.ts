import { createClient } from '@/utils/supabase/server'
import { cookies, headers } from "next/headers"
import { redirect } from 'next/navigation'

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
    const supabase = createClient(cookieStore)
    const { error: userError, data: userData } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    const { error: profileError, data: profileData, status, statusText } = await supabase.from('users').insert({
      user_id: userData?.user?.id,
      handle,
      account_name: username,
      first_name: firstName,
      last_name: lastName,
      archetype,
    })

    if (userData.user && status >= 200 && status < 300) {
      return Response.json({ message: 'created' }, { status: 200 })
    } else if (userError || profileError) {
      throw new Error(userError?.message || profileError?.message)
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}