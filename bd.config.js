import mysql2 from "mysql2/promise";

const pool = mysql2.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b258fa959b58a6",
    password: "4ceeaf90",
    database: "heroku_0ea0b5d2aa8d7ac"
});

export default pool;