import { db } from "./db.js";
import express from 'express';

const app = express();
app.get('/', async (req, res) => {
  const user = await db.course.findUnique({
    where: {
      userId: "devinjohw"
    },
    select: {
      id: true,
    }
  })
  res.json(JSON.stringify(user));
})

app.listen(8080);
