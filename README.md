# 💰 Finance Tracker

A modern, full-stack financial management application built with Next.js 15, React 19, and TypeScript. Track your income, expenses, and visualize your financial data with interactive charts and insights.

## ✨ Features

- 📊 **Interactive Dashboard** - Visualize your financial data with beautiful charts (Area, Bar, Line, Pie, Radar)
- 💳 **Transaction Management** - Add, edit, delete, and import transactions via CSV
- 🏦 **Account Management** - Manage multiple accounts and track balances
- 🏷️ **Category Organization** - Organize transactions with custom categories
- 📅 **Date Range Filtering** - Filter data by custom date ranges with manual input
- 📈 **Real-time Analytics** - Track income, expenses, and remaining balance
- 🔐 **Secure Authentication** - Powered by Clerk for secure user management
- 🎨 **Modern UI** - Built with Shadcn UI and Tailwind CSS
- ⚡ **High Performance** - Optimized with React Query caching and Next.js 15

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 15.2.3 (App Router)
- **UI Library:** React 19.0.0
- **Language:** TypeScript 5.7.3
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** Shadcn UI + Radix UI
- **Icons:** Lucide React
- **Charts:** Recharts 2.15.0
- **Forms:** React Hook Form + Zod validation
- **Date Handling:** date-fns 4.1.0

### Backend
- **Database:** PostgreSQL (via Neon)
- **ORM:** Drizzle ORM 0.36.4
- **API:** Hono 4.6.14 (Edge Runtime)
- **Authentication:** Clerk 6.9.3

### Data Management
- **State Management:** TanStack Query (React Query) 5.62.2
- **CSV Processing:** Papaparse 5.4.1
- **File Upload:** React Dropzone 14.3.5

## 📦 Installation

### Prerequisites
- Node.js 23.0.0 or higher
- npm or bun package manager
- PostgreSQL database (Neon recommended)
- Clerk account for authentication

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Deep-glitch1/Finance-Tracker.git
cd Finance-Tracker
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=your_neon_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

4. **Run database migrations**
```bash
npm run db:generate
npm run db:migrate
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open your browser**
```
http://localhost:3000
```

## 🗄️ Database Schema

The application uses Drizzle ORM with PostgreSQL:

- **accounts** - User financial accounts
- **categories** - Transaction categories
- **transactions** - Income and expense records

## 🎯 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Drizzle Studio
```

## 📊 Key Features Explained

### Dashboard
- Real-time financial overview with total income, expenses, and remaining balance
- Interactive charts with multiple visualization options
- Date range filtering for custom time periods
- Account-specific filtering

### Transactions
- Bulk import via CSV files
- Inline editing and deletion
- Category and account assignment
- Date-based filtering

### Accounts & Categories
- Create custom accounts and categories
- Bulk delete operations
- Real-time updates across the dashboard

## 🔒 Authentication

Authentication is handled by Clerk, providing:
- Email/password authentication
- Social login options
- Secure session management
- Protected routes with middleware

## ⚡ Performance Optimizations

- **React Query Caching:** 10-minute staleTime, 30-minute cache time
- **Next.js 15 Optimizations:** Turbopack, optimized package imports
- **Edge Runtime:** API routes run on the edge for low latency
- **Code Splitting:** Automatic chunking for optimal load times

## 🛠️ Development

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   └── api/               # API routes (Hono)
├── components/            # React components
│   └── ui/               # Shadcn UI components
├── features/             # Feature-specific logic
│   ├── accounts/
│   ├── categories/
│   ├── transactions/
│   └── summary/
├── db/                   # Database schema and config
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── providers/            # React context providers
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Zod for runtime validation
- React Hook Form for form management

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy!

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication & User Management
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful UI Components
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

⭐ **Star this repo** if you find it helpful!
