export const isDev = process.env.NODE_ENV === "development";

export const ORIGIN_URL = isDev
  ? "http://localhost:3000"
  : "https://main.d2lguap75cwei4.amplifyapp.com/";
