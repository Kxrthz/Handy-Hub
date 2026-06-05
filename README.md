# HandyHub 🛠️

"All Home Services in One Place — Fix. Repair. Relax."

HandyHub is a production-ready, two-sided home services marketplace connecting customers with verified service providers. Features include real-time tracking, escrow payments, built-in chat, a 30-day warranty, an AI-powered issue diagnosis, and a comprehensive admin portal.

## Features fully implemented
- **Auth System**: NextAuth Role-based (Customer, Provider, Admin)
- **Bookings Management**: Real-time status tracking via timeline UI
- **P2P Escrow System**: (Mocked functionality showcasing payment releases upon completion)
- **Extra Charges & Extensions**: Providers can request more time/money, which customers map to approve. 
- **Work Proofing**: Before and after image capture system.
- **AI Diagnostics**: Mocked computer vision endpoint for diagnosing issues given a description.
- **Dashboards**: 3 Distinct dashboards tailored to Customers, Providers, and Admins.
- **Reviews & Trust Score**: Internal dynamic metric matching users securely based on quality history.
- **Premium UI/UX**: Custom dark matte glassmorphism styling, highly animated. 

## Local Setup

The database is built using Prisma ORM via an **SQLite** (`dev.db`) database so it functions perfectly without requiring you to install PostgreSQL locally on your machine.

### Start the platform
1. Run `npm install` (to fetch any remaining packages if they didn't fully resolve)
2. Run `npm run dev` to start the Next.js server locally on port `3000`.

### Demo Accounts

The database includes pre-seeded demo accounts:

1. **Customer Account** 
   - Email: `customer@demo.com`
   - Password: `password123`

2. **Service Provider Account**
   - Email: `provider@demo.com`
   - Password: `password123`

3. **Admin Account**
   - Email: `admin@demo.com`
   - Password: `password123`
