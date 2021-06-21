import express from "express";
import session from "express-session";
import path from "path";
import bodyParser from "body-parser";
import cors from 'cors'
import { routes } from "./routes";

const app = express();

app.use(cors())
app.options('*', cors())

app.use(
  session({
    secret: "8298f5b6-e391-4cab-b196-d0a143a9d658",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "src")));

app.use(routes);

try {
  app.listen(2021, () => {
    console.clear();
    console.log(
      "\x1b[33m",
      "[**",
      "\x1b[37m",
      "Server is running on",
      "\x1b[36m",
      "http://localhost:2021/",
      "\x1b[33m",
      "**]"
    );
  });
} catch (error) {
  console.log("** ERROR INSTANCE SERVER **: " + error);
}