# My Editor

A real-time collaborative text editor built with Next.js, Liveblocks, Lexical, and Clerk for authentication.

## Features

- Real-time collaboration: multiple users can edit the same document at the same time.
- Rich Text editing built on top of Lexical.
- Secure Authentication with Clerk.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Rename `.env.example` to `.env.local` and fill in the required environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: From your Clerk dashboard.
   - `CLERK_SECRET_KEY`: From your Clerk dashboard.
   - `LIVEBLOCKS_SECRET_KEY`: From your Liveblocks dashboard.
4. Run `npm run dev` to start the development server.
