import mysql, { createConnection } from 'mysql'

export const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'jmi_connect'
})