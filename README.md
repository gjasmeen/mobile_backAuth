Final CPRG-303 — Supabase Authentication Integration 

This project implements full authentication in an Expo React Native mobile application using Supabase Auth, React Hook Form, and Zod. It includes sign‑up, sign‑in, sign‑out, protected routes, session persistence, and proper error handling. 

Features Implemented 

   Authentication (Supabase Auth) 

   Email/password Sign‑Up 

   Email/password Sign‑In 

   Sign‑Out from authenticated area 

   Secure session handling using Supabase 

   Environment variables for Supabase URL + anon key 

   Form Validation 

   Built using React Hook Form 

   Zod schema validation 

   Clear error messages for invalid credentials, weak passwords, missing fields, and network issues 

   Protected Navigation 

   Unauthenticated users cannot access protected screens 

On app launch: 

   App checks for existing Supabase session 

   Displays a loading/splash screen while restoring session 

   Redirects correctly after login/logout 

   UI/UX Quality 

   Consistent layout across all auth screens 

   Loading indicators during async operations 

   No crashes on failed authentication 

   Clean, readable error feedback 

   Tech Stack 

   Expo (React Native) 

   Supabase Auth 

   Expo Router 

   React Hook Form 

   Zod 

   TypeScript 

Setup Instructions 

   1. Clone the repository 

   Code 

   git clone <your-repo-url> 

   cd Final-CPRG303 

   2. Install dependencies 

   Code 

   npm install 

   3. Create a .env file in the project root 

   Code 

   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url 

   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key 

   4. Ensure .env is in .gitignore 

   The .env file must not be committed. 

   5. Start the application 

   Code 

   npm run start 

   Use: 

      w for web 

      a for Android 

      i for iOS 

Supabase Setup Notes 

   A Supabase project was created for this app. 


The Project URL and anon key were copied into the .env file. 

   @supabase/supabase-js was installed and configured. 

   Implemented methods: 

   supabase.auth.signUp() 

   supabase.auth.signInWithPassword() 

   supabase.auth.signOut() 

   supabase.auth.getSession() 

Test account for has an account: 

   username: johndoe@gmail.com
   
   password: 123456


Team Members:

   Jasmeen Garcha 

   Anagha Roy 

   Ryan Richardson 