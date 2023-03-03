const dbConfig = {
  useNewUrlParser: true,
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
}

module.exports = dbConfig
