// require packages used in the project
import express from "express";
// 新的匯入方法 require express-handlebars here
import { create } from "express-handlebars";

// 新的匯入方法 require外部的json檔案
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const snackList = require("./snack.json");

const app = express();
const port = 3300;
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
  // const snackOne = {
  //   id: 1,
  //   name: "太陽牌冰品",
  //   category: "甜點冰品",
  //   image:
  //     "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%A4%AA%E9%99%BD%E7%89%8C%E7%B4%85%E8%B1%86%E5%86%B0-1592969966.jpg",
  //   location: "台南市中西區民權路一段41號",
  //   phone: "(06)2259375",
  //   business_hours: "10:00-21:20",
  //   google_map: "https://goo.gl/maps/s1Qsz6trTMK7HMbG6?coh=178571&entry=tt",
  //   rating: 4.5,
  //   description:
  //     "太陽牌是台南的老字號冰品店，許多台南人從媽媽肚子裡就開始吃，綿密的紅豆牛奶霜和可愛立方狀草湖芋仔冰是店內傳承60年的必點招牌，紅豆牛奶霜的用料扎實，飽滿圓潤的紅豆煮得恰到好處，搭配一湯匙濃郁牛奶霜，入口即化。而草湖芋仔冰一份五顆，非常推薦芋頭和花生口味，在口中縈繞的香濃程度，就像直接吃到芋泥與花生本尊!!",
  // };
  res.render("show", { snack: snack });
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
