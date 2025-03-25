import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import contractRoutes from './routes/contractRoutes.js'

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// allow to parse json data
app.use(express.json());

// TODO setup corsa

// user routes
// app.use('/api/users', userRoutes); // TODO make userRouter

// contract routes
// app.use('/api/contracts', contractRoutes); // TODO make contractRouter

// start server
app.listen(PORT, () => {
    console.log('Server is running');
});