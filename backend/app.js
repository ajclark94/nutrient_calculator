const express = require("express");
const { Client } = require("pg");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

client.connect();

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "../item.html");
});

app.post("/submit", async (req, res) => {
  const {
    item_name,
    portion_size,
    uom,
    recipe_number,
    calories,
    protein,
    carbohydrate,
    total_fat,
    saturated_fat,
    polyunsaturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    potassium,
    phosphorus,
    calcium,
    iron,
    total_fiber,
    sugar,
    fluid,
    vitamin_a,
    vitamin_c,
    vitamin_b1,
    vitamin_b2,
    niacin,
    vitamin_b6,
    magnesium,
    zinc,
    copper,
    vitamin_e,
    pantothenic_acid,
    vitamin_b12,
    folate,
    vitamin_k,
    selenium,
    vitamin_d,
    iodine,
    chloride,
    biotin,
    fluoride,
    choline,
    linoleic_acid,
    manganese,
    molybdenum,
    chromium,
    carb_cnt,
    ingredients,
  } = req.body;

  const query = {
    text: "INSERT INTO items (item_name, portion_size, uom, recipe_number, calories, protein, carbohydrate, total_fat, saturated_fat, polyunsaturated_fat, trans_fat, cholesterol, sodium, potassium, phosphorus, calcium, iron, total_fiber, sugar, fluid, vitamin_a, vitamin_c, vitamin_b1, vitamin_b2, niacin, vitamin_b6, magnesium, zinc, copper, vitamin_e, pantothenic_acid, vitamin_b12, folate, vitamin_k selenium, vitamin_d, iodine, chloride, biotin, fluoride, choline, linoleic_acid, manganese, molybdenum, chromium, carb_cnt, ingredients) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50)",
    values: [
      item_name,
      portion_size,
      uom,
      recipe_number,
      calories,
      protein,
      carbohydrate,
      total_fat,
      saturated_fat,
      polyunsaturated_fat,
      trans_fat,
      cholesterol,
      sodium,
      potassium,
      phosphorus,
      calcium,
      iron,
      total_fiber,
      sugar,
      fluid,
      vitamin_a,
      vitamin_c,
      vitamin_b1,
      vitamin_b2,
      niacin,
      vitamin_b6,
      magnesium,
      zinc,
      copper,
      vitamin_e,
      pantothenic_acid,
      vitamin_b12,
      folate,
      vitamin_k,
      selenium,
      vitamin_d,
      iodine,
      chloride,
      biotin,
      fluoride,
      choline,
      linoleic_acid,
      manganese,
      molybdenum,
      chromium,
      carb_cnt,
      ingredients,
    ],
  };

  try {
    const result = await client.query(query);
    console.log(`Inserted ${result.rowCount} row(s) of data`);
    res.send("Data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data", error);
    res.status(500).send("Error inserting data");
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
