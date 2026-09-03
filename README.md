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

## Screenshots

![screenshot](./public/favicon.ico)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
