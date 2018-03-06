module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'myv',
        user: process.env.DB_USER || 'myv',
        password: process.env.DB_PASS || 'myv',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './myv.sqlite'
        }
    }
}
