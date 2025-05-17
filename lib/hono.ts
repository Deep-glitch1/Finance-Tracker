import { hc } from "hono/client";

import { AppType } from "@/app/api/[[...route]]/route";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
if (!APP_URL) {
  console.error('NEXT_PUBLIC_APP_URL is not defined');
}
console.log('Using API URL:', APP_URL);

export const client = hc<AppType>(APP_URL!);
