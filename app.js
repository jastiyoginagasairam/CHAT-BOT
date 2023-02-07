require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/conn");
const router = require("./Routes/router");
const PORT = process.env.port;
const key=process.env.KEY

app.use(express.json());
app.use(cors());
app.use(router);

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());

app.post("/chat", async (req, res) => {

  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
