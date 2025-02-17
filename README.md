# Document Upload and Chat Application

This is a [Next.js](https://nextjs.org) project that allows users to sign up with their email using a Supabase account, upload documents, and engage in discussions about those documents. The application is designed to provide a seamless experience for managing and interacting with user-uploaded files.

## Features

- **User Authentication**: Users can sign up and log in using their email and password through Supabase.
- **Document Upload**: After logging in, users can upload documents that are securely stored and associated with their user ID.
- **Document Interaction**: Users can chat about the uploaded documents, facilitating discussions and collaboration.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root of the project and add your Supabase URL and Anon Key:
   ```
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage

- **Sign Up / Log In**: Use the authentication form to create a new account or log in to an existing one.
- **Upload Documents**: Once logged in, navigate to the upload section to select and upload your documents.
- **Chat Feature**: Engage in discussions about your uploaded documents, enhancing collaboration and feedback.

## Learn More

To learn more about Next.js and Supabase, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Supabase Documentation](https://supabase.io/docs) - Understand how to use Supabase for authentication and storage.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
