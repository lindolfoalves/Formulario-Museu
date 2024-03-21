import mysql2 from 'mysql2';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

export const db = mysql2.createConnection({
  host: "localhost",
  user: "lindolfo",
  password: "1234",
  database: "formulario2",
  port: 3308
})
export default api