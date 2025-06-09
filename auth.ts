import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"

const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5433,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: PostgresAdapter(pool),
  pages: {
    signIn: "/login"
  }
})