import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

interface Entry {
  id: number;
  title: string;
  category: string;
  author: string;
}

const entries: Entry[] = [];
let nextId = 1;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* ───────────── additional route ───────────── */
// GET /  → raw list as text/json
app.get("/", (_req, res) => {
  res.type("text").send(JSON.stringify(entries, null, 2));
});
/* ──────────────────────────────────────────── */

// list all entries
app.get("/entries", (_req, res) => {
  res.json(entries);
});

// create new entry
app.post("/entries", (req, res) => {
  const { title, category, author } = req.body as Partial<Entry>;

  if (!title || !category || !author) {
    res.status(400).json({ error: "title, category and author are required" });
    return;
  }

  const entry: Entry = { id: nextId++, title, category, author };
  entries.push(entry);

  // log raw data every time a new entry arrives
  console.log("Current entries:\n", JSON.stringify(entries, null, 2));

  res.status(201).json(entry);
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () =>
  console.log(`[Server] running at http://localhost:${port}`)
);
