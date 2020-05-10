import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => res.send("hello world"));

app.listen(port, () => console.log(`http://localhost:${port}`));
