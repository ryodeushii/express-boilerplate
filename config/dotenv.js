import { config as envConfig } from 'dotenv';


const { parsed } = envConfig();

export const config = {
  port: Number(parsed.PORT) || 3000,
};
