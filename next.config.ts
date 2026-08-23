import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable server-side rendering, API routes, and database access
  // This allows Vercel to run your Next.js server with NextAuth, Prisma, and dynamic pages
};

export default nextConfig;
