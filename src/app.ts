import express, { Express, NextFunction, Request, Response } from "express";
import connection from "./database/sequelize";
import bodyParse from "body-parser"
import routes from "./app/routes/index"
import AppError from "./utils/AppError";

const app: Express = express();
const port: number = 3333;

app.use(bodyParse.json())

app.use("/api/v1", routes)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript!!!")
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(err.getHttpCode()).send(err.getError())
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta : ${port}`)
});

connection();