import express, { Express, Request, Response } from "express";
import connection from "./database/sequelize";
import bodyParse from "body-parser"

import films from "./app/controllers/FilmController"

const app: Express = express();
const port: number = 3333;

app.use(bodyParse.json())

app.use("/films", films)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript!!!")
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`)
});

connection();