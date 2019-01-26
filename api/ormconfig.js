module.exports = [
  {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [
      "./src/entity/**/*.entity.ts",
      "./dist/entity/**/*.entity.js"
    ],
    migrations: [
      "./src/migration/**/*.ts"
    ],
    subscribers: [
      "./src/subscriber/**/*.ts"
    ],
    cli: {
      entitiesDir: "./src/entity",
      migrationsDir: "./src/migration",
      subscribersDir: "./src/subscriber"
    }
  },
  {
    name: "test",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    dropSchema: true,
    logging: true,
    entities: [
      "./src/entity/**/*.entity.ts",
      "./dist/entity/**/*.entity.js"
    ],
    migrations: [
      "./src/migration/**/*.ts"
    ],
    subscribers: [
      "./src/subscriber/**/*.ts"
    ],
    cli: {
      entitiesDir: "./src/entity",
      migrationsDir: "./src/migration",
      subscribersDir: "./src/subscriber"
    }
  },
  {
    name: "production",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [
      "./src/entity/**/*.entity.ts",
      "./dist/entity/**/*.entity.js"
    ],
    migrations: [
      "./src/migration/**/*.ts"
    ],
    subscribers: [
      "./src/subscriber/**/*.ts"
    ],
    cli: {
      entitiesDir: "./src/entity",
      migrationsDir: "./src/migration",
      subscribersDir: "./src/subscriber"
    }
  },
];
