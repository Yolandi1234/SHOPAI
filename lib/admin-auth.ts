export const adminCookieName = "shopai_admin_session";

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = process.env.ADMIN_PASSWORD;
const adminSessionSecret = process.env.ADMIN_SESSION_SECRET;

export const hasAdminAuthEnv = Boolean(
  adminUsername && adminPassword && adminSessionSecret
);

export const validateAdminCredentials = (username: string, password: string) => {
  if (!adminUsername || !adminPassword) return false;
  return username === adminUsername && password === adminPassword;
};

export const createAdminSessionToken = () => adminSessionSecret ?? "";

export const verifyAdminSessionToken = (token?: string) => {
  if (!token || !hasAdminAuthEnv) return false;
  return token === createAdminSessionToken();
};
