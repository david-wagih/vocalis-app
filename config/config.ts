export const config = {
  secret: String(process.env.TOKEN_SECRET),
  clientID: String(process.env.GOOGLE_CLIENT_ID),
  clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
  redirectURL: String(process.env.GOOGLE_REDIRECT_URL),
  refreshToken: String(process.env.GOOGLE_REFRESH_TOKEN),
};