import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  tablesFilter: ["/^(?!.*_cf_KV).*$/"],
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
