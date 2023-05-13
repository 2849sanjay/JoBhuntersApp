
if (process.env_NODE_ENV != "production") {
    require('dotenv').config()
}

module.exports = {
    PORT: process.env.PORT
}