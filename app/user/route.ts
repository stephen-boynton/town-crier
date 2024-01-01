import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { initializeDb } from "../_db";
import { user } from "../_models/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const db = await initializeDb();
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data } = await supabase.auth.getUser();

    if (!data.user) throw new Error('User not found');

    const result = await db.select().from(user)
      .where(eq(user.userId, data.user.id));

    const accountData = result[0];

    if (data.user && accountData) {
      const { user } = data;
      const { handle, accountName, firstName, lastName, archetype, id } = accountData;

      return NextResponse.json({
        user: {
          email: user.email,
          id,
          handle,
          username: accountName,
          firstName,
          lastName,
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