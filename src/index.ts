import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { AnimalType, Animal, TypeHabitatMap, TypeCanFly } from './shared/types/models';
import { MongoClient } from 'mongodb';

const connectUrl = "mongodb+srv://alexkolev05:mAiMuNkA@cluster0.9pmywmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "jivotni";
const cName = 'Animals';

const client = new MongoClient(connectUrl);

const app = express();
const router = Router();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


router.post('/new-animal', async(req, res) => {
  const { type, name, age }: { type: AnimalType, name: string, age: string } = req.body;
  const animal : Animal = {
    type, name,
    age: parseInt(age),
    habitat: TypeHabitatMap[type],
    canFly: TypeCanFly(type)
  }
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection<Animal>(cName);

  await collection.insertOne(animal);

  res.sendStatus(200);
})



app.use('/api', router);

app.listen(3000, () => {
  console.log("server listening on 3000.");
})
