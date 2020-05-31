module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: false,
  logging: process.env.NODE_ENV === 'production' ? ['error'] : 'all',
  migrations: ['src/migration/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
};
