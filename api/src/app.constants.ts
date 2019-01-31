// import { RedisOptions } from "ioredis";
// import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const clientHost: string = process.env.CLIENT_HOST || "localhost";
export const serverHost: string = process.env.SERVER_HOST || "localhost";

export const serverProtocol = process.env.SERVER_PROTOCOL || "http";
export const clientProtocol = process.env.CLIENT_PROTOCOL || "http";

export const clientPort: number = parseInt(process.env.CLIENT_PORT as string, 10) || 3000;
export const serverPort: number = parseInt(process.env.SERVER_PORT as string, 10) || 5000;

export const serverUrl: string = `${serverProtocol}://${serverHost}:${serverPort}`;
export const clientUrl: string = `${clientProtocol}://${clientHost}:${clientPort}`;

export const redisSessionPrefix = "session:";
export const userSessionIdPrefix = "userSessionIds:";

export const confirmUserPrefix = "user-confirmation:";
export const forgotPasswordPrefix = "forgot-password:";

export const twitterCallbackUrl = `${clientUrl}/auth/twitter/callback`;

export const twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY;
export const twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET;

export const sessionSecret = process.env.SESSION_SECRET as string;
export const jwtSecret = process.env.JWT_SECRET as string;

// export const redisConfig: RedisOptions = {
//   port: parseInt(process.env.REDIS_PORT as string, 10),
//   host: process.env.REDIS_HOST
// };
//
// export const postgresConfig: PostgresConnectionOptions = {
//   type: "postgres",
//   host: process.env.POSTGRES_HOST,
//   port: parseInt(process.env.POSTGRES_PORT as string, 10),
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB
// };
