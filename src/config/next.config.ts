export default {
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}?timeout=${process.env.POSTGRES_COMMAND_TIMEOUT}`,
  covidApiBaseUrl: `${process.env.COVID_API_BASE_URL}`,
};
