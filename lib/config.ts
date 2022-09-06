export const zoomApp = {
    host: process.env.ZM_HOST || 'https://zoom.us',
    clientId: process.env.ZM_CLIENT_ID || '',
    clientSecret: process.env.ZM_CLIENT_SECRET || '',
    redirectUrl: process.env.ZM_REDIRECT_URL || '',
    sessionSecret: process.env.SESSION_SECRET || '',
};

//{
//     name: 'session',
//     httpOnly: true,
//     keys: [zoomApp.sessionSecret],
//     maxAge: 24 * 60 * 60 * 1000,
//     secure: process.env.NODE_ENV === 'production',
// }
export const sessionOptions = {
    cookieName: "parabol_session",
    password: zoomApp.sessionSecret,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

// Zoom App Info
export const appName = process.env.APP_NAME || 'zoom-app';
export const redirectUri = zoomApp.redirectUrl;

// HTTP
export const port = process.env.PORT || '3000';

// require secrets are explicitly imported
export default {
    appName,
    redirectUri,
    port,
};
