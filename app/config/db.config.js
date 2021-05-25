module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "commercepree_dev",
  dialect: "mysql",
  PORT: "6033",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
