import express, { json } from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

// Create a connection pool to the PostgreSQL database
const pool = new Pool({
  user: 'standard',
  host: '127.0.0.1',
  database: 'ingredients',
  password: 'Shamwow94!',
  port: 5432,
});

// Middleware to parse JSON request bodies
app.use(json());

// Route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { 
      item_name,
      portion,
      units,
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
      managanese,
      molybdenum,
      chromium,
      carb_cnt,
      ingredients,
     } = req.body;

    // Insert the form data into the "items" table
    await pool.query('INSERT INTO items (item_name, portion, units, recipe_number, calories, protein, carbohydrate, total_fat, saturated_fat, polyunsaturated_fat, trans_fat, cholesterol, sodium, potassium, phosphorus, calcium, iron, total_fiber, sugar, fluid, vitamin_a, vitamin_c, vitamin_b1, vitamin_b2, niacin, vitamin_b6, magnesium, zinc, copper, vitamin_e, pantothenic_acid, vitamin_b12, folate, vitamin_k, selenium, vitamin_d, iodine, chloride, biotin, fluoride, choline, linoleic_acid, managanese, molybdenum, chromium, carb_cnt, ingredients) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47)', [item_name, portion, units, recipe_number, calories, protein, carbohydrate, total_fat, saturated_fat, polyunsaturated_fat, trans_fat, cholesterol, sodium, potassium, phosphorus, calcium, iron, total_fiber, sugar, fluid, vitamin_a, vitamin_c, vitamin_b1, vitamin_b2, niacin, vitamin_b6, magnesium, zinc, copper, vitamin_e, pantothenic_acid, vitamin_b12, folate, vitamin_k, selenium, vitamin_d, iodine, chloride, biotin, fluoride, choline, linoleic_acid, managanese, molybdenum, chromium, carb_cnt, ingredients]);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});