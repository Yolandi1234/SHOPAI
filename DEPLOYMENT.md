# SHOPAI Deployment Checklist

## Before You Deploy

1. Make sure Supabase is ready.
2. Run [supabase/schema.sql](./supabase/schema.sql).
3. Run [supabase/seed.sql](./supabase/seed.sql) or import your own catalog via `/admin/import`.
4. Confirm your local build works:

```powershell
npm run lint
npm run build
```

## Required Environment Variables

Add these in Vercel Project Settings -> Environment Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_USERNAME=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
NEXT_PUBLIC_SITE_URL=
```

## Vercel Steps

1. Push the project to GitHub.
2. Create a new Vercel project from that repo.
3. Let Vercel detect Next.js automatically.
4. Add all required environment variables.
5. Set `NEXT_PUBLIC_SITE_URL` to your deployed domain.
6. Deploy.

## After Deploy

1. Visit `/admin/login`.
2. Sign in with your admin credentials.
3. Open `/admin/import`.
4. Import your product and store JSON if needed.
5. Test:
   `/`
   `/search?q=gift%20for%20teacher`
   `/admin/login`
   `/admin/import`

## Recommended Next Production Improvements

1. Add real admin authentication with Supabase Auth or another provider.
2. Add rate limiting on admin APIs.
3. Replace placeholder retailer `#` links with real destinations.
4. Add favicon and social share images.
5. Add analytics and error monitoring.
