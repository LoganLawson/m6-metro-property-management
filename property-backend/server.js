const express = require("express");
var cors = require('cors')
const { MongoClient } = require("mongodb");
const app = express()
const port = 3005

const uri = "mongodb://root:example@localhost:27017";
const options = { authSource: "admin" };
const client = new MongoClient(uri, options);

const retrieve = async (q) => {
  try {
    await client.connect(); 
    const db = client.db("metroProperty");
    const col = db.collection("properties");
    const cursor = col.find(q);
    return await cursor.toArray()
  } finally {
    client.close;
  }
}

const router = express.Router();
app.use('/properties', router);

router.get('/', cors(), async (req, res) => {
  const properties = await retrieve(req.query);
  res.send(properties)
  })

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})