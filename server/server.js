import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

app.get("/api/player", (req, res) => {
  sql`SELECT * FROM player ORDER BY score DESC LIMIT 5`.then((rows) => {
    console.log("test");
    res.send(rows);
  });
});

app.post("/api/player", async (req, res) => {
  const { name, score } = req.body;

  try {
    const result =
      await sql`INSERT INTO player(name, score) VALUES (${name}, ${score}) RETURNING *`;
    res.json(result[0]);
  } catch (error) {
    console.error("Error inserting player:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
