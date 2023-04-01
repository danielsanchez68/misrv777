import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'        // MEM - FILE - MONGODB
const STR_CNX = process.env.STR_CNX || 'mongodb://127.0.0.1/ecommerce777'

export default {
    PORT,
    MODO_PERSISTENCIA,
    STR_CNX
}