// require packages used in the project
import express from "express";
// 新的匯入方法 require express-handlebars here
import { create } from "express-handlebars";

// 新的匯入方法 require外部的json檔案
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const snackList = require("./snack.json");

const app = express();
const port = process.env.PORT || 8080;
const exphbs = create({ defaultLayout: "main" });

// setting template engine
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

// setting static files
app.use(express.static("public"));

// routes setting
app.get("/", (req, res) => {
  res.render("index", { snacks: snackList.results });
});

app.get("/search", (req, res) => {
  // console.log("req.query:", req.query);
  const keyword = req.query.keyword;
  const snacks = snackList.results.filter((snack) => {
    return snack.name.includes(keyword) || snack.category.includes(keyword);
  });
  res.render("index", { snacks: snacks });
});

app.get("/snack/:snack_id", (req, res) => {
  // console.log("req.params.snack_id", req.params.snack_id);
  const snack = snackList.results.find(
    (snack) => snack.id.toString() === req.params.snack_id
  );
  res.render("show", { snack: snack });
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
