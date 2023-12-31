import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data } = await supabase.auth.getUser();
    const { data: accountData } = await supabase.from('user').select('*');

    if (data.user && accountData) {
      const { user } = data;
      const { handle, account_name, first_name, last_name, archetype, id } = accountData;

      return NextResponse.json({
        user: {
          email: user.email,
          id,
          handle,
          username: account_name,
          firstName: first_name,
          lastName: last_name,
          archetype,
        }
      },
        {
          status: 200
        })
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}