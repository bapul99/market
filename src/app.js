import express from 'express';
import connect from './schemas/index.js';
import productsRouter from './routes/products.router.js';
import errorHandlerMiddleware from './middlewarmies/error-handler.middleware.js';

const app = express();
const PORT = 3000;

//MongoDB 연결
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//라우터
const router = express.Router();

app.get('/', (req, res) => {
  return res.json({ message: 'hello world!' });
});

app.use('/', productsRouter);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});