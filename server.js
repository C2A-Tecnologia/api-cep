import 'dotenv/config'
import express from 'express'
import { getAddressByCep, setAddressByCep } from './controllers/cepController.js';
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send({ name: "API CEP", version: "0.0.1" });
});

app.get("/healthcheck", (req, res) => {
    res.send({ code: 200, status: "ok" });
});

app.get("/addressByCep", (req, res) => {
    const { query, body } = req;
    const resultado = getAddressByCep(query, body);
    res.send(resultado);

});

app.post("/addressByCep", (req, res) => {
    const { query, body } = req;
    const resultado = setAddressByCep(query, body);
    res.send(resultado);
});

app.listen(process.env.PORT, () => {
    console.log("Listen on port " + process.env.PORT);
})
