# SHOPAI

Futuristic AI shopping search experience built with Next.js, Tailwind CSS, and Framer Motion.

## Local Run

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a Supabase project.
2. In the Supabase SQL editor, run [supabase/schema.sql](./supabase/schema.sql).
3. Then run [supabase/seed.sql](./supabase/seed.sql).
4. Create `.env.local` in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-admin-password
ADMIN_SESSION_SECRET=a-long-random-secret
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

5. Restart the dev server.

If Supabase is not configured yet, SHOPAI automatically falls back to the built-in demo catalog.

## Admin Import

Visit [http://localhost:3000/admin/import](http://localhost:3000/admin/import) to load stores and products from JSON into Supabase.

Admin routes are now protected by a simple env-based login at [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

For this MVP auth layer to work, set:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

The importer is still a lightweight internal tool, but it is no longer openly accessible once those values are configured.

## Vercel Deployment

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repo into Vercel.
3. In Vercel project settings, add these environment variables:
   `NEXT_PUBLIC_SUPABASE_URL`
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   `SUPABASE_SERVICE_ROLE_KEY`
   `ADMIN_USERNAME`
   `ADMIN_PASSWORD`
   `ADMIN_SESSION_SECRET`
   `NEXT_PUBLIC_SITE_URL`
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain, for example `https://shopai.vercel.app`.
5. Deploy.

After deployment:

1. Open `/admin/login`.
2. Sign in with your admin credentials.
3. Import or update your catalog.
4. Test `/search?q=gift%20for%20teacher` in production.

For a cleaner launch checklist, use [DEPLOYMENT.md](./DEPLOYMENT.md).

## Current Search Features

- AI-ranked shopping results
- Geolocation-ready nearby store matching
- Top recommendation panel
- Store service highlights like gift wrapping, delivery, and pickup
- Supabase-backed catalog support with safe fallback mode
