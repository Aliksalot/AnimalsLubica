import express, { Request, Response, Router } from 'express';

const app = express();
const router = Router();

router.get('/', (req, res) => {
  res.send(200);
})

app.use('/api', router);

app.listen(3000, () => {
  console.log("server listening on 3000.");
})
